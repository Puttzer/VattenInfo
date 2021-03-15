<template>
  <div class="privateContainer">
    <h1 class="mt-2 white--text">User Account</h1>
    <h3 class="mt-4 white--text">order information</h3>
    <private-user class="mt-4" />
  </div>
</template>

<script>
import PrivateUser from "../components/privateperson/PrivateUser.vue";
export default {
  name: "PrivateAccount",
  components: {
    PrivateUser,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.privateContainer {
  height: 1000px;
  width: 90%;
  padding: 20px;
  margin-left: 100px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
}
</style>