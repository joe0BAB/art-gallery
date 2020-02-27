<template>
  <div class="about-wrapper">
    <div class="main-box">
      <div class="presenter">
        <div class="show-box">
          <h1>Atelier</h1>
        </div>
        <div class="credits-box">
          <div>
            <h2>
              Künstlerin
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </div>
          <div>
            <h2>Kontakt</h2>
            <p>
              Doris Großmann
              <br>
              000000
            </p>
          </div>
          <div>
            <h2>Website</h2>
            <p>
              Johannes Großmann
              <br>
              blub-blub@blub.de
            </p>
          </div>
        </div>
      </div>
      <div class="close" v-on:click="closeAbout">
        <div></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Component from 'vue-class-component';
  import { Vue } from 'vue-property-decorator';
  import { MainColor } from '@/store';
  import { paths } from '@/router';

  @Component
  export default class About extends Vue {
    mounted () {
      this.$store.commit('setMainColor', MainColor.COLOR_1);
    }

    destroyed () {
      this.$store.commit('setMainColor', MainColor.DEFAULT);
    }

    closeAbout () {
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

  .about-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: calc(4.6vw - 1px) $menu-width 0 2 * $menu-width;
    background-color: $color3;
  }

  .main-box {
    position: relative;
    height: 100%;
  }

  .presenter {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 3fr 1fr;

    .show-box {
      background-image: url(../assets/P1060376.jpeg);
      background-size: cover;
      background-position: center;
      color: $color3;
      font-size: 14vw;
      line-height: 9vw;
      text-transform: uppercase;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
    }

    .credits-box {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 3vw;
      padding: 3vh 0;

      h2 {
        font-size: calc(16px + 0.5vh);
        line-height: calc(24px + 0.6vh);
        text-transform: uppercase;
      }

      p {
        font-size: calc(12px + 0.3vh);
        line-height: calc(18px + 0.5vh);
      }
    }
  }

  .close {
    $c-w: 2.8vw;
    $c-s: 0.2vw;
    position: absolute;
    top: - $padding-top / 2;
    right: - $menu-width / 2;
    cursor: pointer;
    padding: 0.5vh;
    transform: translateX(50%) translateY(-50%);

    div {
      width: $c-w;
      height: $c-w;
      transition: all 450ms;

      &:hover {
        transform: rotate(180deg);
      }

      &:before, &:after {
        position: absolute;
        left: 50%;
        content: ' ';
        width: $c-s;
        height: $c-w;
        background-color: #000;
      }

      &:before {
        transform: translateX(-50%) rotate(-45deg);
      }

      &:after {
        transform: translateX(-50%) rotate(45deg);
      }
    }
  }
</style>
