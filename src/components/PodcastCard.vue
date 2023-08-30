<template>
  <div class="podcast_card" v-if="podcastId">
    <RouterLink :to="{ name: 'podcast', params: { podcastId } }">
      <div class="podcast_card-img">
        <img :src="getImage" />
      </div>
      <div class="podcast_card-title">{{ getTitle }}</div>
      <div class="podcast_card-author">{{ getAuthor }}</div>
    </RouterLink>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  components: { RouterLink },
  props: [ 'podcastId' ],
  data() {
    return {
      podcast: {},
    };
  },
  computed: {
    getImage() {
      return this.podcast?.artworkUrl600 || '';
    },
    getTitle() {
      return this.podcast?.collectionName || 'Unknown title';
    },
    getAuthor() {
      return this.podcast?.artistName || 'Unknown Author';
    },
  },
  async beforeMount() {
    this.podcast = await this.$store.actions.fetchPodcast(this.podcastId);
  },
};
</script>

<style scoped>
</style>