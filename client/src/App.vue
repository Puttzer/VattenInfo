<template>
  <v-app class="ma-0 pa-0">
    <NavigationBar />
    <v-main class="ma-0 pa-0 lighten-2">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavigationBar from "./components/ui/TESTnavbar.vue";
// import bajs from "./components/ui/bajs.vue";
// import test from "./components/ui/test.vue";

// NavigationBar

export default {
  name: "App",

  components: {
    NavigationBar
    // test
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

</style>
