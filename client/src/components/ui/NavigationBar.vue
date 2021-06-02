<template>
  <div
    class="d-flex flex-column nav-container"
    @click.passive="closeSearchDropDown"
  >
    <v-card class="d-flex flex-column" flat color="transparent">
      <div class="navbarTop">
        <v-row class="mb-0">
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
            <v-col cols="7" class="d-flex flex-column">
              <v-row class="d-flex justify-end">
                <v-col cols="10" class="d-flex justify-end">
                  <v-text-field
                    solo
                    class="text"
                    label="sök efter tester och produkter!"
                    append-icon="search"
                    dense
                    v-model="search"
                    @input="sendUpdatedText()"
                  >
                    <!-- <v-icon color="red" large class="cursor-pointer"
                  >search</v-icon @input="showSearchDropDown()"-->
                    >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row class="d-flex justify-end ma-0 pa-0 green">
                <v-col cols="10" class="ma-0 pa-0">
                  <search-drop-down
                    v-if="this.user.showSearchDropDown === true"
                    class="search-dropdown ma-0 pa-0"
                  />
                </v-col>
              </v-row>
            </v-col>
            <v-col
              class="mt-n2 d-flex flex-row align-start justify-end"
              cols="1"
            >
              <cart-component />
            </v-col>
            <v-col
              cols="2"
              v-show="
                this.user.userIsloggedIn === false &&
                this.company.companyUserIsloggedIn === false
              "
            >
              <div
                @click="showPopup"
                class="d-flex flex-row align-center justify-start logga-in cursor-pointer"
              >
                <v-icon color="blue" large>account_circle</v-icon>
                <p class="ma-2 sub-title loginhaha">Logga in</p>
              </div>
              <transition name="bounce">
                <LoginComp
                  v-show="
                    this.user.showLoginModel === true ||
                    this.company.showLoginModel === true
                  "
                  class="placement"
                />
              </transition>
            </v-col>
            <v-col>
              <div
                v-if="this.user.userIsloggedIn === true"
                @click="ShowUserDropDown()"
                class="d-flex flex-row align-center justify-start logga-in cursor-pointer dropdownuser"
              >
                <v-icon color="blue" large>account_circle</v-icon>
                <p class="ma-2 sub-title brown">
                  {{ this.user.user.email }}
                </p>
              </div>
              <div
                @click="ShowCompanyDropDown()"
                class="d-flex flex-row align-center justify-center logga-in cursor-pointer dropdownuser"
                v-else
              >
                <!-- v-else="this.company.companyUserIsloggedIn === true" -->
                <v-icon color="blue" large>account_circle</v-icon>

                <p class="username d-flex justify-center align-center">
                  {{ this.company.companyUser.contactEmail }}
                </p>
              </div>
            </v-col>
          </v-col>
        </v-row>
      </div>

      <transition name="fade">
        <ShowShoppingCart
          class="position-shoppingcart user-window"
          v-if="this.tests.showSelectedTests === true"
        />
      </transition>

      <transition name="slide-fade">
        <UserDropDown
          v-if="this.user.showUserDropDown === true"
          class="ma-0 pa-0 user-window"
        />
      </transition>
      <transition name="slide-fade">
        <CompanyDropDown
          v-if="this.company.showCompanyDropDown === true"
          class="ma-0 pa-0 user-window"
        />
      </transition>
      <!-- <v-icon @click="drawer = !drawer" size="34" color="blue">mdi-menu</v-icon> -->
      <v-row
        class="d-flex ml-n15 mt-2 justify-center"
        @click.self="closeSearchDropDown"
      >
        <nav>
          <ul class="blue--text menu">
            <li
              @mouseover="showServices = true"
              @mouseleave="showServices = false"
              @click.self="moveToAnalysKatalog"
            >
              Våra Analyser
              <v-icon>keyboard_arrow_down</v-icon>

              <!-- LOOOKIE HERE! -->

              <ul v-if="showServices">
                <li class="text--white" @click="moveToEnskillt">
                  enskilt dricksvatten
                </li>
                <li class="text--white" @click="moveToVerksam">
                  verksamhet & sämfallighet
                </li>
                <li class="text--white" @click="moveToBygglov">
                  bygglov & tillstand
                </li>
                <li class="text--white" @click="moveToAvlopp">
                  Avloppsanalyser
                </li>
                <li class="text--white">
                  <a
                    href="https://vatteninfo.com/Radgivning"
                    class="d-flex flex-row justify-center webpage mt-3"
                  >
                    rådgivning
                  </a>
                </li>
              </ul>
            </li>
            <li @click="moveToBestallanalys">Beställ analys</li>
            <li
              @mouseover="showAboutSection = true"
              @mouseleave="showAboutSection = false"
              @click.self="moveToLab()"
            >
              Om labbtjänster
              <v-icon>keyboard_arrow_down</v-icon>

              <ul v-if="showAboutSection">
                <li class="text--white" @click="moveToLab">om oss</li>
                <li class="text--white" @click="moveToContact()">kontakt</li>
              </ul>
            </li>
            <li
              @mouseover="showOtherServices = true"
              @mouseleave="showOtherServices = false"
            >
              Övriga tjänster
              <v-icon>keyboard_arrow_down</v-icon>

              <ul v-if="showOtherServices">
                <li class="text--white" @click="moveToEtikett">
                  Etikett How To
                </li>
                <!-- <li class="text--white">lorem</li>
                <li class="text--white">lorem</li> -->
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
import CompanyDropDown from "../company/CompanyDropDown.vue";
import ShowShoppingCart from "../../components/cart/ShowShoppingCart.vue";
import SearchDropDown from "../../components/searchcomponent/SearchDropDown.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      showServices: false,
      showAboutSection: false,
      showOtherServices: false,
      search: "",
    };
  },
  components: {
    CartComponent,
    LoginComp,
    UserDropDown,
    ShowShoppingCart,
    CompanyDropDown,
    SearchDropDown,
  },
  computed: {
    ...mapState(["user", "tests", "company"]),
  },
  mounted() {
    if (this.user.userIsloggedIn) {
      this.$store.commit("company/COMPANY_DROPDOWNCOPMONENT_DISABLE");
    }
  },
  methods: {
    moveToEnskillt() {
      this.$router.push("/enskiltdricksvatten");
    },
    moveToAnalysKatalog() {
      this.$router.push("/Vara_analyser");
    },
    moveToHome() {
      this.$router.push("/");
    },
    moveToBestallanalys() {
      this.$router.push("/bestallanalys");
    },
    moveToVerksam() {
      this.$router.push("/verksamhet");
    },
    moveToAvlopp() {
      this.$router.push("/avlopp_analyser");
    },
    moveToLab() {
      this.$router.push("/omlab");
    },
    moveToBygglov() {
      this.$router.push("/bygglov_tillstand");
    },
    moveToContact() {
      this.$router.push("/kontakt");
    },
    moveToEtikett() {
      this.$router.push("/EtikettHowTo");
    },
    showPopup() {
      this.$store.commit("user/OPEN_LOGIN_COMP");
      //   this.$store.commit("user/SEARCH_DROP_DOWN_CLOSE");
    },
    ShowUserDropDown() {
      console.log("user drop down");
      if (this.user.userIsloggedIn) {
        this.$store.commit("user/USER_DROP_MENU");
        this.$store.commit("company/COMPANY_DROPDOWNCOPMONENT_DISABLE");
      }
    },
    ShowCompanyDropDown() {
      console.log("company drop down");
      this.$store.commit("company/COMPANY_DROP_MENU");
    },
    showSearchDropDown() {
      this.$store.commit("user/SEARCH_DROP_DOWN_VISIBLE");
    },
    closeSearchDropDown() {
      this.search = "";
      this.$store.commit("user/SEARCH_DROP_DOWN_CLOSE");
    },
    sendUpdatedText() {
      const value = this.search;
      console.log(value);
      this.$store.commit("user/SEARCH_DROP_DOWN_VISIBLE");
      this.$store.commit("user/SEND_UPDATED_VALUE", value);
    },
  },
};
</script>

