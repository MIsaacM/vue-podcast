<template>
  <table>
    <tr>
      <th>Title</th>
      <th>Date</th>
      <th>Duration</th>
    </tr>
    <tr v-for="episode in podcastEpisodes" :key="episode.trackId">
      <td>
        <RouterLink :to="{ name: 'episode', params: { podcastId, episodeId: episode.trackId } }">
          {{ episode.trackName }}
        </RouterLink>
      </td>
      <td>{{ formatReleaseDate(episode.releaseDate)}}</td>
      <td>{{ formatDuration(episode.trackTimeMillis) }}</td>
    </tr>
  </table>
</template>

<script>
import moment from 'moment';

export default {
  data() {
    return {
      podcastEpisodes: [],
    };
  },
  computed: { 
    podcastId() {
      return this.$route.params.podcastId;
    },
  },
  async beforeMount() {
    const podcast = await this.$store.actions.fetchPodcast(this.podcastId);
    this.podcastEpisodes = await this.$store.actions.fetchPodcastEpisodes(podcast.collectionId);
  },
  methods: {
    formatReleaseDate(date) {
      return date ? moment(date).format('DD/MM/YYYY') : '00/00/0000';
    },
    formatDuration(duration) {
      if (!duration) return '00:00';
      const milliseconds = moment.duration(duration).asMilliseconds();
      return moment(milliseconds).format('HH:mm');
    },
  },
};
</script>

<style scoped>
</style>