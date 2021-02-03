<template>
  <v-card class="ma-0 pa-0" fluid width="100vw">
    <v-app-bar
      app
      class="mr-1 lighten-3 black--text"
      color="transparent"
      lighten-4
      height="100"
      flat
      hide-on-scroll
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" class="ml-1 mc-3 darken-2 black--text"></v-app-bar-nav-icon>
      <div class="d-flex align-center darken md-6">
        <div @click="moveToHome" class="pointerHome">
          <v-app-bar-title class="ml-3 blue--text heading">VATTEN</v-app-bar-title>
          <v-app-bar-title class="green--text heading">INFO</v-app-bar-title>
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
          <!-- <v-icon color="blue mr-2" x-large>mdi-water</v-icon> -->
          <v-img class="ml-4" width="50px" height="50px" src="../../assets/logga.svg"></v-img>
        </div>
      </div>

      <v-spacer></v-spacer>
      <div class="sidelinks mr-5">
        <v-icon @click="moveToLogin" color="black dark mr-2" size="32">mdi-login</v-icon>
        <span class="white--text mx-3">/</span>
        <v-icon @click="moveToHome" color="black dark mr-2" size="32">mdi-home</v-icon>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      app
      v-model="drawer"
      color="#222222"
      absolute
      flat
      temporary
      height="100vh"
      width="300px"
    >
      <div class="spaceBetween">
        <v-list shaped class="pt-10">
          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title class="white--text">Start</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              class="font-weight-light pl-4"
              v-for="(link) in links"
              router
              :to="link.route"
              :key="link.text"
              link
            >
              <v-list-item-title class="white--text" v-text="link.text">{{link.text}}</v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
          <v-list-item>
            <!-- <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
            </v-list-item-icon>-->

            <v-list-item-title class="pl-14 white--text">Om oss</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <!-- <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
            </v-list-item-icon>-->
            <v-list-item-title class="pl-14 white--text">Kontakt</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-col class="mb-2 flex d-flex align-end justify-end">
          <div class="mt-16 d-flex align-end justify-end">
            <v-btn
              @click="setLanguage()"
              :style="{
				filter: english ? 'blur(0px) !important': 'blur(2px)',
		opacity: english ? '1 !important' : '0.55' 
           }"
              class="mx-3"
              fab
              dark
              small

            >
              <v-avatar>
                <v-img fab src="../../assets/flags/gb.svg"></v-img>
              </v-avatar>
            </v-btn>

            <v-btn
              @click="setLanguage()"
              :style="{
		filter: swedish ? 'blur(0) !important': 'blur(2px)',
		opacity: swedish ? '1 !important' : '0.55' }"
              class="mx-3"
              fab
              dark
              small

            >
              <v-avatar>
                <v-img src="../../assets/flags/sweden.svg"></v-img>
              </v-avatar>
            </v-btn>
          </div>
        </v-col>
      </div>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      swedish: true,
      english: false,
      links: [
        { text: "Laboratorietjänster", route: "/" },
        { text: "Vattenexpo", route: "/" },
        { text: "Vattendagar", route: "/" },
        { text: "Kurser", route: "/" },
        { text: "GemVA", route: "/" },
        { text: "Produkter", route: "/" },
        { text: "Nyttiga sidor", route: "/" }
      ]
    };
  },
  methods: {
    setLanguage() {
      (this.english = !this.english), (this.swedish = !this.swedish);
    },
    moveToHome() {
      this.$router.push("/");
    },
    moveToLogin() {
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
.span {
  font-size: 100px;
}
.pointerHome {
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 24px;
}
.spaceBetween {
  display: flex;
  flex-direction: column;
  align-content: space-between;
  height: 95vh;
}

v-list-item-title {
  background: rgb(114, 17, 106);
  /* font-weight: lighter; */
  color: blue !important;
}

v-list-item-title:active {
  background: mediumseagreen;
}

.anyName {
  display: flex;
  align-content: space-between;
  /* background: mediumspringgreen; */
}
</style>