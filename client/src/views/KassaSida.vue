<template>
  <div class="d-flex flex-column">
    <v-row class="d-flex">
      <v-col class="d-flex justify-center ml" cols="6">
        <h1>Varukorg</h1>
      </v-col>
    </v-row>
    <v-row
      v-for="(selectedTest, index) in this.tests.selectedTests"
      :key="selectedTest._id"
      :index="index"
      class="my-1 mx-8"
      cols="12"
    >
      <v-col class="d-flex justify-center grey lighten-1 pa-0 mx-1 my-1">
        <v-list
          class="d-flex justify-space-around pa-0 ma-0 flex-row"
          cols="12"
        >
          <div class="d-flex flex-column">
            <v-img
              cols="2"
              class="pink"
              :src="selectedTest.image"
              width="150px"
              height="150px"
            ></v-img>

            <div class="d-flex testDetails flex-column">
              <p class="price grey--text font-weight-light mb-3">
                {{ selectedTest.price }} kr
              </p>
              <p class="mb-0 font-weight-light">
                {{ selectedTest.testname }}
              </p>
              <p class="mb-0 font-weight-light">{{ selectedTest.testtype }}</p>
              <p>{{ selectedTest.category }}</p>
            </div>
          </div>

          <div cols="4" lass="d-flex  flex-column">
            <div class="justify-text desc d-flex flex-column">
              <p class="text-justify my-2 py-3 mx-2 px-3">
                {{ selectedTest.description }}
              </p>
            </div>
          </div>

          <v-icon
            @click="deleteTestInCart(selectTest._id)"
            class="d-flex grey lighten-5 justify-center"
            size="42px"
            color="red"
            cols="2"
            >delete</v-icon
          >
        </v-list>
      </v-col>
      <!-- <v-divider></v-divider> -->
    </v-row>

    <v-col
      cols="12"
      class="mt-1 totalPrice d-flex flex-row justify-space-around align-right"
    >
      <div class="">Summa : {{ this.tests.totalAmount }} kr</div>

      <div
        class="payButton d-flex flex-row justify-center align-center btnColor white--text"
        @click="generateOrder()"
      >
        Bekräffta beställning
      </div>
    </v-col>
    <!-- 
    {{ this.tests.selectedTests }}
    {{ this.tests.totalAmount }} -->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "KassaSidan",
  computed: {
    ...mapState(["tests", "order"]),
  },
  methods: {
    async generateOrder() {
      const orderTests = this.tests.selectedTests;
      const orderAmount = this.tests.totalAmount;
      const payload = {
        orderTests: orderTests,
        orderAmount: orderAmount,
      };
      console.log("generating the order");
      await this.$store.dispatch("order/generateOrder", payload);
      this.$store.commit("tests/DELETE_SELECTED_TESTS");
      this.$router.push("/ordernumber");
      //   if (this.order.orderGenerated) {
      //     console.log("move to mutations");
      //   }
      //   setTimeout(function () {}, 2000);
    },
  },
  mounted: {
    deleteTestInCart(id) {
      console.log(id, " move to mutaions");
      this.$store.commit("tests/DELETE_TEST_CART", id);
    },
  },
};
</script>

<style scoped>
.payButton {
  height: 60px;
  width: 550px;
  border-radius: 4px;
  font-size: 24px;
}

.price {
  font-size: 24px;
  font-weight: bold;
}

.testDetails {
  font-size: 12px;
  color: #bdbdbd;
}

.totalPrice {
  font-size: 34px;
}

</style>