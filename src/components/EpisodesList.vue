<template>
  <table class="episodes_list-table">
    <tr>
      <th class="episodes_list-table-header-title">Title</th>
      <th class="episodes_list-table-header-release_date">Date</th>
      <th class="episodes_list-table-header-duration">Duration</th>
    </tr>
    <tr v-for="episode in podcastEpisodes" :key="episode.trackId">
      <td class="episodes_list-table-names">
        <RouterLink :to="{ name: 'episode', params: { podcastId, episodeId: episode.trackId } }">
          {{ episode.trackName }}
        </RouterLink>
      </td>
      <td class="episodes_list-table-release_dates">{{ formatReleaseDate(episode.releaseDate)}}</td>
      <td class="episodes_list-table-durations">{{ formatDuration(episode.trackTimeMillis) }}</td>
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
.episodes_list-table {
  border-collapse: collapse;
}
.episodes_list-table th {
  width: 100%;
  font-weight: bold;
  padding: 5px 10px;
}
.episodes_list-table tr {
  border-bottom: 1px solid var(--color-border);
}
.episodes_list-table tr:nth-child(even) {
  background: rgba(200,200,200,.2);
}
.episodes_list-table td {
  padding: 5px 10px;
}
.episodes_list-table-header-title {
  text-align: left;
}
.episodes_list-table-header-release_date, 
.episodes_list-table-header-duration, 
.episodes_list-table-release_dates, 
.episodes_list-table-durations {
  text-align: center;
}
.episodes_list-table-names a:hover {
  color: var(--color-primary);
}
</style>