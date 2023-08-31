<template>
  <div class="podcast_card text-center" v-if="podcastId">
    <RouterLink :to="{ name: 'podcast', params: { podcastId } }">
      <div class="podcast_card-block">
        <div class="podcast_card-block-img_container">
          <img class="podcast_card-block-img_container-img" :src="getImage" />
        </div>
        <div class="podcast_card-block-title">{{ getTitle }}</div>
        <div class="podcast_card-block-author">Author: {{ getAuthor }}</div>
      </div>
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
.podcast_card {
  width: 100%;
  padding: 60px 10px 10px 10px;
}

.podcast_card:hover .podcast_card-block {
  box-shadow: 0 2px 5px var(--color-secondary);
}
.podcast_card-block {
  padding: 0 20px 20px 20px;
  background: #fff;
  border-radius: 0 0 5px 5px;
  box-shadow: 0 2px 5px var(--color-border);
}
.podcast_card-block-img_container {
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
}
.podcast_card-block-img_container-img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 100%;
  margin-top: -50px;
}
.podcast_card-block-title {
  text-transform: uppercase;
  font-weight: bold;
}
.podcast_card-block-author {
  color: #888;
  font-size: 13px;
}
</style>