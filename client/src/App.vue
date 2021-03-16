<template>
  <v-app class="ma-0 pa-0">
    <AdminControlpanel v-if="this.admin.isAdmin === true" />
    <NavigationBar v-else class="d-xs-none d-md-flex" />
    <!-- <NavBarMobile class="d-xs-flex d-md-none" /> -->
    <v-main class="ma-0 pa-0 background" flat>
      <router-view></router-view>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import NavigationBar from "./components/ui/NavigationBar.vue";
import AdminControlpanel from "./components/ui/AdminContropanel";
// import NavBarMobile from "./components/ui/NavBarMobile.vue";

import Footer from "./components/ui/Footer";
import { mapState } from "vuex";

// NavigationBar

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    NavigationBar,
    AdminControlpanel,
    // NavBarMobile,
    Footer,
    // test
  },
  computed: {
    ...mapState(["admin"]),
  },
  methods: {},
};
</script>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,600;1,400&display=swap'); */

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.v-main {
  width: 100vw;
}
</style>
