<template>
  <v-container class="ma-0 pa-0" fluid width="100vw">
    <v-app-bar
      app
      class="mr-1 lighten-3 black--text"
      color="transparent"
      lighten-4
      height="100"
      flat
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" class="ml-1 mc-3 green darke-2 white--text"></v-app-bar-nav-icon>
      <div class="d-flex align-center darken md-6" @click="moveToHome">
        <div>
          <v-app-bar-title class="ml-3 blue--text">VATTEN</v-app-bar-title>
          <v-app-bar-title class="green--text">INFO</v-app-bar-title>
          <!-- <v-img
            alt="vatteninfo Logo"
            class="shrink mr-3 pa-md-2 mx-lg-4"
            contain
            src="@/assets/vatteninfo-logo.png"
            transition="scale-transition"
            width="200"
          />-->

          <!-- <v-card-title
            color="black"
            class="subtitle-2 font-weight-bold"
          >En mötesplats för vatten- och avloppsfrågor</v-card-title>-->
          <v-icon color="blue mr-2" x-large>mdi-water</v-icon>
        </div>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: "NavigationBar",

};
</script>

<style scoped>
.change_color {
  background-color: red;
}
</style>