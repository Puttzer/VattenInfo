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
                  <v-list-item-content
                    @click.stop="moveToPrivateCustomersOrders"
                  >
                    <v-list-item-title>Privat</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content @click.stop="moveToCompanyOrders">
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
      <div class="d-flex align-center" @click="moveToAdminPage">
        <b text class="font-weight-bold">Admin Manager</b>
      </div>

      <v-spacer></v-spacer>
      <v-btn text @click.stop="logout()" v-if="admin.isLoggedIn">
        <span class="mr-2">Logout</span>
        <v-icon>logout</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main class="body-container">
      <all-info v-if="this.showInformation === true" />
      <router-view></router-view>
    </v-main>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AllInfo from "../components/adminStuff/AllInfo.vue";

export default {
  data() {
    return {
      drawer: false,
      showInformation: true,
    };
  },
  components: {
    AllInfo,
  },
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
      this.showInformation = false;
    },
    moveToPrivateCustomers() {
      this.$router.push("/adminpage/privatecustomer");
      this.showInformation = false;
    },
    moveToForetag() {
      this.$router.push("/adminpage/foretagcustomer");
      this.showInformation = false;
    },
    moveToCompanyOrders() {
      this.$router.push("/adminpage/foretagorders");
      this.showInformation = false;
    },
    moveToPrivateCustomersOrders() {
      this.$router.push("/adminpage/privatecustomerorders");
      this.showInformation = false;
    },
    moveToAdminPage() {
      if (this.admin.isLoggedIn && this.admin.isAdmin) {
        this.$router.push("/adminpage/");
        this.showInformation = true;
      }
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