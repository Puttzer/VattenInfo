<template>
  <div class="admin-container">
    <v-navigation-drawer app v-model="drawer">
      <v-list dense>
        <v-list-item link to="/admin/products">
          <v-list-item-content>
            <v-list-item-title>Products</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/admin/private">
          <v-list-item-content>
            <v-list-item-title>PrivatKunder</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/admin/comapny">
          <v-list-item-content>
            <v-list-item-title>Företagskunder</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/admin/orders">
          <v-list-item-content>
            <v-list-item-title>Beställningar</v-list-item-title>
            <v-list>
              <v-list-item link to="">
                <v-list-item-content>
                  <v-list-item-title>private</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item link to="">
                <v-list-item-content>
                  <v-list-item-title>company</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="dark" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <b text class="font-weight-bold"> Admin Manager </b>
      </div>

      <v-spacer></v-spacer>

      <v-btn text @click="logout()" v-if="admin.isLoggedIn">
        <span class="mr-2">Logout</span>
        <v-icon>logout</v-icon>
      </v-btn>
    </v-app-bar>
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
  },
};
</script>

<style scoped>
.admin-container {
  height: 960px;
  min-height: 90%;
}
</style>
