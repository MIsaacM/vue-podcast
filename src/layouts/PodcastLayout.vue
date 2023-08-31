<template>
  <MainLayout>
    <div class="podcast_layout">
      <div class="podcast_layout-left">
        <PodcastDetailedCard :podcastId="podcastId" />
      </div>
      <div class="podcast_layout-right">
        <RouterView />
      </div>
    </div>
  </MainLayout>
</template>

<script>
import { RouterView } from 'vue-router';
import MainLayout from '../layouts/MainLayout.vue';
import PodcastDetailedCard from '../components/PodcastDetailedCard.vue';

export default {
  components: { RouterView, MainLayout, PodcastDetailedCard },
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
.podcast_layout {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px 80px;
}
.podcast_layout-left {
  position: sticky;
  top: 92px;
  flex: 35%;
  height: max-content;
}
.podcast_layout-right {
  flex: 55%;
}
@media (max-width: 840px) {
  .podcast_layout-left {
    position: initial;
  }
}
</style>