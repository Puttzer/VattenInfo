<template>
  <v-app ma-0 pa-3>
    <navigation-bar></navigation-bar>
    <v-main ma="0" class="grey lighten-2">
      <router-view></router-view>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import NavigationBar from "./components/ui/NavigationBar.vue";
import Footer from "./components/constants/Footer.vue";

export default {
  name: "App",

  components: {
    NavigationBar,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
