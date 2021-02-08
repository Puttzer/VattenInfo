<template>
  <v-app class="ma-0 pa-0">
    <NavigationBar class='d-sm-none d-md-flex' />
    <NavBarMobile class='d-xs-flex d-md-none'  />

    <v-main class="ma-0 pa-0 primary"  >
      <router-view></router-view>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import NavigationBar from "./components/ui/TESTnavbar.vue";
import NavBarMobile from "./components/ui/NavBarMobile.vue";

import Footer from "./components/constants/Footer";

// NavigationBar

export default {
  name: "App",

  components: {
	NavigationBar,
	NavBarMobile,
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
.v-main{
  width:100vw;
}
</style>
