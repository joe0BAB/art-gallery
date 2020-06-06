<template>
  <div class="about-wrapper">
    <div class="main-box">
      <div class="deco-line"></div>
      <div class="presenter">
        <div class="show-box">
          <h1>Atelier</h1>
        </div>
        <div class="credits-box">
          <div class="dominant">
            <h2>Ausstellungen (Auswahl)</h2>
            <div class="history-grid">
              <div>2018</div>
              <p>Düsseldorf Kunstpunkte</p>
              <div></div>
              <p>Galerie Holzwerkstatt Wiehn, Kaiserslautern (E)</p>
              <div>2017</div>
              <p>Austellungsraum bei DDJ, Krefeld (E)</p>
              <div></div>
              <p>Galerie im Schloss Klippenstein, Radeberg</p>
              <div>2016</div>
              <p>Galerie in der Lanker Weinschänke, Lank</p>
              <div></div>
              <p>Galerie Blauer Ezel, Aachen</p>
              <div>2015</div>
              <p>Arbeitsplatz Kunst, Meerbusch</p>
              <div></div>
              <p>Foyer Rathaus, Neuss</p>
              <div>2013</div>
              <p>Galerie am Markt, Neubeuern</p>
              <div></div>
              <p>Galerie, Maria Weimann, Rosenheim (E)</p>
            </div>
            <p>(E): Einzelausstellung</p>
          </div>
          <div>
            <h2>
              Kurzvita
            </h2>
            <p>
              Doris Großmann
              <br>
              1957 geboren in Krefeld,
              <br>
              Architektin, Studium in Kaiserslautern und Aachen,
              <br>
              seit 2005 künstlerisch tätig
            </p>
          </div>
          <div>
            <h2>Kontakt</h2>
            <p>
              Doris Großmann
              <br>
              grossmann_doris(at)t-online.de
            </p>
            <div class="spacer"></div>
            <h2>Website</h2>
            <p>
              Johannes Großmann
            </p>
          </div>
          <div>
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
      this.$store.commit('setMainColor', MainColor.COLOR_3);
      window.scrollTo(0, 0);
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
  @import "src/scss/symbols";

  .about-wrapper {
    width: 100%;
    padding: calc(4.6vw - 1px) $menu-width;

    @media all and (max-width: 799px) {
      padding-top: $menu-height;
      padding-left: $menu-width;
    }
    background-color: $color3;
  }

  .main-box {
    position: relative;

    .deco-line {
      width: 100%;
      height: calc(4.6vw - 1px);
      position: fixed;
      top: 0;
      left: 0;
      background-color: $color3;

      @media all and (max-width: 799px) {
        display: none;
      }
    }
  }

  .presenter {
    display: grid;
    grid-template-columns: 1fr;

    .show-box {
      background-image: url(../assets/hq/studio.jpeg);
      background-size: cover;
      background-position: center;
      color: $color3;
      height: 70vh;
      min-height: 300px;
      font-size: 14vw;
      line-height: 9vw;
      text-transform: uppercase;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;

      @media screen and (max-width: 1000px) {
        background-image: url(../assets/w1000/studio.jpeg);
      }

      @media screen and (max-width: 750px) {
        background-image: url(../assets/w750/studio.jpeg);
      }

      @media screen and (max-width: 500px) {
        background-image: url(../assets/w500/studio.jpeg);
      }

      @media screen and (max-width: 300px) {
        background-image: url(../assets/w300/studio.jpeg);
      }
    }

    .credits-box {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 3vw;
      padding: 3vh 0 0 0;

      @media all and (max-width: 799px) {
        grid-template-columns: 1fr 1fr;

        .dominant {
          padding-top: 20px;
          grid-column: 1 / span 2;
          grid-row: 2;
        }
      }

      h2 {
        font-size: calc(16px + 0.5vh);
        line-height: calc(24px + 0.6vh);
        text-transform: uppercase;
      }

      p {
        font-size: calc(12px + 0.3vh);
        line-height: calc(18px + 0.5vh);
      }

      .history-grid {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-column-gap: calc(2vw + 4px);

        div {
          font-size: calc(12px + 0.3vh);
          line-height: calc(18px + 0.5vh);
          letter-spacing: 1px;
        }
      }

      .spacer {
        width: 100%;
        height: calc(3vh + 20px);
      }
    }
  }

  .close {
    @extend %-close;
    position: fixed;
    top: $padding-top / 2;
    right: $menu-width / 2;

    @media all and (max-width: 799px) {
      display: none;
    }
  }
</style>
