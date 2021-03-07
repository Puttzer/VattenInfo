<template>
  <v-content class="ma-0 pa-0">
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
        <img src="@/assets/kran.png" height="200px" width="250px" />
        <h3 class="blue--text">Enskilt dricksvatten</h3>
        <p class="text--secondary">Lorem ipsum dolor sit amet</p>
      </v-col>
      <v-col cols="5" class="d-flex flex-column">
        <img src="@/assets/Samfalligheter.png" height="200px" width="200px" />
        <h3 class="blue--text">Verksamhet & samfällighet</h3>
        <p class="text--secondary">Lorem ipsum dolor sit amet</p>
      </v-col>
    </v-row>

    <v-row class="mt-8 mb-12">
      <v-col cols="2" class="d-flex align-center">
        <img src="@/assets/wave.png" height="125px" width="100px"
      /></v-col>
      <v-col cols="5" class="d-flex flex-column justify-center align-center">
        <img src="@/assets/Avtal.png" height="170px" width="180px" />
        <h3 class="blue--text">Enskilt dricksvatten</h3>
        <p class="text--secondary">Lorem ipsum dolor sit amet</p>
      </v-col>
      <v-col cols="5" class="d-flex flex-column">
        <img src="@/assets/analys.png" height="170px" width="180px" />
        <h3 class="blue--text">Verksamhet & samfällighet</h3>
        <p class="text--secondary">Lorem ipsum dolor sit amet</p>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-center align-center mb-12">
      <v-col cols="2" class="d-flex justify-center align-center">
        <v-btn height="100px" width="250px" color="light-blue darken-3">
          <div class="d-flex flex-column justify-center align-center">
            <h1 class="subtitle font-weight-medium white--text text-capitalize">
              Snabbguide
            </h1>
            <p class="white--text caption text-capitalize mt-1">
              Vilken analys passar mig?
            </p>
          </div>
        </v-btn>
      </v-col>
    </v-row>
  </v-content>
</template>

<script>
export default {};
</script>

<style scoped>
</style>