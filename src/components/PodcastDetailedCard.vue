<template>
  <RouterLink :to="{ name: 'podcast', params: { podcastId } }">
    <div class="podcast_detailed_card card">
      <div class="podcast_detailed_card-img_container">
        <img class="podcast_detailed_card-img_container-img" :src="getImage()"/>
      </div>
      <div class="podcast_detailed_card-title">{{ getTitle() }}</div>
      <div class="podcast_detailed_card-author">by {{ getAuthor() }}</div>
      <div class="podcast_detailed_card-description">
        <span>Description:</span>
        <div>{{ getDescription() }}</div>
      </div>
    </div>
  </RouterLink>
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
.podcast_detailed_card-img_container {
  max-width: 400px;
  height: 400px;
  margin: 10px auto;
}
.podcast_detailed_card-img_container-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.podcast_detailed_card-title {
  padding: 10px 10px 0 10px;
  font-weight: bold;
}
.podcast_detailed_card-author {
  padding: 0 10px 10px 10px;
  font-style: italic;
}
.podcast_detailed_card-description {
  padding: 10px;
}
.podcast_detailed_card-description span {
  font-weight: bold;
}
.podcast_detailed_card-description div {
  font-style: italic;
}
</style>