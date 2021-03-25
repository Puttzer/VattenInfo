<template>
  <div>
    <v-main class="login-container">
      <v-row class="d-flex justify-end ma-2">
        <v-icon class="closeModal" x-large @click="closeWindow()">close</v-icon>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-col cols="9">
          <div class="mb-12">
            <v-btn
              :class="{ colorStatus: isPrivateUser }"
              color="white"
              text
              outlined
              @click="switchButtonPrivate"
            >Privat</v-btn>
            <span class="mx-4 black--text">|</span>
            <v-btn
              text
              color="white"
              outlined
              @click="switchButtonCompany"
              :class="{ colorStatus: !isPrivateUser }"
            >Företag</v-btn>
          </div>
          <form>
            <v-text-field outlined border="blue" v-model="email" label="Email" required></v-text-field>
            <v-text-field
              outlined
              border="blue"
              v-model="password"
              label="Lösenord"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              hint="At least 8 characters"
              counter
              @click:append="showPassword = !showPassword"
              required
            ></v-text-field>

            <v-btn
              class="mr-2"
              dark
              @click="loginPrivateuser"
              v-show="showLoginUser === true"
            >Logga In</v-btn>
            <v-btn
              class="mr-2"
              dark
              @click="loginCompany"
              v-show="showLoginCompany === true"
            >Logga In</v-btn>
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
import { mapState } from "vuex";
import store from "../../store";

export default {
  data() {
    return {
      email: "",
      password: "",
      showPassword: false,
      showLoginUser: true,
      showLoginCompany: false,
      isPrivateUser: true
    };
  },
  props: ["showLoginComp"],
  computed: {
    ...mapState(["user"])
  },
  methods: {
    closeWindow() {
      this.$store.commit("user/CLOSE_WINDOW");
    },
    clearTheInputdata() {
      (this.email = ""), (this.password = "");
    },
    async loginPrivateuser() {
      const payload = {
        email: this.email,
        password: this.password
      };
      console.log("move to actions", payload);
      await store.dispatch("user/loginUser", payload);
      console.log(this.user.userIsloggedIn);
      if (this.user.userIsloggedIn) {
        this.$router.push("/login/user");
      } else {
        return;
      }
    },
    async loginCompany() {
      const payload = {
        email: this.email,
        password: this.password
      };
      console.log("move to actions company", payload);
      await store.dispatch("company/loginCompany", payload);

      if (this.company.companyUserIsloggedIn) {
        this.$router.push("/login/company");
      } else {
        return;
      }
    },
    switchButtonCompany() {
      (this.showLoginUser = false),
        (this.showLoginCompany = true),
        (this.isPrivateUser = false);
    },
    switchButtonPrivate() {
      (this.showLoginUser = true),
        (this.showLoginCompany = false),
        (this.isPrivateUser = true);
    }
  }
};
</script>

<style scoped>
.login-container {
  min-height: 10vh;
  width: 33vw;
  margin: 0 auto;
  margin-top: 50px;
  background: rgb(228, 227, 226);
  box-shadow: 2px 2px 2px 2px rgb(107, 95, 95);
}

.closeModal {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.closeModal:hover,
.closeModal:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
.colorStatus {
  background-color: #12669c;
}
</style>