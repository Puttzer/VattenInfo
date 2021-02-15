<template>
  <div class="d-flex flex-row justify-center align-center">
    <p class="mr-n6 d-flex justify-center align-center countClass">
      {{ this.count }}
    </p>
    <v-icon class="ma-1 pa-2" large color="grey">shopping_basket</v-icon>
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
  z-index: 2;
  background-color: rgb(151, 96, 44);
  border-radius: 50%;
  width: 25px;
  height: 25px;
}
</style>