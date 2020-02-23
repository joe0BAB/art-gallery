import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

Vue.use(VueRouter);

export const paths = {
  about: '/about',
  home: '/'
};

const routes = [
  {
    path: paths.home,
    name: 'Home',
    component: Home
  },
  {
    path: paths.about,
    name: 'About',
    component: About
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
