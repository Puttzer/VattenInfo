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
      <v-app-bar-nav-icon @click="drawer = !drawer" class="ml-1 mc-3 -2 white--text"></v-app-bar-nav-icon>
      <div class="d-flex align-center darken md-6">
        <div @click="moveToHome" class="pointerHome">
          <v-app-bar-title class="ml-3 blue--text heading">VATTEN</v-app-bar-title>
          <v-app-bar-title class="green--text heading">INFO</v-app-bar-title>
        </div>
      </div>

      <v-spacer></v-spacer>
      <div v-if="showLogout" class="d-none d-md-flex sidelinks mr-5">
        <v-icon @click="moveToLogin" color="white dark mr-2" size="32"
          >mdi-login</v-icon
        >

        <span class="white--text mx-3">/</span>
        <v-icon @click="moveToHome" color="white dark mr-2" size="32">mdi-home</v-icon>
      </div>
      <log-out
        v-else-if="!showLogout"
        :showLogout="showLogout"
        @changeStatus="removeLogout"
      />
    </v-app-bar>
	<v-navigation-drawer
        app
        v-model="drawer"
        color="#222222"
        absolute
        flat
        temporary
      >
        <div class="spaceBetween">
          <v-list shaped>
            <v-list-group no-action sub-group>
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title class="white--text">Start</v-list-item-title>
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
                <v-list-item-title class="white--text" v-text="link.text">
                  {{
                  link.text
                  }}
                </v-list-item-title>

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
                filter: english ? 'blur(0px) !important' : 'blur(2px)',
                opacity: english ? '1 !important' : '0.55',
              }"
                class="mx-3"
                fab
                dark
                small
              >
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
          </v-col>
        </div>
      </v-navigation-drawer>Í
  </div>
</template>

<script>
import LogOut from "../privateperson/LogOut.vue";
export default {
  components: { LogOut },
  name: "NavigationBar",
  componnets: {
    LogOut,
  },
  data() {
    return {
      drawer: false,
      showLogout: false,
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
      this.showLogout = true;
    },
    moveToLogin() {
      this.$router.push("/login");
    },
    removeLogout() {
      this.$router.push("/");
      this.showLogout = true;
    },
  },
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
.spaceBetween {
  display: flex;
  flex-direction: column;
  align-content: space-between;
  height: 95vh;
}
</style>