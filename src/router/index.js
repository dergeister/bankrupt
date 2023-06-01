import { createRouter, createWebHistory } from 'vue-router'

import routes from './routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
});

router.beforeEach((to, from) => {
  const currentAccount = localStorage.account;

  if(to.meta.requiresAuth && !currentAccount) {
    return { name: 'login' }
  } else {
    if(to.name == 'login' && currentAccount) {
      return { name: 'balance' }
    }
  }
})

export default router;