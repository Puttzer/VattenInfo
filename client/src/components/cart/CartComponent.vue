<template>
  <div class="d-flex flex-row justify-center align-center testCase">
    <div
      @click="showCartComponent"
      class="d-flex flex-row justify-center align-center testCase"
    >
      <v-icon class="ma-1 pa-2" size="42" color="blue">shopping_basket</v-icon>
      <p
        class="countClass white--text ml-n6 d-flex justify-center align-center blue"
      >
        {{ this.tests.count }}
      </p>
    </div>
    <v-row>
      <!-- <ShowShoppingCart
        v-if="this.tests.showSelectedTests === true"
        class="user-window"
      /> -->
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import ShowShoppingCart from "./ShowShoppingCart.vue";
export default {
  name: "CartComponent",
  data() {
    return {};
  },
  components: {
    // ShowShoppingCart,
  },
  computed: {
    ...mapState(["tests"]),
  },
  methods: {
    showCartComponent() {
      console.log("show cart component");
      this.$store.commit("tests/SHOW_CART_COMPONENT");
    },
  },
};
</script>

<style scoped>
.countClass {
  z-index: 2;
  border-radius: 99rem;
  width: 25px;
  height: 25px;
  /* border: 1px solid red; */
  border: 5px solid blue;
  /* position: absolute; */
}
.user-window {
  position: fixed;
  top: 30px;
}

.testCase {
  /* position: relative; */
}
</style>