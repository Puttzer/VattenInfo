<template>
  <v-app class="d-flex justify-ceneter app-container">
    <!-- <AdminStartsidan v-if="this.admin.isAdmin === true" /> -->
    <NavigationBar
      v-if="this.admin.showNavbar === true"
      class="ma-0 pa-0 navigation-bar"
    />

    <!-- <NavBarMobile class="d-xs-flex d-md-none" /> -->
    <Pathcomponent />
    <v-divider class="grey lighten-1"></v-divider>
    <v-main class="ma-0 pa-0 background body-main" flat>
      <router-view></router-view>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import NavigationBar from "./components/ui/NavigationBar.vue";
// import AdminStartsidan from "./views/AdminStartsidan.vue";

//Added comment test. 26/8

// import NavBarMobile from "./components/ui/NavBarMobile.vue";
import Pathcomponent from "./components/Pathcomponent";

import Footer from "./components/ui/Footer";
import { mapState } from "vuex";

// NavigationBar

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Pathcomponent,
    NavigationBar,
    // AdminStartsidan,
    // NavBarMobile,
    Footer,
    // test
  },
  //   async created() {
  //     await this.$store.dispatch("stripe/getStripePublishableKey");
  //   },
  computed: {
    ...mapState(["admin", "test", "user", "stripe"]),
  },
  methods: {},
  async mounted() {
    this.$vToastify.info("Välkommen till VattenInfo Lab");
    // console.log(this.$vToastify.getSettings());
    // if (localStorage.userToken && localStorage.userLoggedin) {
    //   console.log(localStorage.userToken);
    //   console.log(localStorage.userLoggedin);

    //   await this.$store.commit("user/UPDATE_USER_ISLOGGEDIN", true);
    //   this.$router.push("/login/user");
    // }

    await this.$store.dispatch("tests/getTests");
    console.log(localStorage.companyProfileToken);
    if (localStorage.userToken) {
      await this.$store.dispatch("user/validateUser");
    } else if (localStorage.companyProfileToken) {
      console.log("move to actions");
      await this.$store.dispatch("company/validateCompany");
    } else if (localStorage.token) {
      await this.$store.dispatch("admin/validateAdmin");
      this.$router.push("/adminpage");
    }
  },
};
</script>

<style >
/* @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,600;1,400&display=swap'); */

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.body-main {
  width: 100vw;
  height: 100%;
}
.app-container {
  width: 100vw;
}
.navigation-bar {
  width: 100vw;
  /* height: 150px;
  position: fixed;
  z-index: 2;
  background-color: white; */
}
</style>
