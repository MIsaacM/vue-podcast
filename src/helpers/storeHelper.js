/* eslint-disable no-unsafe-finally */
import { reactive } from 'vue';
import { parse } from 'rss-to-json';
import Axios from './axiosHelper';
import utils from '../utils/utils';

const state = reactive({
  loadingRoute: false,
  loadingData: false,
  podcastList: [],
  podcastDetailsList: {},
});

const actions = {
  async fetchPodcasts(limit = 100) {
    try {
      state.loadingData = true;
      const cachedPodcastList = utils.getFromCache('podcastList');
      if (cachedPodcastList) {
        state.podcastList = cachedPodcastList;
      } else {
        const axios = new Axios({ baseURL: 'https://itunes.apple.com' });
        const podcastsResponse = await axios.instance.get(`us/rss/toppodcasts/limit=${limit}/genre=1310/json`);
        const podcasts = podcastsResponse?.data?.feed?.entry || [];
        utils.setInCache('podcastList', podcasts, 86400000);
        state.podcastList = podcasts;
      }
    } catch (error) {
      console.error({
        message: 'Error on fetchPodcasts',
        error,
      });
    } finally {
      state.loadingData = false;
      return state.podcastList;
    }
  },
  async fetchPodcast(podcastId) {
    try {
      if (!podcastId) {
        console.error('"podcastId" is mandatory to look for a podcast');
        return {};
      }

      state.loadingData = true;
      const cachedPodcast = utils.getFromCache(`podcast-${podcastId}`);
      if (cachedPodcast) {
        state.podcastDetailsList[podcastId] = cachedPodcast;
      } else {
        const axios = new Axios({ baseURL: 'https://api.allorigins.win/raw?url=' });
        const podcastResponse = await axios.instance.get(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcast`);
        const podcast = podcastResponse?.data?.results?.length && podcastResponse.data.results[0] || [];
        utils.setInCache(`podcast-${podcastId}`, podcast, 86400000);
        state.podcastDetailsList[podcastId] = podcast;
      }
    } catch (error) {
      console.error({
        message: 'Error on fetchPodcast',
        error,
      });
    } finally {
      state.loadingData = false;
      return state.podcastDetailsList[podcastId];
    }
  },
  async fetchPodcastEpisodes(podcastId) {
    let episodes = [];
    try {
      if (!podcastId) {
        console.error('"podcastId" is mandatory to look for the list of podcast episodes');
        return [];
      }

      state.loadingData = true;
      const podcast = await this.fetchPodcast(podcastId);
      const feed = await this.fetchFeed(podcast?.feedUrl || null);
      episodes = feed?.items || [];
    } catch (error) {
      console.error({
        message: 'Error on fetchPodcastEpisodes',
        error,
      });
    } finally {
      state.loadingData = false;
      return episodes;
    }
  },
  async fetchFeed(url) {
    let jsonFeed = {};
    try {
      if (!url) {
        console.error('"url" is mandatory to get url feed');
        return {};
      }

      state.loadingData = true;
      jsonFeed = await parse(url);

    } catch (error) {
      console.error({
        message: 'Error on fetchFeed',
        error,
      });
    } finally {
      state.loadingData = false;
      return jsonFeed;
    }
  },
};

export default {
  state,
  actions,
};
