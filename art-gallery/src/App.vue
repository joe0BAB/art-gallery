<template>
  <div id="app">
    <div class="wrapper">
      <side-bar v-if="innerWidth > 800"></side-bar>
      <top-menu v-else></top-menu>
      <div class="content">
        <router-view/>
      </div>
    </div>
    <loader v-if="showLoader" v-on:load="showLoader=false"></loader>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import { Vue } from 'vue-property-decorator';
import SideBar from '@/components/SideBar.vue';
import TopMenu from '@/components/TopMenu.vue';
import Loader from '@/components/Loader.vue';

@Component({ components: { Loader, TopMenu, SideBar } })
export default class App extends Vue {
  innerWidth = 0;
  showLoader = true;

  mounted () {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  }

  beforeDestroy () {
    window.removeEventListener('resize', this.onResize);
  }

  onResize () {
    this.innerWidth = window.innerWidth;
    this.$store.commit('updateInnerWidth', this.innerWidth);
    this.$store.commit('updateInnerWidth', window.innerHeight);
  }
}
</script>

<style lang="scss">
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}

body {
  line-height: 1;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

html * {
  box-sizing: border-box;
}

@import url('https://fonts.googleapis.com/css?family=Archivo&display=swap');

html, body, #app {
  width: 100%;
  height: 100%;
  font-family: Archivo;
}

@import "src/scss/images";
</style>

<style scoped lang="scss">
@import "scss/constants";

.wrapper {
  width: 100%;
  height: 100%;
  padding-left: $menu-width;

  @media all and (max-width: 800px) {
    padding-top: calc(6vh + 10px);
    padding-left: 0;
  }

  .content {
    width: 100%;
  }
}
</style>
