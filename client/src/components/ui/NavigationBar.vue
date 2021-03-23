<template>
  <div
    class="d-flex d-flex-column container align-center justify-space-between"
  >
    <v-card class="d-flex d-flex-column align-center" flat color="transparent">
      <v-img
        @click="moveToHome"
        src="@/assets/V-info-logotyp.png"
        class="d-flex align-right ml-6"
        max-height="160px"
        max-width="163px"
      ></v-img>
      <!-- <v-icon @click="drawer = !drawer" size="34" color="blue">mdi-menu</v-icon> -->
      <nav>
        <ul class="blue--text menu">
          <li
            @click="moveToAnalysKatalog"
            @mouseover="showServices = true"
            @mouseleave="showServices = false"
          >
            Analyskatalog
            <v-icon>keyboard_arrow_down</v-icon>

            <ul v-if="showServices">
              <li class="text--white">enskilt dricks vatten</li>
              <li class="text--white">verksamhet & sämfallighet</li>
              <li class="text--white">bygglov & tillstand</li>
              <li class="text--white">analyskatalog</li>
              <li class="text--white">rådgivning</li>
            </ul>
          </li>
          <li>Beställ analys</li>
          <li
            @mouseover="showAboutSection = true"
            @mouseleave="showAboutSection = false"
          >
            Om labbtjänster
            <v-icon>keyboard_arrow_down</v-icon>

            <ul v-if="showAboutSection">
              <li class="text--white">om oss</li>
              <li class="text--white">kontakt</li>
              <li class="text--white">wennnn</li>
            </ul>
          </li>
        </ul>
      </nav>
    </v-card>
    <v-spacer></v-spacer>
    <cart-component />
    <!-- <v-img
      src="@/assets/V-info-logotyp.png"
      class="d-flex align-right ml-6"
      max-height="160px"
      max-width="163px"
    ></v-img> -->
    <!-- <v-navigation-drawer
      app
      v-model="drawer"
      color="#3a3a3a"
      absolute
      flat
      temporary
      height="10vh"
      class="d-none d-sm-flex d-md-none"
    ></v-navigation-drawer> -->
  </div>
</template>

<script scoped>
import CartComponent from "../cart/CartComponent.vue";
export default {
  data() {
    return {
      //   drawer: false,
      showServices: false,
      showAboutSection: false,
    };
  },
  components: {
    CartComponent,
  },
  methods: {
    moveToAnalysKatalog() {
      this.$router.push("/analyskatalog");
    },
    moveToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.menu {
  display: block;
  padding: 20px;
  text-decoration: none;
  list-style: none;
}

.menu li {
  display: block;
  float: left;
  padding: 20px;
  position: relative;
  text-decoration: none;
  min-width: 160px;
  list-style: none;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
}
.menu li ul {
  position: absolute;
  left: 0;
  top: 55px;
  border-top: 5px solid blue;
  background-color: rgb(21, 57, 68);
  margin: 0;
  padding: 0;
  z-index: 8;
}

.menu li ul li {
  display: inline;
  margin: 5px;
  padding: 0;
  /* color: rgb(54, 85, 104); */
  font-size: 14px;
  color: white;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
}

.menu li:hover {
  /* text-decoration: underline wavy; */
  /* font-weight: normal; */
  cursor: pointer;
  background: rgb(221, 228, 230);
}

/* .logga{
	position: absolute;
	right: 0;
	left:100;
} */
</style>