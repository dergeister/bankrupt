import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../views/HelloWorld.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HelloWorld
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