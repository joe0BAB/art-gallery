<template>
  <div class="menu" v-bind:class="[$store.state.mainColor.toString()]">
    <div class="open-action" v-bind:class="[$store.state.mainColor.toString()]" v-on:click="toggleAbout">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <router-link v-bind:to="paths.home">
      <div class="text-box" v-bind:class="[$store.state.mainColor.toString()]">
        <h4>2020</h4>
        <div class="spacer"></div>
        <h1>Doris Großmann</h1>
        <div class="spacer"></div>
        <p>Kunstausstellung Gemälde Gallerie</p>
      </div>
    </router-link>
    <div class="dash" v-bind:class="[$store.state.mainColor.toString()]"></div>
    <div class="menu-art" v-bind:class="[$store.state.mainColor.toString()]">
      <div class="h-line"></div>
      <div id="heart"></div>
      <div id="diamond"></div>
      <div id="circle"></div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { paths } from '@/router';

  @Component
  export default class SideBar extends Vue {
    paths = paths;

    toggleAbout () {
      if (this.$router.currentRoute.path === paths.about) {
        if (window.history.length > 2) {
          this.$router.back();
        } else {
          this.$router.push(paths.home);
        }
      } else {
        this.$router.push(paths.about);
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../scss/constants";

  %-from-enum {
    &.color1 {
      background-color: $color1;
      border-color: #000;
    }

    &.color2 {
      background-color: $color2;
      border-color: #000;
    }

    &.color3 {
      background-color: $color3;
      border-color: #000;
    }

    &.color4 {
      background-color: $color4;
      border-color: #000;
    }

    &.color5 {
      background-color: $color5;
      border-color: #000;
    }
  }

  .menu {
    border-right: 1px solid $border-color;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: $menu-width;
    z-index: 100;

    &.default {
      background-color: #fff;
    }

    @extend %-from-enum;

    .text-box {
      position: absolute;
      top: 78vh;
      left: 0;
      transform: rotate(-90deg) translateX(0%);
      transform-origin: 0 0;
      white-space: nowrap;
      height: $menu-width;
      display: flex;
      align-items: center;
      color: #000;

      .spacer {
        width: 4vh;
        height: 1px;
      }

      h1 {
        font-size: calc(1.8vh + 6px);
        font-weight: 900;
      }

      $sub-font: 1.3vh;

      h4 {
        font-size: $sub-font;
        font-weight: 300;
      }

      p {
        font-size: $sub-font;
      }
    }

    .menu-art {
      box-sizing: content-box;
      position: absolute;
      left: 0;
      bottom: 0;
      padding: 1.6vh 1vw;
      width: calc(100% - 2 * 1vw);
      display: flex;
      flex-direction: column;
      height: 17vh;
      align-items: center;
      justify-content: space-around;

      .h-line {
        height: 1px;
        width: 70%;
        margin-bottom: 2vh;
        background-color: $border-color;
      }

      &.color1, &.color2, &.color3, &.color4, &.color5 {
        .h-line {
          background-color: #000;
        }
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
    grid-auto-rows: 0.2vw;
    padding: 1.6vw 1.6vw;
    border-bottom: 1px solid $border-color;
    width: 100%;
    cursor: pointer;

    &.color1, &.color2, &.color3, &.color4, &.color5 {
      border-bottom: 1px solid #000;
    }

    div {
      background-color: black;
    }
  }
</style>
