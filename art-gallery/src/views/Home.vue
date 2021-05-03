<template>
  <div>
    <section0></section0>
    <div class="section-2">
      <div class="item" v-for="(item, index) in rankedImages" v-bind:key="item.name"
           v-bind:style="{backgroundColor: item.color}">
        <div class="inner-wrapper" v-bind:class="[item.orientation]">
          <router-link v-bind:to="`/image/${item.name}`">
            <img v-if="innerWidth < 300" v-bind:src="imagePath(item.name, QUALITY.w300)"
                 v-bind:class="[item.orientation]"/>
            <img v-else-if="innerWidth < 500" v-bind:src="imagePath(item.name, QUALITY.w500)"
                 v-bind:class="[item.orientation]"/>
            <img v-else-if="innerWidth <= 700" v-bind:src="imagePath(item.name, QUALITY.w750)"
                 v-bind:class="[item.orientation]"/>
            <img v-else-if="innerWidth < 1000" v-bind:src="imagePath(item.name, QUALITY.w500)"
                 v-bind:class="[item.orientation]"/>
            <img v-else-if="innerWidth < 1500" v-bind:src="imagePath(item.name, QUALITY.w750)"
                 v-bind:class="[item.orientation]"/>
            <img v-else v-bind:src="imagePath(item.name, QUALITY.w1000)" v-bind:class="[item.orientation]"/>
          </router-link>
          <div class="info-extra">
            Objekt {{index+1}} / {{rankedImages.length}}
          </div>
        </div>
      </div>
    </div>
    <div class="section-3">
      <p class="primary">Kunst von Doris Großmann.</p>
      <p>Alle Rechte vorbehalten.</p>
      <router-link to="/about">Impressum</router-link>
    </div>
  </div>
</template>

<script lang="ts">
  import Component from 'vue-class-component';
  import { Vue } from 'vue-property-decorator';
  import { HQ_IMAGES, IMAGES, imageClass, imagePath, QUALITY, rankedImages } from '@/assets/content';
  import store from '@/store';
  import Section0 from '@/components/Section0.vue';
  @Component({
    components: { Section0 }
  })
  export default class Counter extends Vue {
    hqImages = HQ_IMAGES;
    imageClass = imageClass;
    imagePath = imagePath;
    QUALITY = QUALITY;

    get rankedImages () {
      return rankedImages();
    }

    get innerWidth () {
      return this.$store.state.innerWidth;
    }

    mounted () {
      window.scrollTo({
        top: store.state.scrollHomeY,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
</script>

<style lang="scss" scoped>
  .section-2 {
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;

    @media all and (max-width: 700px) {
      grid-template-columns: 100%;
    }

    .item {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 40px;
      position: relative;

      @media all and (max-width: 1000px) and (min-width: 701px) {
        padding: 20px;
      }

      @media all and (max-width: 500px) {
        padding: 20px;
      }

      .inner-wrapper {
        position: relative;

        &.vertical {
          height: 80vh;
        }

        &.horizontal {
          width: 100%;
        }

        .info-extra {
          position: absolute;
          bottom: 0;
          right: 0;
          color: #fff;
          font-size: calc(0.5vw + 8px);
          line-height: 24px;
          transform: translateY(100%);
        }
      }

      img {
        &.horizontal {
          width: 100%;
        }

        &.vertical {
          height: 100%;
        }

        filter: contrast(0.8) brightness(1.2);
        cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjEyQ0ZBRDlBOTFFNTExRTlCMDRBRkNBNzZCRjI1RDkzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjEyQ0ZBRDlCOTFFNTExRTlCMDRBRkNBNzZCRjI1RDkzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0M3QzFDODk3RUMzMTFFOUIwNEFGQ0E3NkJGMjVEOTMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0M3QzFDOEE3RUMzMTFFOUIwNEFGQ0E3NkJGMjVEOTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz68qU3aAAAANElEQVR42mL8//8/AyHAyMgIVgRUy0hILRMDlcGogaMGkgFACfX/4HbhaNYbNXA4GggQYAClnA8fBBm+xAAAAABJRU5ErkJggg==), auto;
      }
    }
  }

  .section-3 {
    background-color: rgb(78, 110, 129);
    padding: 40px;
    text-align: right;
    color: #ffffff;
    font-size: calc(1.8vh + 4px);
    line-height: calc(2.4vh + 8px);

    p.primary {
      padding-bottom: calc(3vh + 6px);
    }

    @media all and (max-width: 1000px) and (min-width: 701px) {
      padding: 20px;
    }

    @media all and (max-width: 500px) {
      padding: 20px;
    }

    a {
      color: #ffffff;
    }
  }
</style>
