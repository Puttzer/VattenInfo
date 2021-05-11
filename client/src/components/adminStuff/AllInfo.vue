<template>
  <v-main>
    <v-row class="d-flex justify-center">
      <v-col cols="4">
        <v-card height="300px">
          <h1>Tests Info</h1>
          <p>total Tests: {{ this.tests.tests.length }}</p>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card height="300px">
          <h1>Order Infomation</h1>
          <p>total orders: {{ this.order.orders.length }}</p>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-center">
      <v-col cols="4">
        <v-card height="300px">
          <h1>Private Users</h1>
          <p>total Private Users: {{ this.user.users.length }}</p>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card height="300px">
          <h1>Company Users</h1>
          <p>total Company Users: {{ this.company.companys.length }}</p>
        </v-card>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AllInfo",
  computed: {
    ...mapState(["tests", "order", "user", "admin", "company"]),
  },
};
</script>

<style>
</style>