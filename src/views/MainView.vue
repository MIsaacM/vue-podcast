<template>
  <MainLayout>
    Main View

    Filter

    <PodcastCard 
      v-for="podcast in podcasts" 
      :key="getPodcastId(podcast)" 
      :podcastId="getPodcastId(podcast)"
    />
  </MainLayout>
</template>

<script>
import MainLayout from '../layouts/MainLayout.vue';
import PodcastCard from '../components/PodcastCard.vue';

export default {
  // inject: [ '$store' ],
  components: {
    MainLayout,
    PodcastCard,
  },
  data() { 
    return {
      podcasts: [],
    };
  },
  async beforeMount() {
    this.podcasts = await this.$store.actions.fetchPodcasts();
  },
  methods: {
    getPodcastId(podcast) {
      return podcast.id?.attributes && podcast.id?.attributes['im:id'] || null;
    },
  },
};
</script>

<style scoped>
</style>