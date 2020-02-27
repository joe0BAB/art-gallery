import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Zoom from '@/views/Zoom.vue';

Vue.use(VueRouter);

export const paths = {
  about: '/about',
  zoom: '/image/:id',
  home: '/'
};

const routes = [
  {
    path: paths.about,
    name: 'About',
    component: About
  },
  {
    path: paths.zoom,
    name: 'Zoom',
    component: Zoom
  },
  {
    path: paths.home,
    name: 'Home',
    component: Home
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
