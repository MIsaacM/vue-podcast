<template>
  <MainLayout>
    Podcast View
    <PodcastLayout :podcastId="podcastId">
      <div>Episodes: {{ podcastEpisodes.length === 501 ? '500+' : podcastEpisodes.length }}</div>
      <div><EpisodesList :podcastId="podcastId" /></div>
    </PodcastLayout>
  </MainLayout>
</template>

<script>
import MainLayout from '../layouts/MainLayout.vue';
import PodcastLayout from '../layouts/PodcastLayout.vue';
import EpisodesList from '../components/EpisodesList.vue';

export default {
  components: { MainLayout, PodcastLayout, EpisodesList },
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