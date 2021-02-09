<template>
  <div d-flex align="center" class="logoutflex">
    <p>
      Logged in as :
      <span class="orange--text font-weight-bold mr-2"> {{ user.name }}</span>
    </p>
    <v-icon large color="white">shopping_basket</v-icon>
    <v-btn @click="change_status" class="ml-2">
      <v-icon medium>logout</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "LogOut",
  props: ["showLogout"],
  data() {
    return {
      user: {
        name: "krishna Mohan",
      },
    };
  },
  methods: {
    change_status() {
      this.$emit("changeStatus", this.showLogout);
    },
  },
};
</script>

<style scoped>
.logoutflex {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>