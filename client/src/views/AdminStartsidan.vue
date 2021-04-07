<template>
  <div class="admin-container">
    <v-navigation-drawer
      app
      v-model="drawer"
      class="d-flex flex-column align-content-space-between"
    >
      <div class="heightClass">
        <v-list>
          <v-list-item>
            <v-list-item-content @click.stop="moveToTests">
              <v-list-item-title>
                <v-icon medium color="blue">science</v-icon>
                Tester</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content @click.stop="moveToPrivateCustomers">
              <v-list-item-title>
                <v-icon medium color="blue">person</v-icon>
                Privatkund</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content @click.stop="moveToForetag">
              <v-list-item-title>
                <v-icon medium color="blue">business</v-icon>
                Företagskund</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <v-icon medium color="blue">payments</v-icon>
                Beställningar</v-list-item-title
              >
              <v-list>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Privat</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Företag</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <div class="d-flex flex-row align-center">
          <v-icon color="orange" x-large v-if="admin.isLoggedIn"
            >account_circle</v-icon
          >
          <div class="d-flex flex-coulmn">
            <p>Logged in as:</p>
            <h1 class="text--orange text">{{ admin.username }}</h1>
          </div>
        </div>
      </div>
    </v-navigation-drawer>
    <v-app-bar app color="dark" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <b text class="font-weight-bold">Admin Manager</b>
      </div>

      <v-spacer></v-spacer>
      <v-btn text @click.stop="logout()" v-if="admin.isLoggedIn">
        <span class="mr-2">Logout</span>
        <v-icon>logout</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main class="body-container">
      <router-view></router-view>
    </v-main>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      drawer: false,
    };
  },
  components: {},
  //   mounted() {
  //     this.$store.dispatch("tests/getTests");
  //   },

  computed: {
    ...mapState(["admin"]),
  },
  methods: {
    async logout() {
      console.log("logout");
      await this.$store.dispatch("admin/logout");
      this.$router.push("/login/admin");
      // if (!localStorage.token) {
      //   this.$router.push("/");
      // }
    },
    moveToTests() {
      this.$router.push("/adminpage/tests");
    },
    moveToPrivateCustomers() {
      this.$router.push("/adminpage/privatecustomer");
    },
    moveToForetag() {
      this.$router.push("/adminpage/foretagcustomer");
    },
  },
};
</script>

<style scoped>
.admin-container {
  height: auto;
}
.body-container {
  height: 100%;
}
.heightClass {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}
</style>