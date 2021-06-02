<template>
  <v-container>
    <v-row class="d-flex flex-row">
      <v-col class="d-flex flex-column">
        <div class="uppertext">
          <h1 class="headtitle text-center">
            Om Vatteninfo Laboratorietjänster
          </h1>
          <h4 class="filler text-left">
            Vatteninfo Laboratorietjänster är en lokal tjänst för analys av
            brunnsvatten, dricksvatten och avloppsvatten för fastighetsägare,
            samfälligheter och företag. Vi erbjuder både analyser från vårt
            lokala laboratorium som följer metoderna i ackreditearde
            laboratorier för den enskilde fastighetsägaren, samt analyser från
            ett ackrediterat laboratorium för registrerade anläggningar eller
            för djupare analyser av enskilda brunnar.
            <br />
            Registrerade anläggningar: De måste följa föreskrifterna i SLVFS
            2001:30 Föreskrifterna gäller för anläggningar för
            dricksvattenförsörjning som antingen tillhandahåller i genomsnitt 10
            m3 per dygn eller försörjer 50 personer eller fler med dricksvatten.
            Dricksvatten som tillhandahålls eller används som en del av en
            kommersiell eller offentlig verksamhet omfattas alltid av dessa
            föreskrifter oavsett storlek.
          </h4>

          <!-- Really ugly i know but its temporary, just want to get the general shape of it all first. -->
          <br />
          <br />
          <br />
          <br />
        </div>
        <br />
        <hr />
        <br />
        <v-row class="d-flex flex-row">
          <v-col class="d-flex flex-column"
            ><div class="lowertext">
              <h1 class="lowertitle text-center">Nyttiga Länkar</h1>

              <div class="links">
                <v-row class="d-flex flex-row red">
                  <v-col class="d-flex flex-column">
                    <div class="linkcard d-flex flex-row green">
                      <img
                        class="lvmIMG"
                        src="../assets/aboutpage/LVM.png"
                        alt=""
                      />
                      <h3>Livsmedelsverket</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed iaculis lacus sed congue pellentesque. Praesent.
                      </p>
                      <a
                        href="https://www.livsmedelsverket.se/sok?q=enskilt+vatten"
                      >
                        Enskilt vatten ||
                      </a>

                      <a
                        href="https://kontrollwiki.livsmedelsverket.se/artikel/337/dricksvatten"
                      >
                        Dricksvatten för företag och samfälligheter
                      </a>
                    </div>
                    <div class="linkcard d-flex flex-row blue">
                      <img
                        class="sguIMG"
                        src="../assets/aboutpage/sgu.png"
                        alt=""
                      />
                      <h3>Sveriges Geologiska Undersökning</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed iaculis lacus sed congue pellentesque. Praesent.
                      </p>
                      <a href="https://www.sgu.se/"> https://www.sgu.se/ </a>
                    </div>
                    <div class="linkcard d-flex flex-row orange">
                      <img
                        class="vatteninfoIMG"
                        src="../assets/aboutpage/vatteninfo.png"
                        alt=""
                      />
                      <h3>Vatteninfo</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed iaculis lacus sed congue pellentesque. Praesent.
                      </p>
                      <a href="https://vatteninfo.com/">
                        https://vatteninfo.com/
                      </a>
                    </div>
                    <div class="linkcard d-flex flex-row grey">
                      <img
                        class="gemvaIMG"
                        src="../assets/aboutpage/gemvaimg.png"
                        alt=""
                      />
                      <h3>Gemva</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed iaculis lacus sed congue pellentesque. Praesent.
                      </p>
                      <a href="https://gemva.se/"> https://gemva.se/ </a>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </div></v-col
          >
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped >
.uppertext {
  font-family: "Poppins", sans-serif;
}
.lowertext {
  font-family: "Poppins", sans-serif;
  //   Commented out to reflect what sent to Joel
  //   background-color: white;
  //   box-shadow: 2px 2px 5px #00000090;
}
.headtitle {
  font-size: 36px;
  padding-bottom: 70px;
  padding-top: 70px;
}

.filler {
  font-size: 18px;
  // Desktop width
  width: 800px;
  margin: auto;
  letter-spacing: 0.7px;
}

.lowertitle {
  font-size: 36px;
  padding-top: 70px;
  padding-bottom: 70px;
}
.links {
  //   max-width: 907px;
  left: 200px;
}
.gemvaIMG {
  width: 180px;
  height: 128px;
  background-color: white;
}
.vatteninfoIMG {
  width: 180px;
  height: 128px;
  background-color: white;
}

.linkcard {
  h2 {
    font-size: 36px;
  }
  p {
    font-size: 18px;
    width: 599px;
  }
}
</style>