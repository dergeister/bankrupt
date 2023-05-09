import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  /*{
    path: '/other-view',
    name: 'other-view',
    component: () => import('../views/OtherView.vue')
  }*/
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
});

export default router;