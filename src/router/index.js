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
      path: '/practice-0525',
      component: () => import('../views/practice-0525.vue'),
    },
    {
      path: '/practice-0526',
      component: () => import('../views/practice-0526.vue'),
    },
    {
      path: '/practice-0526-2',
      component: () => import('../views/practice-0526-2.vue'),
    },
    {
      path: '/practice-0608',
      component: () => import('../views/practice-0608.vue'),
    },
  ]
})

export default router
