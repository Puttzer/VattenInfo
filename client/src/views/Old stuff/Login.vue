<template>
  <div class="container">
    <v-content>
      <v-row class="d-flex justify-center">
        <v-col cols="4">
          <h1>Admin Konto</h1>
          <form>
            <v-text-field v-model="userName" label="Användarnamm" required>
            </v-text-field>
            <v-text-field
              v-model="password"
              label="Lösenord"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              hint="At least 8 characters"
              counter
              @click:append="showPassword = !showPassword"
              required
            >
            </v-text-field>

            <v-btn class="mr-2" dark @click="moveToAdminAccount"
              >Logga In</v-btn
            >
            <v-btn @click="clearTheInputdata">Rensa</v-btn>
          </form>
        </v-col>
      </v-row>
    </v-content>
  </div>
</template>


<script>
import store from "../store";
export default {
  data() {
    return {
      userName: "",
      password: "",
      showPassword: false,
    };
  },
  computed: {},
  methods: {
    moveToAdminAccount() {
      store.dispatch("admin/login", {
        userName: this.userName,
        password: this.password,
      });
    },
    clearTheInputdata() {
      (this.userName = ""), (this.password = "");
    },
  },
};
</script>

<style scoped>
</style>