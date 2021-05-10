<template>
  <v-main class="someOtherName d-flex justify-center">
    <v-row
      class="ml-2 d-flex flex-row justify-space-around align-center"
      @click="moveToCompanyPage"
    >
      <v-icon medium class="mx-1" color="white">account_box</v-icon>
      <p>Mina Sidor</p>
    </v-row>
    <v-divider></v-divider>
    <v-row
      class="ml-2 d-flex flex-row justify-space-around align-center"
      @click="moveToCompanyOrder"
    >
      <v-icon medium class="mx-1" color="white">payments</v-icon>
      <p>Mina Beställningar</p>
    </v-row>
    <v-divider></v-divider>

    <v-row
      class="ml-2 d-flex flex-row justify-space-around align-center"
      @click="moveToCompanyLogout"
    >
      <v-icon medium class="mx-1" color="white">logout</v-icon>
      <p>Logga Ut</p>
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
    moveToCompanyPage() {
      if (this.company.companyUserIsloggedIn) {
        this.$router.push("/login/companyinfopage");
      } else {
        return;
      }
    },
    moveToCompanyOrder() {
      if (this.company.companyserIsloggedIn) {
        this.$router.push("/login/comapnyorderspage");
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
  },
};
</script>

<style scoped>
.someOtherName {
  width: 15vw;
  height: 18vh;
  border-top: 5px solid blue;
  background-color: rgb(21, 57, 68);
  /* overflow: visible; */
  color: white;
}
</style>