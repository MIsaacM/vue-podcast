<template>
  <MainLayout>
    Podcast View
    <PodcastLayout>
      <div>Episodes: XX</div>
      <div><EpisodesList /></div>
    </PodcastLayout>
  </MainLayout>
</template>

<script>
import MainLayout from '../layouts/MainLayout.vue';
import PodcastLayout from '../layouts/PodcastLayout.vue';
import EpisodesList from '../components/EpisodesList.vue';

export default {
  components: { MainLayout, PodcastLayout, EpisodesList },
};
</script>

<style scoped>
</style>