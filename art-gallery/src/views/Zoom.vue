<template>
  <div class="zoom-wrapper" v-bind:style="{backgroundColor: image.color}">
    <div class="main-box">
      <div class="presenter">
        <img v-bind:src="image.path" v-bind:class="image.orientation"/>
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
  import { fromHex, MainColor } from '@/store';
  import { paths } from '@/router';
  import { IMAGES } from '@/assets/content';

  @Component
  export default class Zoom extends Vue {
    get image () {
      return IMAGES[this.index];
    }

    get index () {
      return parseInt(this.$route.params.id) - 1;
    }

    mounted () {
      const index = this.index;
      if (!(index >= 0 && index < IMAGES.length)) {
        this.$router.replace(paths.home);
        return;
      }

      this.$store.commit('setMainColor', fromHex(this.image.color));
    }

    destroyed () {
      this.$store.commit('setMainColor', MainColor.DEFAULT);
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
  @import "src/scss/constants";
  @import "src/scss/symbols";

  .zoom-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: calc(4.6vw - 1px) $menu-width calc(4.6vw - 1px) 2 * $menu-width;
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
      &.vertical {
        width: 100%;
      }

      &.horizontal {
        height: 100%;
      }
    }
  }

  .close {
    @extend %-close;
  }
</style>
