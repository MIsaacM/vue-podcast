<template>
  <div class="podcast_detailed_card">
    <div class="podcast_detailed_card-img">
      <RouterLink :to="{ path: `/podcast/1` }">Image</RouterLink>
    </div>
    <div class="podcast_detailed_card-title">Title</div>
    <div class="podcast_detailed_card-author">Author</div>
    <div class="podcast_detailed_card-description">Description</div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  components: { RouterLink },
};
</script>

<style scoped>
</style>