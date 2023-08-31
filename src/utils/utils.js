export default {
  /**
   * Lower case and normalize a string
   * @param {string} string 
   * @returns {string} String in lower case and normalized
   */
  normalizeString: (string) => {
    return string?.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') || '';
  },

  /**
   * Save data in local storage
   * @param {string} key Keyword name
   * @param {any} value Data to save
   * @param {number} ttl Time to live in milliseconds
   * @returns {void}
   */
  setInCache: (key, value, ttl) => {
    const now = new Date();
    let expiry = ttl ? now.getTime() + ttl : null;

    const item = {
      value,
      expiry,
    };
    localStorage.setItem(key, JSON.stringify(item));
  },
  /**
   * Get data from local storage
   * @param {string} key Keyword name
   * @returns {string|null} Value found in local storage
   */
  getFromCache: (key) => {
    const itemStr = localStorage.getItem(key);

    if (!itemStr) {
      return null;
    }

    const item = JSON.parse(itemStr);
    const now = new Date();

    // Expired
    if (now.getTime() > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }

    // Not expired
    return item.value;
  },
};