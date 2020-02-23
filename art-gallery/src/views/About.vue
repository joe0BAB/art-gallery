<template>
  <div class="about-wrapper">
    <div class="main-box">
      <div class="text-box">
        <h1>Gallerie Doris Großmann</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <div class="spacer"></div>
        <h1>Kontakt</h1>
        <p>
          Doris Großmann
          <br>
          000000000
        </p>
      </div>
      <img src="../assets/P1060376.jpeg">
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
      if (window.history.length > 1) {
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
    padding: 3vw 3vw 3vw $menu-width;
    background-color: $color3;
  }

  .main-box {
    position: relative;
    height: 100%;
  }

  .text-box {
    padding: 1vh 4vw;
    max-width: 900px;

    h1 {
      font-size: 4vh;
      text-transform: uppercase;
      letter-spacing: 1px;
      padding: 1vh 0 2vh 0;
    }

    p {
      font-size: 2.5vh;
      line-height: 4vh;
    }

    .spacer {
      width: 100%;
      height: 8vh;
    }
  }

  img {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 45vh;
    margin: 2vh 0;
  }

  .close {
    $c-w: 3vh;
    $c-s: 0.4vh;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    border: $c-s solid #000;
    border-radius: 50%;
    padding: 0.5vh;

    div {
      width: $c-w;
      height: $c-w;

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