<style scoped>
.nav-container {
  width: 100vw;
}
.navbarTop {
  height: 60px;
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
.user-window {
  position: fixed;
  right: 0px;
  top: 0px;
  min-height: 100px;
  min-width: 100px;
  /* border-top: 5px solid blue; */
  /* background-color: rgb(27, 77, 92); */
  background: #f3f3f3;
  color: #444;
  cursor: pointer;
  margin: 0;
  padding: 0;
  z-index: 10;
}
.dropdownuser {
  display: block;
  position: absolute;
  text-decoration: none;
  min-width: 100px;
  list-style: none;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  z-index: 10;
}
/* .dropdownuser UserDropDown {
  position: absolute;
  right: 0;
  top: 55px;
  min-width: 100px;
  border-top: 5px solid blue;
  background-color: rgb(80, 152, 173);
  margin: 0;
  padding: 0;
  z-index: 10;
} */
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
  /* border-top: 5px solid blue; */
  /* background-color: rgb(21, 57, 68); */
  background: #fff;
  margin: 0;
  padding: 0;
  z-index: 2;
}
.menu li ul li {
  display: inline;
  margin: 5px;
  padding: 0;
  /* color: rgb(54, 85, 104); */
  font-size: 14px;
  /* color: white; */
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
/* .position-shoppingcart {
  position: absolute;
  z-index: 3;
  top: 40px;
  right: 25px;
  background-color: none;
  background-color: rgba(0, 0, 0, 0.4);
  min-height: 5vh;
} */
.search-dropdown {
  position: absolute;
  margin-top: -100px;
  z-index: 10;
  background-color: rgb(206, 213, 224);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity ease-in-out 0.7s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.7s ease;
}
.slide-fade-leave-active {
  /* transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1); */
  transition: all 0.7s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(150px);
  /* opacity: 0; */
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  /* 50% {
    transform: scale(1.5);
  } */
  100% {
    transform: scale(1);
  }
}

.username {
  font-size: 12px;
  font-weight: lighter;
}
.loginhaha {
  z-index: 100;
}
</style>