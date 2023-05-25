import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/Practice-01',
      component: () => import('../views/Practice-01.vue'),
    },
    {
      path: '/Practice-02',
      component: () => import('../views/Practice-02.vue'),
    },

    {
      path: '/practice-0526',
      component: () => import('../views/practice-0526.vue'),
    },
  ]
})

export default router
