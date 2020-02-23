import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export enum MainColor {
  DEFAULT = 'default',
  COLOR_1 = 'color1'
}

export default new Vuex.Store({
  state: {
    mainColor: MainColor.DEFAULT
  },
  mutations: {
    setMainColor (state, color: MainColor) {
      state.mainColor = color;
    }
  },
  actions: {},
  modules: {}
});
