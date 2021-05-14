<template>
  <v-main class="mt-4">
    <v-row class="d-flex justify-ceneter">
      <v-col cols="12" class="d-flex justify-center">
        <h2 class="black--text">Order Information</h2>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="d-flex mx-16 mt-4">
      <v-col cols="10" class="mx-16">
        <private-user />
      </v-col>
    </v-row>
  </v-main>
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
  display: flex;
  flex-direction: column;
}
</style>