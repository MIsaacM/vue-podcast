<template>
  <div class="podcast_detailed_card">
    <RouterLink :to="{ name: 'podcast', params: { podcastId } }">
      <div class="podcast_detailed_card-img">
        <img :src="getImage()"/>
      </div>
      <div class="podcast_detailed_card-title">{{ getTitle() }}</div>
      <div class="podcast_detailed_card-author">{{ getAuthor() }}</div>
      <div class="podcast_detailed_card-description">{{ getDescription() }}</div>
    </RouterLink>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  components: { RouterLink },
  data() {
    return {
      podcast: {},
      feed: {},
    };
  },
  computed: { 
    podcastId() {
      return this.$route.params.podcastId;
    },
  },
  async beforeMount() {
    this.podcast = await this.$store.actions.fetchPodcast(this.podcastId);
    const feedUrl = this.podcast?.feedUrl || null;
    this.feed = await this.$store.actions.fetchFeed(feedUrl);
  },
  methods: {
    getImage() {
      return this.podcast?.artworkUrl600 || '';
    },
    getTitle() {
      return this.podcast?.collectionName || 'Unknown title';
    },
    getAuthor() {
      return this.podcast?.artistName || 'Unknown Author';
    },
    getDescription() {
      return this.feed?.description || 'Unknown description';
    },
  },
};
</script>

<style scoped>
</style>