import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
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

export default router;
