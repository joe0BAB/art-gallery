import Vue from 'vue';
import Vuex from 'vuex';
import { Route } from 'vue-router';

Vue.use(Vuex);

export enum MainColor {
  DEFAULT = 'default',
  COLOR_1 = 'color1',
  COLOR_2 = 'color2',
  COLOR_3 = 'color3',
  COLOR_4 = 'color4',
  COLOR_5 = 'color5'
}

export function fromHex (color: string) {
  if (color === '#804F4D') {
    return MainColor.COLOR_1;
  } else if (color === '#FF9E99') {
    return MainColor.COLOR_2;
  } else if (color === '#FF544C') {
    return MainColor.COLOR_3;
  } else if (color === '#802B26') {
    return MainColor.COLOR_4;
  } else if (color === '#CC443D') {
    return MainColor.COLOR_5;
  } else {
    return MainColor.DEFAULT;
  }
}

export function toHex (color: MainColor) {
  if (color === MainColor.COLOR_1) {
    return '#804F4D';
  } else if (color === MainColor.COLOR_2) {
    return '#FF9E99';
  } else if (color === MainColor.COLOR_3) {
    return '#FF544C';
  } else if (color === MainColor.COLOR_4) {
    return '#802B26';
  } else if (color === MainColor.COLOR_5) {
    return '#CC443D';
  } else {
    return '#fff';
  }
}

export default new Vuex.Store({
  state: {
    mainColor: MainColor.DEFAULT,
    fromRoute: {} as Route,
    innerWidth: window.innerWidth,
    scrollHomeY: 0
  },
  mutations: {
    setMainColor (state, color: MainColor) {
      state.mainColor = color;
    },
    setFromRoute (state, data: Route) {
      state.fromRoute = data;
    },
    updateInnerWidth (state, data: number) {
      state.innerWidth = data;
    },
    updateScrollHomeY (state, data: number) {
      state.scrollHomeY = data;
    }
  },
  actions: {},
  modules: {}
});
