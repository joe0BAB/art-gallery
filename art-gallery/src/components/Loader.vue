<template>
  <div class="loader">
    <div>
      <p class="intro-text">
        <span ref="letter" v-for="letter in introText" v-bind:key="letter">{{ letter }}</span>
      </p>
      <div class="progress-bar">
        <div v-bind:style="{width: `${progress}%`}"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import { Vue, Watch } from 'vue-property-decorator';
import { HQ_IMAGES, imagePath, INTRO_IMAGES, QUALITY } from '@/assets/content';

function shuffle (a: any[]) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

@Component
export default class Loader extends Vue {
  images: Image[] = [];
  counter = 0;
  introText = ['K', 'U', 'N', 'S', 'T'];
  permutation = [];

  $refs!: {
    letter: HTMLElement[];
  }

  get progress () {
    return this.counter / this.images.length * 100;
  }

  @Watch('progress')
  onAllLoaded () {
    const idx = Math.ceil((this.introText.length - 1) * this.progress / 100);
    this.$refs.letter[this.permutation[idx]].style.opacity = 1;

    if (this.progress < 100) {
      return;
    }

    setTimeout(() => {
      this.$emit('load');
    }, 600);
  }

  mounted () {
    this.permutation = [...Array(this.introText.length).keys()];
    shuffle(this.permutation);

    for (const index of INTRO_IMAGES) {
      const url = imagePath(HQ_IMAGES[index].name, QUALITY.w750);
      const image = new Image();

      const done = () => {
        this.counter++;
      };

      image.onload = done;
      // image.onerror = done;
      image.src = url;
      if (image.complete || (typeof image.naturalWidth !== 'undefined' && image.naturalWidth !== 0)) {
        // done();
      }
      this.images.push(image);
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/scss/constants";

.loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background-color: #fff;

  & > div {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    font-size: 25vw;

    span {
      opacity: 0;
      color: rgb(78, 110, 129);
    }
  }
}

.progress-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 6px;

  div {
    height: 100%;
    background-color: #CC443D;
    box-shadow: inset 0px 0px 1px 1px #FFB2E6;
    transition: all 0.2s;
  }
}
</style>
