<template>
  <!-- <div class="d-flex flex-column pa-2">
    <div class="d-flex justify-center ma-2">
      <v-icon medium class="ml-2" color="white">account_box</v-icon>
      <p class="pa-0 ma-0">Mina Sidor</p>
    </div>
    <div class="d-flex flex-row justify-center align-center ma-2">
      <v-icon medium class="ml-2" color="white">logout</v-icon>
      <p class="pa-0 ma-0">Mina Beställningar</p>
    </div>
    <div class="d-flex justify-center ma-2">
      <v-icon medium class="ml-2" color="white">logout</v-icon>
      <p class="pa-0 ma-0">Logga Ut</p>
    </div>
  </div> -->
  <v-main class="someOtherName d-flex justify-center">
    <v-row>
      <v-col class="d-flex flex-row-reverse mr-8">
        <v-icon
          @click="closeCompanyProfileOptions"
          large
          color="black"
          class="listItem"
          >close</v-icon
        >
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row
      class="ml-2 d-flex flex-row justify-space-around align-center"
      @click.prevent="moveToCompanyPage"
    >
      <v-col cols="3">
        <v-icon medium class="mx-1" color="white">account_box</v-icon>
      </v-col>
      <v-col cols="9" class="listItem">
        <p>Mina Sidor</p>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row
      class="ml-2 d-flex flex-row justify-space-around align-center"
      @click.prevent="moveToCompanyOrder"
    >
      <v-col cols="3">
        <v-icon medium class="mx-1" color="white">payments</v-icon>
      </v-col>
      <v-col cols="9" class="listItem">
        <p>Mina Beställningar</p>
      </v-col>
    </v-row>
    <v-divider></v-divider>

    <v-row
      class="ml-2 d-flex flex-row justify-space-around align-center"
      @click.prevent="moveToCompanyLogout"
    >
      <v-col cols="3">
        <v-icon medium class="mx-1" color="white">logout</v-icon>
      </v-col>
      <v-col cols="9" class="listItem">
        <p>Logga Ut</p>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "UserDropDown",
  data() {
    return {};
  },
  computed: {
    ...mapState(["company"]),
  },
  methods: {
    async moveToCompanyPage() {
      if (this.company.companyUserIsloggedIn) {
        const payload = this.company.companyUser._id;
        // console.log("move to actions");
        await this.$store.dispatch("company/getCompanyInfo", payload);
        this.$router.push("/login/companyinfopage");
      } else {
        return;
      }
    },
    async moveToCompanyOrder() {
      console.log("move to page");
      if (this.company.companyUserIsloggedIn) {
        const companyId = this.company.companyUser._id;
        await this.$store.dispatch("order/getCompanyOrders", companyId);
        this.$router.push("/login/companyorderspage");
      } else {
        return;
      }
    },
    moveToCompanyLogout() {
      console.log("logout");
      this.$store.commit("company/COMPANY_LOGOUT");
      localStorage.removeItem("companyProfileToken");
      if (!this.company.companyUserIsloggedIn) {
        this.$router.push("/");
      }
    },
    closeCompanyProfileOptions() {
      this.$store.commit("company/COMPANY_DROP_DOWN_CHANGE", false);
    },
  },
};
</script>

<style scoped>
.someOtherName {
  width: 20vw;
  /* height: 18vh; */
  height: 100vh;

  border-top: 5px solid #000;
  /* background-color: rgb(21, 57, 68); */

  /* overflow: visible; */
  color: white;
}

.listItem:hover {
  /* text-decoration: underline wavy; */
  /* font-weight: normal; */
  cursor: pointer;
  color: rgb(12, 1, 12);
  zoom: 120%;
}
</style>