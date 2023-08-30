import axios from 'axios';

class Axios {
  /**
   * Get an axios instance with interceptors
   * @param {string} baseURL 
   * @param {object} headers 
   * @param {number} timeout Miliseconds to wait before raise an error
   * @returns {} Axios instance
   */
  constructor({ baseURL, headers = {}, timeout = 10000 }) {
    this.instance = axios.create({
      baseURL,
      timeout,
      headers,
    });

    this.instance.interceptors.request.use(this.requestInterceptorOK, this.requestInterceptorKO);
    this.instance.interceptors.response.use(this.responseInterceptorOK, this.responseInterceptorKO);
  }

  requestInterceptorOK(config) {
    return config;
  }

  requestInterceptorKO(error) {
    console.error({ message: 'Error in Axios request', error });
    return null;
    // return Promise.reject(error);
  }

  responseInterceptorOK(response) {
    return response;
  }

  responseInterceptorKO(error) {
    console.error({ message: 'Error in Axios response', error });
    return null;
    // return Promise.reject(error);
  }

}

export default Axios;