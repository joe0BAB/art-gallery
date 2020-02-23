<template>
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
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
export default class SideBar extends Vue {

}
</script>

<style scoped lang="scss">
  @import "../scss/constants";

  .menu {
    border-right: 1px solid $border-color;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: $menu-width;

    .text-box {
      position: absolute;
      top: 75vh;
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
        font-size: 1.4vw;
        font-weight: 900;
      }

      $sub-font: 0.7vw;

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
    grid-auto-rows: 0.2vw;
    padding: 1.6vw 1.6vw;
    border-bottom: 1px solid $border-color;
    width: 100%;

    div {
      background-color: black;
    }
  }
</style>
