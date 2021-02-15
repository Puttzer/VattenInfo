<template>
  <div>
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
        </div>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" color="#222" absolute flat temporary width="100%">
      <v-icon large color='white' class="mx-6 mt-7" @click="drawer = !drawer">mdi-close</v-icon>
      <v-row class="pl-12">
        <v-col class="pl-12">
          <v-list class="pl-12">
            <v-list-group class="pt-3" no-action sub-group>
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title class="pr-9 white--text">Meny</v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                class=" pl-12 font-weight-light"
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
              <v-list-item-title class="white--text">Beställ</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title class="white--text">Instruktioner & Blanketter</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title class="white--text">Hjälp med ditt vatten</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title class="white--text">Om Laboratoriet</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="mb-2 flex d-flex align-end justify-end">
          <div class="mt-16 d-flex align-end justify-end">
            <v-btn
              @click="setLanguage()"
              :style="{
                filter: english ? 'blur(0px) !important' : 'blur(2px)',
                opacity: english ? '1 !important' : '0.55',
              }"
              class="mx-3"
              fab
              dark
              small
            >
              <v-avatar size="34">
                <v-img fab src="../../assets/flags/gb.svg"></v-img>
              </v-avatar>
            </v-btn>

            <v-btn
              @click="setLanguage()"
              :style="{
                filter: swedish ? 'blur(0) !important' : 'blur(2px)',
                opacity: swedish ? '1 !important' : '0.55',
              }"
              class="mx-3"
              fab
              dark
              small
            >
              <v-avatar size="34">
                <v-img src="../../assets/flags/sweden.svg"></v-img>
              </v-avatar>
            </v-btn>
          </div>
        </v-col>``
      </v-row>
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
  font-size: 18px;
}
/* .spaceBetween {
  display: flex;
  flex-direction: column;
  align-content: space-between;
  height: 95vh;
} */
</style>