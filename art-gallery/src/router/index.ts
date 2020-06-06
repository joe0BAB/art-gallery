import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Zoom from '@/views/Zoom.vue';
import store from '@/store';

Vue.use(VueRouter);

export const paths = {
  about: '/about',
  zoom: '/image/:name',
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

router.beforeEach((to, from, next) => {
  if (!store.state.fromRoute.path) {
    store.commit('setFromRoute', to);
  } else {
    store.commit('setFromRoute', from);
  }

  next();
});

export default router;

export const closePage = function (fallback: string = paths.home) {
  if (store.state.fromRoute.path !== window.location.pathname) {
    router.push(store.state.fromRoute.path);
  } else {
    router.push(fallback);
  }
};
