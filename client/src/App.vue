<template>
  <v-app class="ma-0 pa-0">
    <NavigationBar />
    <v-main class="ma-0 pa-0 lighten-2 blue">
      <router-view></router-view>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import NavigationBar from "./components/ui/TESTnavbar.vue";
import Footer from "./components/constants/Footer";

// NavigationBar

export default {
  name: "App",

  components: {
    NavigationBar,
    Footer,
    // test
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
