<template>
  <div class="zoom-wrapper" v-bind:style="{backgroundColor: color.color}">
    <div class="main-box">
      <div class="presenter">
        <img v-if="innerWidth < 300" v-bind:src="imagePath(name, QUALITY.w300)"/>
        <img v-else-if="innerWidth < 500" v-bind:src="imagePath(name, QUALITY.w500)"/>
        <img v-else-if="innerWidth < 750" v-bind:src="imagePath(name, QUALITY.w750)"/>
        <img v-else-if="innerWidth < 1000" v-bind:src="imagePath(name, QUALITY.w1000)"/>
        <img v-else v-bind:src="imagePath(name, QUALITY.HQ)"/>
      </div>
      <div class="close" v-on:click="close">
        <div></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Component from 'vue-class-component';
  import { Vue } from 'vue-property-decorator';
  import { fromHex, MainColor, toHex } from '@/store';
  import { paths } from '@/router';
  import { isValidImage, imagePath, QUALITY, rankedImages } from '@/assets/content';

  @Component
  export default class Zoom extends Vue {
    imagePath = imagePath;
    QUALITY = QUALITY;

    get name () {
      return this.$route.params.name;
    }

    get color () {
      const rest = rankedImages().filter(image => image.name === this.name);
      if (rest.length !== 1) {
        return { code: MainColor.DEFAULT, color: toHex(MainColor.DEFAULT) };
      }
      return { code: fromHex(rest[0].color), color: rest[0].color };
    }

    get innerWidth () {
      return this.$store.state.innerWidth;
    }

    mounted () {
      if (!isValidImage(this.name)) {
        this.$router.replace(paths.home);
        return;
      }
      this.$store.commit('setMainColor', this.color.code);
    }

    destroyed () {
      this.$store.commit('setMainColor', MainColor.DEFAULT);
    }

    close () {
      if (this.$store.state.fromRoute.path && this.$store.state.fromRoute.path !== window.location.pathname) {
        this.$router.back();
      } else {
        this.$router.push(paths.home);
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "src/scss/constants";
  @import "src/scss/symbols";

  .zoom-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: calc(4.6vw - 1px) $menu-width calc(4.6vw - 1px) 2 * $menu-width;

    @media all and (max-width: 799px) {
      padding-top: $menu-height-double;
      padding-left: $menu-width;
    }

    background-color: $color3;
  }

  .main-box {
    position: relative;
    height: 100%;
  }

  .presenter {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    img {
      max-width: 100%;
      max-height: 100%;
      width: auto;
      height: auto;
    }
  }

  .close {
    @extend %-close;

    @media all and (max-width: 799px) {
      display: none;
    }
  }
</style>
