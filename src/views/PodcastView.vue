<template>
  <div class="podcast_view">
    <div class="podcast_view-episodes_count card">Episodes: {{ podcastEpisodes.length === 501 ? '500+' : podcastEpisodes.length }}</div>
    <div class="podcast_view-episodes_list card"><EpisodesList :podcastId="podcastId" /></div>
  </div>
</template>

<script>
import EpisodesList from '../components/EpisodesList.vue';

export default {
  components: { EpisodesList },
  data() { 
    return {
      podcastId: null,
      podcastEpisodes: [],
    };
  },
  created() { 
    this.podcastId = this.$route.params.podcastId;
  },
  async beforeMount() {
    const podcast = await this.$store.actions.fetchPodcast(this.podcastId);
    this.podcastEpisodes = await this.$store.actions.fetchPodcastEpisodes(podcast.collectionId);
  },
};
</script>

<style scoped>
.podcast_view {
  display: flex;
  flex-flow: column;
  gap: 10px;
}
.podcast_view-episodes_count {
  font-weight: bold;
  font-size: 20px;
}
</style>