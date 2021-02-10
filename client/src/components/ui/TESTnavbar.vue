<template>
  <div>
    <v-app-bar
      app
      class="mr-1 lighten-3 black--text"
      color="#ffffff80"
      lighten-4
      height="100"
      flat
      hide-on-scroll
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" class="ml-1 mx-3 white--text"></v-app-bar-nav-icon>
      <div class="d-flex align-center darken md-6">
        <div @click="moveToHome" class="pointerHome">
          <v-app-bar-title class="ml-3 blue--text heading">VATTEN</v-app-bar-title>
          <v-app-bar-title class="green--text heading">INFO</v-app-bar-title>
        </div>
      </div>

      <v-spacer></v-spacer>
      <div class="sidelinks mr-5">
        <v-icon @click="moveToLogin" color="white dark" size="32">mdi-login</v-icon>
        <span class="white--text mx-3">/</span>
        <v-icon @click="moveToHome" color="white dark" size="32">mdi-home</v-icon>
      </div>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" color="#222222" absolute flat temporary width="300">
      <v-card color="#222" flat>
        <!-- <v-row>
          <v-col class="green d-flex justify-center">glass</v-col>
        </v-row> -->
        <v-row>
          <v-col class="d-flex justify-center">
           <v-list class="mt-4 ml-3">
          <v-list-group class="pt-3" no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title class="white--text">Meny</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              class="font-weight-light pl-4"
              v-for="link in links"
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
            <v-list-item-title class="pl-14 white--text">Beställ</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title class="pl-14 white--text">Instruktioner & Blanketter</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title class="pl-14 white--text">Hjälp med ditt vatten</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title class="pl-14 white--text">Om Laboratoriet</v-list-item-title>
          </v-list-item>
        </v-list>
          </v-col>
        </v-row>
        <v-row class="d-flex flex-column ">
          <v-col class="d-flex justify-end mb-n9">
            <v-card-title class=" white--text" @click="moveToUser">
              <v-icon color="white" size="32">mdi-account</v-icon>Mikael Holmberg
            </v-card-title>
          </v-col>
    
          <v-col class="d-flex justify-end" color="#222">
            <v-avatar
              class="mx-2"
              @click="setLanguage()"
              :style="{
                filter: english ? 'blur(0px) !important' : 'blur(2px)',
                opacity: english ? '1 !important' : '0.55',
              }"
              size="34"
            >
              <v-img fab src="../../assets/flags/gb.svg"></v-img>
            </v-avatar>

            <v-avatar
              class="mx-2"
              @click="setLanguage()"
              :style="{
                filter: swedish ? 'blur(0) !important' : 'blur(2px)',
                opacity: swedish ? '1 !important' : '0.55',
              }"
              size="34"
            >
              <v-img src="../../assets/flags/sweden.svg"></v-img>
            </v-avatar>
          </v-col>
        </v-row>
      </v-card>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      swedish: true,
      english: false,
      links: [
        { text: "Enskillt Drickvatten", route: "/enskillt_vatten" },
        { text: "Avloppsanalyser", route: "/avlopps_analyser" },
        { text: "Bygglovstillstånd", route: "/bygglovs_tillstand" },
        { text: "Verksmhet & SamFällighet", route: "/verksamhet" },

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
    },
    moveToUser() {
      this.$router.push("/user");
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
  /* display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 18px; */
}
.spaceBetween {
  display: flex;
  flex-direction: column;
  align-content: space-between;
  height: 95vh;
}
</style>