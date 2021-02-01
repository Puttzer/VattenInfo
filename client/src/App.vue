<template>
  <v-app class="ma-0 pa-0">
    <NavigationBar />
    <v-main class="ma-0 pa-0 primary"  >
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavigationBar from "./components/ui/TESTnavbar.vue";
// import bajs from "./components/ui/bajs.vue";
// import test from "./components/ui/test2.vue";

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
.v-main{
  width:100vw;
}
</style>
