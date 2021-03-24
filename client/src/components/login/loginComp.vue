<template>
  <div>
    <v-main class="hejs">
      <v-row>
        <v-icon color="black" x-large @click="closeWindow()">close</v-icon>
        {{ this.showLoginComp }}
      </v-row>
      <v-row class="d-flex justify-center">
        <v-col cols="9">
          <div class="mb-12">
            <v-btn color="blue" text outlined>Privat</v-btn>
            <span class="mx-4 black--text">|</span>
            <v-btn color="green" outlined>Företag</v-btn>
          </div>
          <form>
            <v-text-field v-model="email" label="email" required></v-text-field>
            <v-text-field
              v-model="password"
              label="Lösenord"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              hint="At least 8 characters"
              counter
              @click:append="showPassword = !showPassword"
              required
            ></v-text-field>

            <v-btn class="mr-2" dark @click="moveToUserAccount">Logga In</v-btn>
            <v-btn @click="clearTheInputdata">Rensa</v-btn>
            <v-row class="mt-6">
              <div class="d-flex flex-column">
                <p class="red--text">Inget Konto?</p>
                <v-btn outlined plain>Registrera</v-btn>
              </div>
            </v-row>
          </form>
        </v-col>
      </v-row>
    </v-main>
  </div>
</template>


<script>
// import { mapState } from "vuex";
// import store from "../store";
export default {
  data() {
    return {
      email: "",
      password: "",
      showPassword: false,
    };
  },
  props: ["showLoginComp"],
  methods: {
    closeWindow() {
      const value = !this.showLoginComp;
      console.log("close loginwindow", value);
      this.$emit("closeWindow", value);
    },
    clearTheInputdata() {
      (this.email = ""), (this.password = "");
    },
    moveToUserAccount() {
      console.log("bvfekegj");
    },
  },
  //   computed: {
  // ...mapState(["user"]),
  //   },
  //   methods: {
  //     async moveToUserAccount() {
  //       const payload = {
  //         email: this.email,
  //         password: this.password,
  //       };
  //   console.log("move to actions");
  //   await store.dispatch("user/loginUser", payload);

  //       if (this.user.userIsloggedIn) {
  //         this.$router.push("/login/user");
  //       } else {
  //         return;
  //       }
  //     },
  //     clearTheInputdata() {
  //       (this.email = ""), (this.password = "");
  //     },
  //   },
};
</script>

<style scoped>
.hejs {
  min-height: 10vh;
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: darkgoldenrod;
}

.dontshow {
  display: none;
}
.placement {
  /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}
</style>