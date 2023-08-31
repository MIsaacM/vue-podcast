<template>
  <div class="episode_card card">
    <div class="episode_card-title">{{ episode.title }}</div>
    <div class="episode_card-description" v-html="episode.description"></div>
    <div class="episode_card-audio">
      <audio controls v-if="audioUrl && audioType">
        <source :src="audioUrl" :type="audioType">
        Your browser does not support the audio element.
      </audio>
      <div v-else>Audio not available yet</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      episodes: [],
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
      return this.episodes.find(episode => episode.id == this.episodeId) || {};
    },
    audioUrl() {
      const url = this.audioData?.url || '';
      return url?.substring(0, url.indexOf('.mp3')+4) || '';
    },
    audioType() {
      return this.audioData?.type || '';
    },
    audioData() {
      return this.episode?.enclosures?.length && this.episode.enclosures[0] || null;
    },
  },
  async beforeMount() {
    this.episodes = await this.$store.actions.fetchPodcastEpisodes(this.podcastId);
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