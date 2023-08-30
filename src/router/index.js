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
      path: '/podcast/:podcastId',
      name: 'podcast',
      component: () => import('../views/PodcastView.vue'),
      children: [
        {
          path: 'episode/:episodeId',
          name: 'episode',
          component: () => import('../views/EpisodeView.vue'),
        },
      ],
    },
  ],
});

export default router;
