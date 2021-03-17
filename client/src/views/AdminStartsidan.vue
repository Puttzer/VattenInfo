<template>
<div class="admin-container">
    <v-navigation-drawer app v-model="drawer">
      <v-list dense>
        <v-list-item link to="/admin/products">
          <v-list-item-content>
            <v-list-item-title>Tester</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/admin/private">
          <v-list-item-content>
            <v-list-item-title>Privatkund</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/admin/comapny">
          <v-list-item-content>
            <v-list-item-title>Företagskund</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/admin/orders">
          <v-list-item-content>
            <v-list-item-title>Beställningar</v-list-item-title>
            <v-list>
              <v-list-item link to="">
                <v-list-item-content>
                  <v-list-item-title>Privat</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item link to="">
                <v-list-item-content>
                  <v-list-item-title>Företag</v-list-item-title>
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
	<v-main>
		hej
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