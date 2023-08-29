<template>
  <MainLayout>
    Main View

    <PodcastCard />
  </MainLayout>
</template>

<script>
import MainLayout from '../layouts/MainLayout.vue';
import PodcastCard from '../components/PodcastCard.vue';

export default {
  components: {
    MainLayout,
    PodcastCard,
  },
};
</script>

<style scoped>
</style>