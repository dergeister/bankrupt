import { createRouter, createWebHistory } from 'vue-router'

import routes from './routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
});

router.beforeEach((to, from) => {
  const currentAccount = localStorage.account;

  if(!currentAccount && to.meta.requiresAuth) {
    return { name: 'login' }
  }
  
  if(currentAccount && to.name == 'login') {
    return { name: 'balance' }
  }
})

export default router;