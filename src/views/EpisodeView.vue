<template>
  <MainLayout>
    Episode View
    <PodcastLayout>
      <EpisodeCard />
    </PodcastLayout>
  </MainLayout>
</template>

<script>
import MainLayout from '../layouts/MainLayout.vue';
import PodcastLayout from '../layouts/PodcastLayout.vue';
import EpisodeCard from '../components/EpisodeCard.vue';

export default {
  components: { MainLayout, PodcastLayout, EpisodeCard },
};
</script>

<style scoped>
</style>