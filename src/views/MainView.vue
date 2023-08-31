<template>
  <MainLayout>
    Main View

    <div>
      <span>Showing {{ filteredPodcasts.length }} of {{ podcasts.length }}</span> <input type="text" placeholder="Filter podcasts..." v-model="filterText" />
    </div>

    <PodcastCard 
      v-for="podcast in filteredPodcasts" 
      :key="getPodcastId(podcast)" 
      :podcastId="getPodcastId(podcast)"
    />
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
</style>