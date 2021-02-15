<template>
  <div d-flex align="center" class="logoutflex">
    <p>
      <span class="orange--text font-weight-bold mr-2"> {{ user.name }}</span>
    </p>
    <cart-component />
    <v-icon @click="change_status" class="mr-8" color="white" large
      >logout</v-icon
    >
  </div>
</template>

<script>
import CartComponent from "../cart/CartComponent.vue";
export default {
  name: "LogOut",
  props: ["showLogout"],
  components: {
    CartComponent,
  },
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