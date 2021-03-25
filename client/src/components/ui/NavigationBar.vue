<template>
  <div class="d-flex flex-column nav-container">
    <v-card class="d-flex flex-column" flat color="transparent">
      <div class="navbarTop">
        <v-row>
          <v-col cols="12" class="d-flex flex-row justify-space-around">
            <v-col cols="2" class="d-flex justify-end">
              <img
                @click="moveToHome"
                src="@/assets/V-info-logotyp.png"
                width="160px"
                height="60px"
                class="cursor-pointer"
              />
            </v-col>
            <v-col cols="6" class="d-flex justify-end">
              <v-col cols="10">
                <v-text-field
                  solo
                  class="text"
                  label="sök efter tester/produkter!"
                  append-icon="search"
                  dense
                >
                  <!-- <v-icon color="red" large class="cursor-pointer"
                  >search</v-icon-->
                  >
                </v-text-field>
              </v-col>
            </v-col>
            <v-col cols="2" v-show="this.user.userIsloggedIn === false">
              <div
                @click="showPopup"
                class="d-flex flex-row align-center justify-end logga-in cursor-pointer"
              >
                <v-icon color="blue" large>account_circle</v-icon>
                <p class="ma-2 sub-title">Logga in</p>
              </div>

              <LoginComp v-show="this.user.showLoginModel === true" class="placement" />
            </v-col>
            <v-col v-show="this.user.userIsloggedIn === true">
              <div
                @click="ShowDropDown"
                class="d-flex flex-row align-center justify-end logga-in cursor-pointer dropdownuser"
              >
                <v-icon color="blue" large>account_circle</v-icon>
                <p class="ma-2 sub-title">{{ this.user.user.email }}</p>
              </div>
              <UserDropDown v-show="this.user.showUserDropDown === true" />
            </v-col>
            <v-col class="mt-n2 d-flex flex-row align-start justify-start" cols="2">
              <cart-component />
            </v-col>
          </v-col>
        </v-row>
      </div>
      <!-- <v-icon @click="drawer = !drawer" size="34" color="blue">mdi-menu</v-icon> -->
      <v-row class="d-flex ml-n15 mt-2 justify-center">
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
            <li @mouseover="showAboutSection = true" @mouseleave="showAboutSection = false">
              Om labbtjänster
              <v-icon>keyboard_arrow_down</v-icon>

              <ul v-if="showAboutSection">
                <li class="text--white">om oss</li>
                <li class="text--white">kontakt</li>
                <li class="text--white">wennnn</li>
              </ul>
            </li>
            <li @mouseover="showOtherServices = true" @mouseleave="showOtherServices = false">
              Övriga tjänster
              <v-icon>keyboard_arrow_down</v-icon>

              <ul v-if="showOtherServices">
                <li class="text--white">lorem</li>
                <li class="text--white">lorem</li>
                <li class="text--white">lorem</li>
              </ul>
            </li>
          </ul>
        </nav>
      </v-row>
    </v-card>
  </div>
</template>

<script scoped>
import CartComponent from "../cart/CartComponent.vue";
import LoginComp from "../../components/login/loginComp.vue";
import UserDropDown from "../privateperson/UserDropDown.vue";
import { mapState } from "vuex";

export default {
  data() {
    return {
      showServices: false,
      showAboutSection: false,
      showOtherServices: false
    };
  },
  components: {
    CartComponent,
    LoginComp,
    UserDropDown
  },
  computed: {
    ...mapState(["user"])
  },
  methods: {
    moveToAnalysKatalog() {
      this.$router.push("/analyskatalog");
    },
    moveToHome() {
      this.$router.push("/");
    },
    showPopup() {
      this.$store.commit("user/OPEN_LOGIN_COMP");
    },
    ShowDropDown() {
      this.$store.commit("user/USER_DROP_MENU");
    }
  }
};
</script>

<style scoped>
.nav-container {
  width: 100vw;
  border-bottom: 1px solid #449ace;
}
.navbarTop {
  height: 50px;
}
.cursor-pointer {
  cursor: pointer;
}

.menu {
  display: block;
  padding: 20px;
  text-decoration: none;
  list-style: none;
}

.dropdownuser {
  display: block;
  float: left;
  padding: 20px;
  position: relative;
  text-decoration: none;
  min-width: 180px;
  list-style: none;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
}

.dropdownuser UserDropDown {
  position: absolute;
  left: 0;
  top: 55px;
  border-top: 5px solid blue;
  background-color: rgb(21, 57, 68);
  margin: 0;
  padding: 0;
  z-index: 8;
  height: 234px;
  width: 100px;
}

.menu li {
  display: block;
  float: left;
  padding: 20px;
  position: relative;
  text-decoration: none;
  min-width: 180px;
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

.placement {
  /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 2; /* Sit on top */
  padding-top: 100px;
  /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  /* background-color: rgb(0, 0, 0);  Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}
</style>