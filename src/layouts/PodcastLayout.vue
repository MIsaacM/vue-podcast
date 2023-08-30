<template>
  <PodcastDetailedCard :podcastId="podcastId" />
  <slot />
</template>

<script>
import PodcastDetailedCard from '../components/PodcastDetailedCard.vue';

export default {
  components: { PodcastDetailedCard },
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