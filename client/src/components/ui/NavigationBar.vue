<template>
  <v-card >
    <v-app-bar app class="white darken-3 black--text" dark height="130">
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="pa-md-6 green lighten-1"
      ></v-app-bar-nav-icon>
      <div class="d-flex align-center md-6" @click="moveToHome">
        <div>
          <v-img
            alt="vatteninfo Logo"
            class="shrink mr-2 pa-md-2 mx-lg-4"
            contain
            src="@/assets/vatteninfo-logo.png"
            transition="scale-transition"
            width="200"
          />
          <v-card-title color="black" class="subtitle-2 font-weight-bold"
            >En mötesplats för vatten- och avloppsfrågor</v-card-title
          >
        </div>
      </div>

      <v-spacer></v-spacer>
      <div>
        <div class="d-flex justify-end align-center">
          <v-btn class="grey darken-2" text @click="moveToSwedishversion">SV</v-btn>
          <span>|</span>
          <v-btn class="grey darken-2" text @click="moveToEnglishversion">EN</v-btn>
        </div>
        <!-- <div>
          <v-list flat class="d-flex align-center white">
            <v-list-item
              v-for="link in navLinks"
              :key="link.text"
              router
              :to="link.route"
            >
              <v-btn text class="success hidden-xs-only normal">
                <v-icon class="green">{{ link.icon }}</v-icon>
                <span class="mr-1 black--text">{{ link.text }}</span>
              </v-btn>
            </v-list-item>
          </v-list>
        </div> -->
      </div>
    </v-app-bar>

    <v-navigation-drawer
      app
      v-model="drawer"
      absolute
      temporary
      height="100vh"
      width="500px"
    >
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <div class="d-flex align-center">
            <v-img
              alt="vatteninfo Logo"
              class="shrink mr-2 pa-md-4 mx-lg-4"
              contain
              src="@/assets/vatteninfo-logo.png"
              transition="scale-transition"
              width="200"
            />
            <v-icon
              fab
              color="black"
              x-large
              size="50px"
              @click="drawer = false"
              >cancel</v-icon
            >
          </div>

          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-item-icon>
              <v-icon fab color="red" x-large>{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title
              class="font-weight-bold black--text text-darken-8"
              ><h3>{{ link.text }}</h3></v-list-item-title
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      group: null,
      links: [
        { icon: "mdi-home", text: "Home", route: "/" },
        { icon: "mdi-account", text: "Private Person", route: "/private" },
        { icon: "groups", text: "Företag", route: "/company" },
        { icon: "request_quote", text: "Priser", route: "/priser" },
        { icon: "login", text: "Login", route: "/login" },
        { icon: "how_to_reg", text: "Register", route: "/register" },
      ],
      navLinks: [
        { icon: "contact_page", text: "Contact Page", route: "/contact" },
        { icon: "mdi-open-in-new", text: "Latest News", route: "/news" },
        { icon: "help_center", text: "Help Center", route: "/helpcenter" },
      ],
    };
  },
  methods: {
    moveToHome() {
      this.$router.push("/");
      console.log("to Home");
    },
    // moveToPrivate(){
    //   this.$router.push('/private')
    // },
    // moveToCompany(){
    //   this.$router.push('/company')
    // },
    // moveToPriser(){
    //   this.$router.push('/priser')
    // },
    // moveToLogin(){
    //   this.$router.push('/login')
    // },
    moveToNews() {
      this.$router.push("/news");
    },
    moveToContactus() {
      this.$router.push("/contact");
    },
    moveToSwedishversion() {
      this.$router.push("/");
    },
    moveToEnglishversion() {
      this.$router.push("/en");
    },
    // moveToRegister(){
    //   this.$router.push('/register')
    // },
  },
};
</script>

<style scoped>
</style>