<template>
  <div class="d-flex flex-row justify-center align-center testCase">
    <v-icon class="ma-1 pa-2" size="48" color="blue">shopping_basket</v-icon>
    <p
      class="countClass white--text ml-n6 d-flex justify-center align-center blue"
    >
      {{ this.count }}
    </p>
  </div>
</template>

<script>
export default {
  name: "CartComponent",
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style scoped>
.countClass {
  z-index: 999;
  border-radius: 99rem;
  width: 25px;
  height: 25px;
  /* border: 1px solid red; */
  border: 5px solid blue;
  /* position: absolute; */
}

.testCase {
  /* position: relative; */
}
</style>