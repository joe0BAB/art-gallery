<template>
  <div id="app">
    <div class="wrapper">
      <side-bar></side-bar>
      <div class="content">
        <div class="section-1">
          <div class="img-box">
            <div class="content" v-bind:style="{backgroundImage: `url(${images[12].path})`}"></div>
          </div>
          <div class="img-box">
            <div class="content text" style="background-color: #804F4D">D</div>
          </div>
          <div class="img-box">
            <div class="content" v-bind:style="{backgroundImage: `url(${images[7].path})`}"></div>
          </div>
          <div class="img-box">
            <div class="content">
              <div>
                <div class="extra" v-bind:style="{backgroundImage: `url(${images[15].path})`}"></div>
              </div>
            </div>
          </div>
          <div class="img-box">
            <div class="content text" style="background-color: #CC443D">O</div>
          </div>
          <div class="img-box">
            <div class="content" v-bind:style="{backgroundImage: `url(${images[3].path})`}"></div>
          </div>
          <div class="img-box">
            <div class="content">
              <div>
                <div class="extra" v-bind:style="{backgroundImage: `url(${images[17].path})`}"></div>
              </div>
            </div>
          </div>
          <div class="img-box">
            <div class="content"></div>
          </div>
          <div class="img-box">
            <div class="content" v-bind:style="{backgroundImage: `url(${images[8].path})`}"></div>
          </div>
          <div class="img-box">
            <div class="content text" style="background-color: #FF9E99">R</div>
          </div>
          <div class="img-box">
            <div class="content"></div>
          </div>
          <div class="img-box">
            <div class="content text" style="background-color: #FF544C">I</div>
          </div>
          <div class="img-box">
            <div class="content">
              <div>
                <div class="extra" v-bind:style="{backgroundImage: `url(${images[16].path})`}"></div>
              </div>
            </div>
          </div>
          <div class="img-box">
            <div class="content" v-bind:style="{backgroundImage: `url(${images[5].path})`}"></div>
          </div>
          <div class="img-box">
            <div class="content" v-bind:style="{backgroundImage: `url(${images[2].path})`}"></div>
          </div>
          <div class="img-box">
            <div class="content" v-bind:style="{backgroundImage: `url(${images[13].path})`}"></div>
          </div>
          <div class="img-box">
            <div class="content"></div>
          </div>
          <div class="img-box">
            <div class="content">
              <div>
                <div class="extra" v-bind:style="{backgroundImage: `url(${images[14].path})`}"></div>
              </div>
            </div>
          </div>
          <div class="img-box">
            <div class="content" v-bind:style="{backgroundImage: `url(${images[10].path})`}"></div>
          </div>
          <div class="img-box">
            <div class="content text" style="background-color: #802B26">S</div>
          </div>
          <div class="img-box">
            <div class="content" v-bind:style="{backgroundImage: `url(${images[11].path})`}"></div>
          </div>
          <div class="img-box">
            <div class="content"></div>
          </div>
          <div class="img-box">
            <div class="content" v-bind:style="{backgroundImage: `url(${images[9].path})`}"></div>
          </div>
          <div class="img-box">
            <div class="content" v-bind:style="{backgroundImage: `url(${images[4].path})`}"></div>
          </div>
        </div>
        <div class="section-2">
          <div class="item" v-for="(item, index) in images" v-bind:key="item.path"
               v-bind:style="{backgroundColor: item.color}">
            <div class="inner-wrapper" v-bind:class="[item.orientation]">
              <router-link v-bind:to="`/image/${index+1}`">
                <img v-bind:src="item.path" v-bind:class="[item.orientation]"/>
              </router-link>
              <div class="info-extra">Öl auf Stoff
                <div class="spacer"></div>
                |
                <div class="spacer"></div>
                Objekt {{index+1}} / {{images.length}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
  import Component from 'vue-class-component';
  import { Vue } from 'vue-property-decorator';
  import { IMAGES } from '@/assets/content';
  import SideBar from '@/components/SideBar.vue';

  @Component({ components: { SideBar } })
  export default class App extends Vue {
    images = IMAGES;
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
</style>

<style scoped lang="scss">
  @import "scss/constants";

  .wrapper {
    width: 100%;
    height: 100%;
    padding-left: $menu-width;

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

    .item {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 40px;
      position: relative;

      .inner-wrapper {
        position: relative;

        &.horizontal {
          height: 80vh;
        }

        &.vertical {
          width: 100%;
        }

        .info-extra {
          position: absolute;
          bottom: 0;
          right: 0;
          color: #fff;
          font-size: 12px;
          line-height: 24px;
          transform: translateY(100%);

          div {
            width: 3px;
            height: 1px;
            display: inline-block;
          }
        }
      }

      img {
        &.vertical {
          width: 100%;
        }

        &.horizontal {
          height: 100%;
        }

        filter: contrast(0.8) brightness(1.2);
      }
    }
  }
</style>
