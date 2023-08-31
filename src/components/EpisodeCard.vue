<template>
  <div class="episode_card card">
    <div class="episode_card-title">{{ episode.trackName }}</div>
    <div class="episode_card-description" v-html="feed.description"></div>
    <div class="episode_card-audio">
      <audio controls>
        <source src="" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      episodes: [],
      feed: {},
    };
  },
  computed: {
    podcastId() {
      return this.$route.params.podcastId;
    },
    episodeId() {
      return this.$route.params.episodeId;
    },
    episode() {
      return this.episodes.find(episode => episode.trackId == this.episodeId) || {};
    },
  },
  async beforeMount() {
    this.episodes = await this.$store.actions.fetchPodcastEpisodes(this.podcastId);
    const podcast = await this.$store.actions.fetchPodcast(this.podcastId);
    const feedUrl = podcast?.feedUrl || null;
    this.feed = await this.$store.actions.fetchFeed(feedUrl);
  },
};
</script>

<style scoped>
.episode_card-title {
  font-weight: bold;
  font-size: 20px;
}
.episode_card-description {
  font-style: italic;
}
audio {
  width: 100%;
  margin-top: 30px;
}
</style>