
<template>
  <v-main class="menu d-flex justify-center">
    <v-row>
      <v-col class="d-flex flex-row-reverse mr-8">
        <v-icon @click="closeUseroptions" large color="black" class="listItem"
          >close</v-icon
        >
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row
      class="ml-2 d-flex flex-row justify-space-around align-center"
      @click="moveToUserPage"
    >
      <v-col cols="3">
        <v-icon medium class="mx-1" color="orange">account_box</v-icon>
      </v-col>
      <v-col cols="9" class="listItem">
        <p>Mina Sidor</p>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row
      class="ml-2 d-flex flex-row justify-space-around align-center"
      @click="moveToUserOrder"
    >
      <v-col cols="3">
        <v-icon medium class="mx-1" color="orange">payments</v-icon>
      </v-col>
      <v-col cols="9" class="listItem">
        <p>Mina Beställningar</p>
      </v-col>
    </v-row>
    <v-divider></v-divider>

    <v-row
      class="ml-2 d-flex flex-row justify-space-around align-center"
      @click="moveToLogout"
    >
      <v-col cols="3">
        <v-icon medium class="mx-1" color="orange">logout</v-icon>
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
    ...mapState(["user"]),
  },
  methods: {
    moveToUserPage() {
      if (this.user.userIsloggedIn) {
        this.$store.commit("user/USER_DROP_DOWN_CHANGE", false);
        this.$router.push("/login/userpage");
      } else {
        return;
      }
    },
    moveToUserOrder() {
      if (this.user.userIsloggedIn) {
        this.$store.commit("user/USER_DROP_DOWN_CHANGE", false);
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
    closeUseroptions() {
      this.$store.commit("user/USER_DROP_DOWN_CHANGE", false);
    },
  },
};
</script>

<style scoped>
.menu {
  position: absolute;
  width: 20vw;
  height: 100vh;
  font-weight: 600;
  font-size: 18px;

  /* background-color: #3e3e3e; */
  background-color: #f3f3f3;

  /* overflow: visible; */
  color: white;
}

.listItem:hover {
  /* text-decoration: underline wavy; */
  /* font-weight: normal; */
  cursor: pointer;
  color: rgb(12, 1, 12);
  /* zoom: 120%; */
}
</style>