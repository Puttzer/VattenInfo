<template>
  <v-main>
    <h1>payment Sucessfull</h1>
    {{ stripe.paymentId }}
  </v-main>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "PaymentSucess",
  computed: {
    ...mapState(["user", "order", "company", "tests", "stripe"]),
  },
  async mounted() {
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