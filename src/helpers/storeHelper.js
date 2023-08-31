import { reactive } from 'vue';
import { parse } from 'rss-to-json';
import Axios from './axiosHelper';

const state = reactive({
  loadingRoute: false,
  podcastList: [],
  podcastDetailsList: {},
});

const actions = {
  async fetchPodcasts(limit = 100) {
    const axios = new Axios({ baseURL: 'https://itunes.apple.com' });
    const podcastsResponse = await axios.instance.get(`us/rss/toppodcasts/limit=${limit}/genre=1310/json`);
    const podcasts = podcastsResponse?.data?.feed?.entry || [];
    state.podcastList = podcasts;
    return podcasts;
  },
  async fetchPodcast(podcastId) {
    if (!podcastId) {
      console.error('"podcastId" is mandatory to look for a podcast');
      return {};
    }
    const axios = new Axios({ baseURL: 'https://api.allorigins.win/raw?url=' });
    const podcastResponse = await axios.instance.get(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcast`);
    const podcast = podcastResponse?.data?.results?.length && podcastResponse.data.results[0] || [];
    // collectionId = podcastId
    state.podcastDetailsList[podcast.collectionId] = podcast;
    return podcast;
  },
  async fetchPodcastEpisodes(podcastId, limit = 500) {
    if (!podcastId) {
      console.error('"podcastId" is mandatory to look for the list of podcast episodes');
      return [];
    }
    const axios = new Axios({ baseURL: 'https://api.allorigins.win/raw?url=' });
    const episodesResponse = await axios.instance.get(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=${limit}`);
    const episodes = episodesResponse?.data?.results?.length && episodesResponse?.data?.results || [];
    return episodes;
  },
  async fetchFeed(url) {
    if (!url) {
      console.error('"url" is mandatory to get url feed');
      return {};
    }
    const jsonFeed = await parse(url);
    return jsonFeed;
  },
};

export default {
  state,
  actions,
};
