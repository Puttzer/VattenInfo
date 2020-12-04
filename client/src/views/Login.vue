<template>
  <div class="container">
    <div class="login">
      <div class="login-box">
        <h1>Logga In!</h1>
        <form>
          <label for="email">Email</label>
          <input
            type="text"
            id="email"
            v-model="email"
            placeholder="me@example.com"
            autocomplete="off"
          />

          <label for="password">Password</label>&nbsp;
          <div class="inputtag">
            <input :type="passwordType" id="password" v-model="password" />
            <i
              class="fas"
              :class="[passwordIcon]"
              @click="hidePassword = !hidePassword"
            ></i>
          </div>

          <!-- <input :type="passwordType" id="password" v-model="password" /> -->
        </form>
        <v-switch
          v-model="autoUpdate"
          :disabled="isUpdating"
          class="mt-0"
          color="blue lighten-2"
          hide-details
          label="KOm Ihåg"
        ></v-switch>
      </div>
      <button class="login-btn">logga in</button>
    </div>
    <button class="change-lang">Svenska</button>

    <transition name="drop" type="animation"> </transition>
  </div>
</template>


<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      hidePassword: true,
      rememberTheName: false,
    };
  },
  computed: {
    passwordType() {
      return this.hidePassword ? "password" : "text";
    },
    passwordIcon() {
      return this.hidePassword ? "fa-eye" : "fa-eye-slash";
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: black; */
  height: 100vh;
  width: 100vw;
}

.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;
  height: 100vh;
  width: 100wv;
}
.login-box {
  height: 364px;
  width: 304px;
  /* background: #00000075; */
  background: #00990075;

  border-radius: 15px;
  border: none;
  color: #fff;
  /* border: solid 2px orangered; */
}

input {
  border: #1565c0 2px solid;
  height: 54px;
  width: 261px;
  background: none;
  color: #fff;
}



label {
  background: #1565c0;
  color: #fff;
  padding: 0 20px;
  font-size: 16px;
  border-radius: 5px 5px 0 0;
  margin-top: 50px;
  display: inline;
  float: left;
}

.remember-label {
  color: #fff;
  font-size: 12px;
}

.remember-me {
  height: 32px;
  width: 32px;
}
.login-btn {
  height: 36px;
  width: 97px;
  background: #1565c0;
  border-radius: 15px;
  border: none;
  color: #fff;
  /* background: #00000075; */
}

.change-lang {
  width: 186px;
  height: 36px;
  border-radius: 25px;
  background: #898989;
  margin-top: 55px;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-away {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>