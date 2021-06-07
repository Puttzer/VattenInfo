<template>
  <v-main class="mt-6 d-flex justify-center ma-16">
    <v-row class="d-flex justify-center ma-4">
      <v-col cols="8" class="d-flex justify-center">
        <h2 class="heading-2">Payment Sucessfull</h2>
      </v-col>
    </v-row>
    {{ this.stripe.responseData }}

    <v-row class="d-flex justify-center">
      <v-col cols="6" class="d-flex justify-center blue lighten-5">
        <h1>ordered products</h1>
      </v-col>
      <v-col
        cols="6"
        class="d-flex justify-center flex-column align-center teal lighten-3"
      >
        <v-row>
          <v-col>
            <h1>order information</h1>

            <p>order details</p>
            <h3>order Nr 1</h3>
            <p>order amount</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <h1>order information</h1>

            <p>order details</p>
            <h3>order Nr 2</h3>
            <p>order amount</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <h1>order information</h1>

            <p>order details</p>
            <h3>order Nr 3</h3>
            <p>order amount</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "PaymentSucess",
  computed: {
    ...mapState(["user", "order", "company", "tests", "stripe"]),
    // convertJsonData() {
    //   console.log(JSON.parse(this.stripe.responseData));
    //   return JSON.parse(this.stripe.responseData);
    // },
  },
  async mounted() {
    const routePath = window.location.href;
    console.log("path of the Rote", routePath);
    await this.$store.dispatch("stripe/getOrderInfo");
    // const orderTests = this.tests.selectedTests;
    // const totalAmount = this.tests.totalAmount;
    // const id = this.user.userIsloggedIn
    //   ? this.user.user._id
    //   : this.company.companyUser._id;
    // const payload = {
    //   orderTests: orderTests,
    //   totalAmount: totalAmount,
    //   id: id,
    // };
    // console.log(payload);
    // await this.$store.dispatch("order/generateOrder", payload);
  },
};
</script>

<style>
</style>