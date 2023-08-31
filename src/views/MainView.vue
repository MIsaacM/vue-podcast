<template>
  <MainLayout>
    <div class="main_view-filter">
      <span>Showing {{ filteredPodcasts.length }} of {{ podcasts.length }}</span> <input type="text" placeholder="Filter podcasts..." v-model="filterText" />
    </div>

    <div class="main_view-podcast_gallery">
      <PodcastCard 
      v-for="podcast in filteredPodcasts" 
      :key="getPodcastId(podcast)" 
      :podcastId="getPodcastId(podcast)"
      />
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from '../layouts/MainLayout.vue';
import PodcastCard from '../components/PodcastCard.vue';

export default {
  // inject: [ '$store' ],
  components: {
    MainLayout,
    PodcastCard,
  },
  data() { 
    return {
      podcasts: [],
      filterText: null,
    };
  },
  computed: {
    filteredPodcasts() {
      if (!this.filterText) return this.podcasts;

      return this.podcasts.filter(podcast => {
        const filterNormalized = this.$utils.normalizeString(this.filterText);
        const podcastNameNormalized = this.$utils.normalizeString(podcast['im:name']?.label);
        const podcastAuthorNormalized = this.$utils.normalizeString(podcast['im:artist']?.label);
        
        return podcastNameNormalized.includes(filterNormalized) || podcastAuthorNormalized.includes(filterNormalized);
      });
    },
  },
  async beforeMount() {
    this.podcasts = await this.$store.actions.fetchPodcasts();
  },
  methods: {
    getPodcastId(podcast) {
      return podcast.id?.attributes && podcast.id?.attributes['im:id'] || null;
    },
  },
};
</script>

<style scoped>
.main_view-filter {
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 10px;
  height: 50px;
}
.main_view-filter span {
  padding: 0 5px;
  border-radius: 5px;
  background: var(--color-primary);
  color: #fff;
  font-size: 20px;
  font-weight: bold;
}
.main_view-podcast_gallery {
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 50px 20px;
  margin: 50px 0;
}
</style>