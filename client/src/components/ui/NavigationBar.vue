<template>
  <div class="d-flex flex-column nav-container">
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
                <p class="ma-2 sub-title">Logga in</p>
              </div>

              <LoginComp
                v-show="
                  this.user.showLoginModel === true ||
                  this.company.showLoginModel === true
                "
                class="placement"
              />
            </v-col>
            <v-col>
              <div
                v-if="this.user.userIsloggedIn === true"
                @click="ShowUserDropDown()"
                class="d-flex flex-row align-center justify-start logga-in cursor-pointer dropdownuser"
              >
                <v-icon color="blue" large>account_circle</v-icon>
                <p class="ma-2 sub-title">
                  {{ this.user.user.email }}
                </p>
              </div>
              <div
                @click="ShowCompanyDropDown()"
                class="d-flex flex-row align-center justify-start logga-in cursor-pointer dropdownuser"
                v-else
              >
                <!-- v-else="this.company.companyUserIsloggedIn === true" -->
                <v-icon color="blue" large>account_circle</v-icon>

                <p class="ma-2 sub-title">
                  {{ this.company.companyUser.email }}
                </p>
              </div>
            </v-col>
          </v-col>
        </v-row>
      </div>

      <ShowShoppingCart
        class="position-shoppingcart"
        v-if="this.tests.showSelectedTests === true"
      />

      <!-- <v-row class="d-flex justify-end mr-4">
        <v-col cols="2" class="d-flex justify-end"> </v-col>
      </v-row>
      <v-row class="d-flex justify-end mr-4">
        <v-col cols="2" class="d-flex justify-end"> </v-col>
      </v-row> -->
      <UserDropDown
        v-if="this.user.showUserDropDown === true"
        class="ma-0 pa-0 cursor-pointer user-window"
      />
      <CompanyDropDown
        v-if="this.company.showCompanyDropDown === true"
        class="ma-0 pa-0 cursor-pointer user-window"
      />
      <!-- <v-icon @click="drawer = !drawer" size="34" color="blue">mdi-menu</v-icon> -->
      <v-row
        class="d-flex ml-n15 mt-2 justify-center"
        @click="closeSearchDropDown"
      >
        <nav>
          <ul class="blue--text menu">
            <li
              @mouseover="showServices = true"
              @mouseleave="showServices = false"
            >
              Analyskatalog
              <v-icon>keyboard_arrow_down</v-icon>

              <ul v-if="showServices">
                <li class="text--white" @click="moveToEnskillt">
                  enskilt dricks vatten
                </li>
                <li class="text--white" @click="moveToVerksam">
                  verksamhet & sämfallighet
                </li>
                <li class="text--white" @click="movteToBygglov">
                  bygglov & tillstand
                </li>
                <li class="text--white" @click="moveToAnalysKatalog">
                  analyskatalog
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
              @click="moveToLab()"
            >
              Om labbtjänster
              <v-icon>keyboard_arrow_down</v-icon>

              <ul v-if="showAboutSection">
                <li class="text--white">om oss</li>
                <li class="text--white">kontakt</li>
              </ul>
            </li>
            <li
              @mouseover="showOtherServices = true"
              @mouseleave="showOtherServices = false"
            >
              Övriga tjänster
              <!-- <v-icon>keyboard_arrow_down</v-icon> -->

              <!-- <ul v-if="showOtherServices">
                <li class="text--white">lorem</li>
                <li class="text--white">lorem</li>
                <li class="text--white">lorem</li>
              </ul> -->
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
      this.$router.push("/analyskatalog/enskiltdricksvatten");
    },

    moveToAnalysKatalog() {
      this.$router.push("/analyskatalog");
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
    moveToLab() {
      this.$router.push("/omlab");
    },
    movteToBygglov() {
      this.$router.push("/bygglov_tillstand");
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
  position: absolute;
  right: 10px;
  top: 60px;
  min-height: 100px;
  min-width: 100px;
  border-top: 5px solid blue;
  background-color: rgb(27, 77, 92);
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
.position-shoppingcart {
  position: absolute;
  z-index: 3;
  top: 40px;
  right: 25px;
  background-color: none;
  background-color: rgba(0, 0, 0, 0.4);
  min-height: 5vh;
}

.search-dropdown {
  position: absolute;
  margin-top: -100px;
  z-index: 10;
  background-color: rgb(206, 213, 224);
}
</style>