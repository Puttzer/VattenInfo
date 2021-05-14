<template>
  <div class="d-flex flex-row align-center justify-center">
    <v-icon medium color="blue" @click="increaseQuantity(selectTest._id)"
      >add_circle</v-icon
    >
    <h1>hej</h1>
    <p>{{ selectTest.quantity }}</p>
    <v-icon medium color="blue" @click="decreaseQuantity(selectTest._id)"
      >remove_circle</v-icon
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: 0,
    };
  },
  increaseQuantity(id) {
    this.$store.commit("tests/INCREASE_QUANTITY", id);
  },
  decreaseQuantity(id) {
    this.$store.commit("tests/DECREASE_QUANTITY", id);
    console.log(this.totalQuantity(id));
    const testInformation = this.totalQuantity(id);
    if (testInformation.quantity < 1) {
      this.$store.commit("tests/DELETE_TEST_CART", id);
    }
    if (this.tests.selectedTests.length < 1) {
      this.$store.commit("tests/CLOSE_CART_COMPONENT");
    }
  },
  totalQuantity(id) {
    const testInfo = this.tests.selectedTests.find((test) => test._id === id);
    return testInfo;
  },
};
</script>

<style>
</style>