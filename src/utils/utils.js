export default {
  normalizeString: (string) => {
    return string?.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') || '';
  },
};