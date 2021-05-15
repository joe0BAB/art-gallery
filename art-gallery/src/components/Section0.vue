<template>
  <div class="section-0" ref="container">
    <div class="backdrop" v-bind:style="{backgroundImage: `url(${url})`}">
      <p>KUNST</p>
    </div>
    <div class="scroll-hint">
      scroll
    </div>
    <div class="scroll-arrow">
      <icon-arrow></icon-arrow>
    </div>
  </div>
</template>

<script lang="ts">
import IconArrow from '@/assets/arrow.svg';
import Component from 'vue-class-component';
import { Vue } from 'vue-property-decorator';
import { HQ_IMAGES, imagePath, imageClass, QUALITY, INTRO_IMAGES } from '@/assets/content';
import Velocity from 'velocity-animate';

@Component({ components: { IconArrow } })
export default class Section0 extends Vue {
  hqImages = HQ_IMAGES;
  imageClass = imageClass;
  imagePath = imagePath;
  QUALITY = QUALITY;
  interval = 0;
  images = INTRO_IMAGES;
  activeIdx = 0;
  url = '';
  scrollRunning = false;
  previousScroll = 0;

  $refs!: {
    container: HTMLElement;
  }

  mounted () {
    this.interval = setInterval(() => {
      this.activeIdx++;
      this.activeIdx = this.activeIdx % this.images.length;
      this.url = imagePath(HQ_IMAGES[this.images[this.activeIdx]].name, QUALITY.w750);
    }, 300);
    document.addEventListener('scroll', this.onScroll);
  }

  beforeDestroy () {
    clearInterval(this.interval);
    document.removeEventListener('scroll', this.onScroll);
  }

  onScroll () {
    let down = true;
    if (window.scrollY < this.previousScroll) {
      down = false;
    }
    this.previousScroll = window.scrollY;

    if (this.scrollRunning) {
      return;
    }

    if (window.scrollY < window.innerHeight && down) {
      this.scrollRunning = true;
      Velocity.animate(this.$refs.container, 'scroll', {
        duration: 750,
        offset: window.innerHeight,
        complete: () => {
          Vue.set(this, 'scrollRunning', false);
        }
      });
    } else if (window.scrollY < window.innerHeight && !down) {
      this.scrollRunning = true;
      Velocity.animate(this.$refs.container, 'scroll', {
        duration: 750,
        offset: 0,
        complete: () => {
          Vue.set(this, 'scrollRunning', false);
        }
      });
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/scss/constants";
@import "src/scss/symbols";

.section-0 {
  width: 100%;
  height: 100vh;
  position: relative;
  user-select: none;

  .backdrop {
    width: 100%;
    height: 100%;
    background-position: center;
  }

  .scroll-hint {
    position: absolute;
    bottom: 150px;
    left: 50%;
    transform: translateX(-50%);
  }

  @keyframes move-arrow {
    0% {
      transform: translateY(-50%);
    }
    50% {
      transform: translateY(50%);
    }
    100% {
      transform: translateY(-50%);
    }
  }

  .scroll-arrow {
    width: 40px;
    height: 40px;
    position: absolute;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);

    svg {
      width: 100%;
      height: 100%;
      animation-name: move-arrow;
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }
  }

  p {
    color: black;
    mix-blend-mode: lighten;
    background-color: white;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25vw;
    font-weight: 900;
  }
}
</style>
