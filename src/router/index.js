import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../components/views/Login.vue')
  },
  {
    path: '/balance',
    name: 'balance',
    component: () => import('../components/views/Balance.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
});

export default router;