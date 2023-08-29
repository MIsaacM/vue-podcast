<template>
  <div class="podcast_card">
    <RouterLink :to="{ path: `/podcast/1` }">
      <div class="podcast_card-img">Image</div>
      <div class="podcast_card-title">Title</div>
      <div class="podcast_card-author">Author</div>
    </RouterLink>
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