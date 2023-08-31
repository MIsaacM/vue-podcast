<template>
    Episode View
    <EpisodeCard />
</template>

<script>
import EpisodeCard from '../components/EpisodeCard.vue';

export default {
  components: { EpisodeCard },
  props: [ 'podcastId', 'episodeId' ],
};
</script>

<style scoped>
</style>