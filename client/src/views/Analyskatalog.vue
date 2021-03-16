<template>
  <v-main class="ma-0 pa-0">
    <v-row class="d-flex flex-column justify-center align-center mt-6">
      <v-col
        class="d-flex flex-column justify-center align-center mt-2"
        cols="8"
      >
        <h1 class="blue--text display-1">Våra analyser</h1>
        <p class="text--secondary mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          adipisci praesentium voluptatum accusantium, accusamus hic rem neque
          aperiam dolorum doloribus nostrum aut. Sed, ea placeat! Similique
          praesentium totam ea sunt.
        </p>
      </v-col>
    </v-row>

    <v-row class="mt-8">
      <v-col cols="2">
        <img src="@/assets/wave.png" height="125px" width="100px"
      /></v-col>
      <v-col cols="5" class="d-flex flex-column justify-center align-center">
        <div class="pointer" @click="moveToEnsikltdricksvatten">
          <img src="@/assets/kran.png" height="200px" width="250px" />
          <h3 class="blue--text">Enskilt dricksvatten</h3>
          <p class="text--secondary">Lorem ipsum dolor sit amet</p>
        </div>
      </v-col>
      <v-col cols="5" class="d-flex flex-column">
        <div class="pointer" @click="moveToVerksamhet">
          <img src="@/assets/Samfalligheter.png" height="200px" width="200px" />
          <h3 class="blue--text">Verksamhet & samfällighet</h3>
          <p class="text--secondary">Lorem ipsum dolor sit amet</p>
        </div>
      </v-col>
    </v-row>

    <v-row class="mt-8 mb-12">
      <v-col cols="2" class="d-flex align-center">
        <img src="@/assets/wave.png" height="125px" width="100px"
      /></v-col>
      <v-col
        @click="moveToBygglovTillstand"
        cols="5"
        class="d-flex flex-column justify-center align-center pointer"
      >
        <div @click="moveToBygglovTillstand" class="pointer">
          <img src="@/assets/Avtal.png" height="170px" width="180px" />
          <h3 class="blue--text">Bygglov & tillstånd</h3>
          <p class="text--secondary">Lorem ipsum dolor sit amet</p>
        </div>
      </v-col>
      <v-col
        @click="moveToAvloppAnalyser"
        cols="5"
        class="d-flex flex-column pointer"
      >
        <div @click="moveToAvloppAnalyser" class="pointer">
          <img src="@/assets/analys.png" height="170px" width="180px" />
          <h3 class="blue--text">Avloppanalyser</h3>
          <p class="text--secondary">Lorem ipsum dolor sit amet</p>
        </div>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-center align-center mb-12">
      <v-col cols="2" class="d-flex justify-center align-center">
        <v-btn
          height="70px"
          width="250px"
          color="light-blue darken-3"
          class="rounded-0"
        >
          <div class="d-flex flex-column justify-center align-center">
            <h1
              class="pt-3 subtitle font-weight-medium white--text text-capitalize"
            >
              Snabbguide
            </h1>
            <p class="white--text caption text-capitalize mt-1">
              Vilken analys passar mig?
            </p>
          </div>
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="mt-12 mb-12">
      <v-col cols="3" class="d-flex align-center">
        <img src="@/assets/wave.png" height="125px" width="100px"
      /></v-col>
      <v-col cols="3" class="d-flex flex-column justify-start align-center">
        <img src="@/assets/waterdroplet.png" />
        <img
          src="@/assets/droplet.png"
          class="moveRight"
          height="70px"
          width="70px"
        />
      </v-col>
      <v-col cols="4" class="d-flex flex-column">
        <h1 class="blue--text font-weight-bold">Boka rådgivning</h1>
        <p class="text--secondary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br />
          Aspernatur eum dolorem. <span class="linkText">BOKA LÄNK</span>
        </p>
        <v-btn
          height="50px"
          width="100px"
          color="white--text light-blue darken-3"
          class="rounded-0"
          >LÄS MER
        </v-btn>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
export default {
  methods: {
    moveToEnsikltdricksvatten() {
      this.$router.push("/enskilt_vatten");
    },
    moveToAvloppAnalyser() {
      this.$router.push("/avlopp_analyser");
    },
    moveToBygglovTillstand() {
      this.$router.push("/bygglov_tillstand");
    },
    moveToVerksamhet() {
      this.$router.push("/verksamhet");
    },
  },
};
</script>

<style scoped>
.linkText {
  color: red;
  font-size: 16px;
  font-weight: 800;
}
.moveRight {
  margin-left: 250px;
}
.pointer {
  cursor: pointer;
  transition: all 1s ease-out;
}

.pointer:hover {
  transform: scale(1.08);
}
</style>