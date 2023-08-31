<template>
  <MainLayout>
    <PodcastDetailedCard :podcastId="podcastId" />
    <RouterView />
  </MainLayout>
</template>

<script>
import { RouterView } from 'vue-router';
import MainLayout from '../layouts/MainLayout.vue';
import PodcastDetailedCard from '../components/PodcastDetailedCard.vue';

export default {
  components: { RouterView, MainLayout, PodcastDetailedCard },
  data() {
    return {
      podcastId: null,
    };
  },
  created() { 
    this.podcastId = this.$route.params.podcastId;
  },
};
</script>

<style scoped>
</style>