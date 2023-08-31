import { createRouter, createWebHistory } from 'vue-router';

class Router {
  constructor() {
    this.router = createRouter({
      history: createWebHistory(import.meta.env.BASE_URL),
      routes: [
        {
          path: '/',
          name: 'home',
          component: () => import('../views/MainView.vue'),
        },
        {
          path: '/podcast',
          component: () => import('../layouts/PodcastLayout.vue'),
          children: [
            {
              path: ':podcastId',
              name: 'podcast',
              component: () => import('../views/PodcastView.vue'),
            },
            {
              path: ':podcastId/episode/:episodeId',
              name: 'episode',
              component: () => import('../views/EpisodeView.vue'),
            },
          ],
        },
      ],
    });
  }

  setBeforeEach(store) {
    this.router.beforeEach((to, from, next) => {
      store.state.loadingRoute = true;
      next();
    });
  }

  setAfterEach(store) {
    this.router.afterEach((to, from, next) => {
      store.state.loadingRoute = false;
      // setTimeout(() => {
      //   store.state.loadingRoute = false;
      // }, 2000);
      
      next();
    });
  }
}

export default Router;
