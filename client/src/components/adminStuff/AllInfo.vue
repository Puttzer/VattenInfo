<template>
  <v-main class="ma-0 pa-0">
    <v-row class="d-flex justify-center">
      <v-col cols="4">
        <v-card
          height="300px"
          class="blue lighten-1 d-flex justify-center align-center flex-column"
        >
          <h1>Tests Info</h1>
          <p>Total Tests: {{ this.tests.tests.length }}</p>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card
          height="300px"
          class="blue lighten-3 d-flex justify-center align-center flex-column"
        >
          <h1>Order Infomation</h1>
          <p>Total orders: {{ this.order.orders.length }}</p>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-center">
      <v-col cols="4">
        <v-card
          height="300px"
          class="blue lighten-3 d-flex justify-center align-center flex-column"
        >
          <h1>Private Users</h1>
          <p>Total Private Users: {{ this.user.users.length }}</p>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card
          height="300px"
          class="blue lighten-1 d-flex justify-center align-center flex-column"
        >
          <h1>Company Users</h1>
          <p>Total Company Users: {{ this.company.companys.length }}</p>
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