<template>
  <div class="top-menu-wrapper" v-bind:class="[$store.state.mainColor.toString()]">
    <div class="open-action" v-if="$router.currentRoute.path !== paths.about" v-on:click="toggleAbout">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <h1>Doris Grossmann</h1>
    <div class="close" v-if="$router.currentRoute.path !== paths.home" v-on:click="close">
      <div></div>
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

    close () {
      if (window.history.length > 2) {
        this.$router.back();
      } else {
        this.$router.push(paths.home);
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../scss/constants";
  @import "src/scss/symbols";

  %-from-enum {
    &.color1 {
      background-color: $color1;
    }

    &.color2 {
      background-color: $color2;
    }

    &.color3 {
      background-color: $color3;
    }

    &.color4 {
      background-color: $color4;
    }

    &.color5 {
      background-color: $color5;
    }
  }

  .top-menu-wrapper {
    width: 100%;
    height: $menu-height;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #ffffff;
    z-index: 1;
    border-bottom: 1px solid black;

    @extend %-from-enum;

    h1 {
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: calc(2vh + 6px);
      line-height: $menu-height;
    }
  }

  .open-action {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 3px;
    grid-auto-rows: 2px;
    padding: 0 2.6vw;
    width: calc(8vw + 5px);
    cursor: pointer;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);

    div {
      background-color: black;
    }
  }

  .close {
    @extend %-close;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    margin-right: 2.2vw;
  }
</style>
