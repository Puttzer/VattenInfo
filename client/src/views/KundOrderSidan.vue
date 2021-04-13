<template>
  <v-main>
    <v-row>
      <v-col cols="6">
        <h2>Bestall Nummber</h2>
      </v-col>
    </v-row>
    <v-row>
      <h4>Order nummber : {{ this.order.orderNumber }}</h4>
    </v-row>
  </v-main>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "KundOrderSidan",
  data() {
    return {};
  },
  computed: {
    ...mapState(["order"]),
  },
};
</script>

<style>
</style>