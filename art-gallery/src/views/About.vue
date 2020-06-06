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
              Kurzvita
            </h2>
            <p>
              Doris Großmann
              <br>
              1957 geboren in Krefeld
              <br>
              Architektin, Studium in Kaiserslautern und Aachen
              <br>
              seit 2005 künstlerisch tätig
            </p>
          </div>
          <div>
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
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: calc(4.6vw - 1px) $menu-width 0 2 * $menu-width;

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

      .history-grid {
        display: grid;
        grid-template-columns: auto auto;
      }

      .spacer {
        width: 100%;
        height: calc(3vh + 20px);
      }
    }
  }

  .close {
    @extend %-close;

    @media all and (max-width: 799px) {
      display: none;
    }
  }
</style>
