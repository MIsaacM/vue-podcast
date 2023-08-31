<template>
    Podcast View
    <div>Episodes: {{ podcastEpisodes.length === 501 ? '500+' : podcastEpisodes.length }}</div>
    <div><EpisodesList :podcastId="podcastId" /></div>
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
</style>