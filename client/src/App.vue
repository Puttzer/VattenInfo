<template>
  <v-app class="ma-0 pa-0 d-flex justify-ceneter">
    <!-- <AdminStartsidan v-if="this.admin.isAdmin === true" /> -->
    <NavigationBar v-if="this.admin.showNavbar === true" class="ma-0 pa-0" />
    <!-- <NavBarMobile class="d-xs-flex d-md-none" /> -->
    <v-main class="ma-0 pa-0 background" flat>
      <router-view></router-view>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import NavigationBar from "./components/ui/NavigationBar.vue";
// import AdminStartsidan from "./views/AdminStartsidan.vue";

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
    // AdminStartsidan,
    // NavBarMobile,
    Footer
    // test
  },
  computed: {
    ...mapState(["admin", "user"])
  },
  methods: {},
  async mounted() {
    if (localStorage.userToken && localStorage.userLoggedin) {
		console.log(localStorage.userToken);
		console.log(localStorage.ocalStorage.userLoggedin);


     await this.$store.commit("user/UPDATE_USER_ISLOGGEDIN", true);
      this.$router.push("/login/user");
    } else {
      this.$router.push("/");
    }
  }
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
.app-container {
  width: 100vw;
}
NavigationBar {
  width: 100vw;
}
</style>
