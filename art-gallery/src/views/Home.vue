<template>
  <div class="wrapper">
    <div class="menu">
      <div class="open-action">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="text-box">
        <h4>2020</h4>
        <div class="spacer"></div>
        <h1>Doris Großmann</h1>
        <div class="spacer"></div>
        <p>Kunstausstellung Gemälde Gallerie</p>
      </div>
      <div class="dash"></div>
      <div class="menu-art">
        <div class="h-line"></div>
        <div id="heart"></div>
        <div id="diamond"></div>
        <div id="circle"></div>
      </div>
    </div>
    <div class="content">
      <div class="section-1">
        <div class="img-box"><div class="content" v-bind:style="{backgroundImage: `url(${images[12].path})`}"></div></div>
        <div class="img-box"><div class="content text" style="background-color: #804F4D">D</div></div>
        <div class="img-box"><div class="content" v-bind:style="{backgroundImage: `url(${images[7].path})`}"></div></div>
        <div class="img-box"><div class="content"><div><div class="extra" v-bind:style="{backgroundImage: `url(${images[15].path})`}"></div></div></div></div>
        <div class="img-box"><div class="content text" style="background-color: #CC443D">O</div></div>
        <div class="img-box"><div class="content" v-bind:style="{backgroundImage: `url(${images[3].path})`}"></div></div>
        <div class="img-box"><div class="content"><div><div class="extra" v-bind:style="{backgroundImage: `url(${images[17].path})`}"></div></div></div></div>
        <div class="img-box"><div class="content"></div></div>
        <div class="img-box"><div class="content" v-bind:style="{backgroundImage: `url(${images[8].path})`}"></div></div>
        <div class="img-box"><div class="content text" style="background-color: #FF9E99">R</div></div>
        <div class="img-box"><div class="content"></div></div>
        <div class="img-box"><div class="content text" style="background-color: #FF544C">I</div></div>
        <div class="img-box"><div class="content"><div><div class="extra" v-bind:style="{backgroundImage: `url(${images[16].path})`}"></div></div></div></div>
        <div class="img-box"><div class="content" v-bind:style="{backgroundImage: `url(${images[5].path})`}"></div></div>
        <div class="img-box"><div class="content" v-bind:style="{backgroundImage: `url(${images[2].path})`}"></div></div>
        <div class="img-box"><div class="content" v-bind:style="{backgroundImage: `url(${images[13].path})`}"></div></div>
        <div class="img-box"><div class="content"></div></div>
        <div class="img-box"><div class="content"><div><div class="extra" v-bind:style="{backgroundImage: `url(${images[14].path})`}"></div></div></div></div>
        <div class="img-box"><div class="content" v-bind:style="{backgroundImage: `url(${images[10].path})`}"></div></div>
        <div class="img-box"><div class="content text" style="background-color: #802B26">S</div></div>
        <div class="img-box"><div class="content" v-bind:style="{backgroundImage: `url(${images[11].path})`}"></div></div>
        <div class="img-box"><div class="content"></div></div>
        <div class="img-box"><div class="content" v-bind:style="{backgroundImage: `url(${images[9].path})`}"></div></div>
        <div class="img-box"><div class="content" v-bind:style="{backgroundImage: `url(${images[4].path})`}"></div></div>
      </div>
      <div class="section-2">
        <div class="item" v-for="(item, index) in images" v-bind:key="item.path"
             v-bind:style="{backgroundColor: item.color}">
          <div class="inner-wrapper">
            <img v-bind:src="item.path"/>
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
</template>

<script lang="ts">
  import Component from 'vue-class-component';
  import { Vue } from 'vue-property-decorator';
  import { IMAGES } from '@/assets/content';

  @Component
  export default class Counter extends Vue {
    images = IMAGES;
  }
</script>

<style scoped lang="scss">
  $menu-width: 4.1vw;
  $border-color: #a3a3a3;

  .wrapper {
    width: 100%;
    height: 100%;
    padding-left: $menu-width;

    .content {
      width: 100%;
    }
  }

  .menu {
    border-right: 1px solid $border-color;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: $menu-width;

    .text-box {
      position: absolute;
      top: 70vh;
      left: 0;
      transform: rotate(-90deg) translateX(0%);
      transform-origin: 0 0;
      white-space: nowrap;
      height: $menu-width;
      display: flex;
      align-items: center;

      .spacer {
        width: 2.5vw;
        height: 1px;
      }

      h1 {
        font-size: 0.8vw;
        font-weight: 900;
      }

      h4 {
        font-size: 0.5vw;
        font-weight: 300;
      }

      p {
        font-size: 0.5vw;
      }
    }

    .menu-art {
      box-sizing: content-box;
      position: absolute;
      left: 0;
      bottom: 0;
      padding: 1.6vw 1vw;
      width: calc(100% - 2 * 1vw);
      display: flex;
      flex-direction: column;
      height: 9vw;
      align-items: center;
      justify-content: space-around;

      .h-line {
        height: 1px;
        width: 70%;
        margin-bottom: 3vw;
        background-color: $border-color;
      }

      $h-w: 1vw;
      $h-c: #000;

      #circle {
        width: 0.9 * $h-w;
        height: 0.9 * $h-w;
        background-color: $h-c;
        border-radius: 50%;
      }

      #heart {
        position: relative;
        width: $h-w;
        height: 0.9 * $h-w;
      }

      #heart:before,
      #heart:after {
        position: absolute;
        content: "";
        left: 0.5 * $h-w;
        top: 0;
        width: 0.5 * $h-w;
        height: 0.8 * $h-w;
        background: black;
        border-radius: 0.5 * $h-w 0.5 * $h-w 0 0;
        transform: rotate(-45deg);
        transform-origin: 0 100%;
      }

      #heart:after {
        left: 0;
        transform: rotate(45deg);
        transform-origin: 100% 100%;
      }

      #diamond {
        width: 0;
        height: 0;
        border: 0.5 * $h-w solid transparent;
        border-bottom-color: $h-c;
        position: relative;
        transform: translateY(-50%);
      }

      #diamond:after {
        content: '';
        position: absolute;
        left: -0.5 * $h-w;
        width: 0;
        height: 0;
        border: 0.5 * $h-w solid transparent;
        border-top-color: $h-c;
        transform: translateY(50%);
      }
    }
  }

  .open-action {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 0.3vw;
    grid-auto-rows: 0.16vw;
    padding: 1.6vw 1.2vw;
    border-bottom: 1px solid $border-color;
    width: 100%;

    div {
      background-color: black;
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

        &.text {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 6vw;
          color: #fff;
        }

        & > div{
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
    grid-template-columns: 1fr 1fr;

    .item {
      width: 100%;
      display: flex;
      align-items: center;
      padding: 40px;
      position: relative;

      .inner-wrapper {
        width: 100%;
        position: relative;

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
        width: 100%;
        filter: contrast(0.8) brightness(1.2);
      }
    }
  }
</style>
