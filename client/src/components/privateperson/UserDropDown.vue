<template>
  <v-main class="someOtherName d-flex justify-center">
    <v-row
      class="ml-2 d-flex flex-row justify-space-around align-center"
      @click="moveToUserPage"
    >
      <v-icon medium class="mx-1" color="white">account_box</v-icon>
      <p>Mina Sidor</p>
    </v-row>
    <v-divider></v-divider>
    <v-row
      class="ml-2 d-flex flex-row justify-space-around align-center"
      @click="moveToUserOrder"
    >
      <v-icon medium class="mx-1" color="white">payments</v-icon>
      <p>Mina Beställningar</p>
    </v-row>
    <v-divider></v-divider>

    <v-row
      class="ml-2 d-flex flex-row justify-space-around align-center"
      @click="moveToLogout"
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
    ...mapState(["user"]),
  },
  methods: {
    moveToUserPage() {
      if (this.user.userIsloggedIn) {
        this.$router.push("/login/userpage");
      } else {
        return;
      }
    },
    moveToUserOrder() {
      if (this.user.userIsloggedIn) {
        this.$router.push("/login/user");
      } else {
        return;
      }
    },
    moveToLogout() {
      console.log("logout");
      this.$store.commit("user/USER_LOGOUT");
      localStorage.removeItem("userToken");
      if (!this.user.userIsloggedIn) {
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