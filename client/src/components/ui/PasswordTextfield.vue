<template>
  <div class="container">
 <div id="form">
      <form>
        <label for="email">Email</label>
        <input type="text" id="email" v-model="email" placeholder="me@example.com" autocomplete="off">

        <label for="password">Password</label>&nbsp;
        <i class="fas" :class="[passwordIcon]" @click="hidePassword = !hidePassword"></i>
        <input :type="passwordType" id="password" v-model="password" placeholder="**********">
      </form>
  </div>
  </div>	
</template>

<script>
export default {
  name: "Passwordfield",
  data() {
    return {
      email: "",
      password: "",
      hidePassword: true,
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

<style>
</style>