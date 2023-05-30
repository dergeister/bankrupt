const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../components/views/guest/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../components/views/guest/Register.vue')
  },
  {
    path: '/balance',
    name: 'balance',
    component: () => import('../components/views/user/Balance.vue')
  }
];

export default routes;