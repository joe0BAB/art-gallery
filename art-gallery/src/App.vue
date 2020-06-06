<template>
  <div id="app">
    <div class="wrapper">
      <side-bar v-if="innerWidth > 800"></side-bar>
      <top-menu v-else></top-menu>
      <div class="content">
        <div class="section-1">
          <div class="img-box">
            <div class="content" v-bind:class="imageClass(hqImages[8],QUALITY.w300)"></div>
          </div>
          <div class="img-box">
            <div class="content text" style="background-color: #804F4D"></div>
          </div>
          <div class="img-box">
            <div class="content" v-bind:class="imageClass(hqImages[9],QUALITY.w300)"></div>
          </div>
          <div class="img-box">
            <div class="content">
              <div>
                <div class="extra" v-bind:class="imageClass(hqImages[3],QUALITY.w300)"></div>
              </div>
            </div>
          </div>
          <div class="img-box">
            <div class="content text" style="background-color: #CC443D"></div>
          </div>
          <div class="img-box">
            <div class="content" v-bind:class="imageClass(hqImages[11],QUALITY.w300)"></div>
          </div>
          <div class="img-box">
            <div class="content">
              <div>
                <div class="extra" v-bind:class="imageClass(hqImages[2],QUALITY.w300)"></div>
              </div>
            </div>
          </div>
          <div class="img-box">
            <div class="content"></div>
          </div>
          <div class="img-box">
            <div class="content" v-bind:class="imageClass(hqImages[12],QUALITY.w300)"></div>
          </div>
          <div class="img-box">
            <div class="content text" style="background-color: #FF9E99"></div>
          </div>
          <div class="img-box">
            <div class="content"></div>
          </div>
          <div class="img-box">
            <div class="content text" style="background-color: #FF544C"></div>
          </div>
          <div class="img-box">
            <div class="content">
              <div>
                <div class="extra" v-bind:class="imageClass(hqImages[5],QUALITY.w300)"></div>
              </div>
            </div>
          </div>
          <div class="img-box">
            <div class="content" v-bind:class="imageClass(hqImages[13],QUALITY.w300)"></div>
          </div>
          <div class="img-box">
            <div class="content" v-bind:class="imageClass(hqImages[14],QUALITY.w300)"></div>
          </div>
          <div class="img-box">
            <div class="content" v-bind:class="imageClass(hqImages[15],QUALITY.w300)"></div>
          </div>
          <div class="img-box">
            <div class="content"></div>
          </div>
          <div class="img-box">
            <div class="content">
              <div>
                <div class="extra" v-bind:class="imageClass(hqImages[31],QUALITY.w300)"></div>
              </div>
            </div>
          </div>
          <div class="img-box">
            <div class="content" v-bind:class="imageClass(hqImages[16],QUALITY.w300)"></div>
          </div>
          <div class="img-box">
            <div class="content text" style="background-color: #802B26"></div>
          </div>
          <div class="img-box">
            <div class="content" v-bind:class="imageClass(hqImages[17],QUALITY.w300)"></div>
          </div>
          <div class="img-box">
            <div class="content"></div>
          </div>
          <div class="img-box">
            <div class="content" v-bind:class="imageClass(hqImages[18],QUALITY.w300)"></div>
          </div>
          <div class="img-box">
            <div class="content" v-bind:class="imageClass(hqImages[19],QUALITY.w300)"></div>
          </div>
        </div>
        <div class="section-2">
          <div class="item" v-for="(item, index) in rankedImages" v-bind:key="item.name"
               v-bind:style="{backgroundColor: item.color}">
            <div class="inner-wrapper" v-bind:class="[item.orientation]">
              <router-link v-bind:to="`/image/${item.name}`">
                <img v-if="innerWidth < 300" v-bind:src="imagePath(item.name, QUALITY.w300)"
                     v-bind:class="[item.orientation]"/>
                <img v-else-if="innerWidth < 500" v-bind:src="imagePath(item.name, QUALITY.w500)"
                     v-bind:class="[item.orientation]"/>
                <img v-else-if="innerWidth <= 700" v-bind:src="imagePath(item.name, QUALITY.w750)"
                     v-bind:class="[item.orientation]"/>
                <img v-else-if="innerWidth < 1000" v-bind:src="imagePath(item.name, QUALITY.w500)"
                     v-bind:class="[item.orientation]"/>
                <img v-else-if="innerWidth < 1500" v-bind:src="imagePath(item.name, QUALITY.w750)"
                     v-bind:class="[item.orientation]"/>
                <img v-else v-bind:src="imagePath(item.name, QUALITY.w1000)" v-bind:class="[item.orientation]"/>
              </router-link>
              <div class="info-extra">
                Objekt {{index+1}} / {{rankedImages.length}}
              </div>
            </div>
          </div>
        </div>
        <div class="section-3">
          <p>Alle Rechte vorbehalten.</p>
          <router-link to="/about">Impressum</router-link>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
  import Component from 'vue-class-component';
  import { Vue } from 'vue-property-decorator';
  import { HQ_IMAGES, imageClass, imagePath, IMAGES, QUALITY, rankedImages } from '@/assets/content';
  import SideBar from '@/components/SideBar.vue';
  import TopMenu from '@/components/TopMenu.vue';

  @Component({ components: { TopMenu, SideBar } })
  export default class App extends Vue {
    images = IMAGES;
    hqImages = HQ_IMAGES;
    imageClass = imageClass;
    imagePath = imagePath;
    QUALITY = QUALITY;
    innerWidth = 0;

    get rankedImages () {
      return rankedImages();
    }

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

  .section-1 {
    width: 100%;
    height: 100%;

    .img-box {
      position: relative;
      width: 25%;
      float: left;

      &:before {
        content: "";
        float: left;
        padding-top: 50%;
      }

      &.h:before {
        padding-top: 100%
      }

      .content {
        float: left;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-size: cover;
        background-position: center;

        &:not(.text) {
          filter: contrast(0.8) brightness(1.2);
        }

        &.text {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 6vw;
          color: #fff;
        }

        & > div {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .extra {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 200%;
          background-size: cover;
          background-position: center;
          z-index: 1;
        }
      }
    }
  }

  .section-2 {
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;

    @media all and (max-width: 700px) {
      grid-template-columns: 100%;
    }

    .item {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 40px;
      position: relative;

      @media all and (max-width: 1000px) and (min-width: 701px) {
        padding: 20px;
      }

      @media all and (max-width: 500px) {
        padding: 20px;
      }

      .inner-wrapper {
        position: relative;

        &.vertical {
          height: 80vh;
        }

        &.horizontal {
          width: 100%;
        }

        .info-extra {
          position: absolute;
          bottom: 0;
          right: 0;
          color: #fff;
          font-size: calc(0.5vw + 8px);
          line-height: 24px;
          transform: translateY(100%);
        }
      }

      img {
        &.horizontal {
          width: 100%;
        }

        &.vertical {
          height: 100%;
        }

        filter: contrast(0.8) brightness(1.2);
        cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjEyQ0ZBRDlBOTFFNTExRTlCMDRBRkNBNzZCRjI1RDkzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjEyQ0ZBRDlCOTFFNTExRTlCMDRBRkNBNzZCRjI1RDkzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0M3QzFDODk3RUMzMTFFOUIwNEFGQ0E3NkJGMjVEOTMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0M3QzFDOEE3RUMzMTFFOUIwNEFGQ0E3NkJGMjVEOTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz68qU3aAAAANElEQVR42mL8//8/AyHAyMgIVgRUy0hILRMDlcGogaMGkgFACfX/4HbhaNYbNXA4GggQYAClnA8fBBm+xAAAAABJRU5ErkJggg==), auto;
      }
    }
  }

  .section-3 {
    background-color: rgb(78, 110, 129);
    padding: 40px;
    text-align: right;
    color: #ffffff;
    font-size: calc(1.8vh + 4px);
    line-height: calc(2.4vh + 8px);

    @media all and (max-width: 1000px) and (min-width: 701px) {
        padding: 20px;
      }

      @media all and (max-width: 500px) {
        padding: 20px;
      }

    a {
      color: #ffffff;
    }
  }
</style>
