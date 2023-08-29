<template>
  <PodcastCard />
  <slot />
</template>

<script>
import PodcastCard from '../components/PodcastDetailedCard.vue';

export default {
  components: { PodcastCard },
};
</script>

<style scoped>
</style>