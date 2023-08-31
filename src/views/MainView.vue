<template>
  <MainLayout>
    Main View

    <div>
      <span>{{ podcasts.length }}</span> <input type="text" placeholder="Filter podcasts..." v-model="filterText" />
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
        const filterNormalized = this.filterText.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const podcastNameNormalized = podcast['im:name']?.label?.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') || '';
        const podcastAuthorNormalized = podcast['im:artist']?.label?.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') || '';
        
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