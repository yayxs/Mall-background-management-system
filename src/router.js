import Vue from 'vue';
import Router from 'vue-router';

const Login = () => import('@/views/login/login.vue');
const Home = () => import('@/views/home/home.vue');
Vue.use(Router);

const router = new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    }
  ]
});
export default router;
