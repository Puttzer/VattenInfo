<template>
  <div class="d-flex flex-column">
    <v-row class="d-flex">
      <v-col class="d-flex justify-center ml" cols="6">
        <h1>Varukorg</h1>
      </v-col>
    </v-row>

    <v-row class="d-flex">
      <v-col class="d-flex justify-center ml" cols="12">
        <h3 v-if="this.displayErrorMessage === true" class="red--text">
          User must login to procceed further!!!
        </h3>
        <h3 v-if="this.displayErrorMessageEmptycart === true" class="red--text">
          Cart must not be empty to procceed further!!!
        </h3>
      </v-col>
    </v-row>
    <v-row
      v-for="(selectedTest, index) in this.tests.selectedTests"
      :key="selectedTest._id"
      :index="index"
      class="my-1 mx-8"
      cols="12"
    >
      <v-col
        class="d-flex container justify-center grey lighten-1 pa-0 mx-1 my-1"
        cols="12"
      >
        <v-list
          class="d-flex justify-space-around pa-0 ma-0 flex-row"
          cols="12"
        >
          <div class="d-flex flex-column">
            <v-img
              cols="2"
              class="pink"
              :src="`http://localhost:4000/${selectedTest.image}`"
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
            <div class="d-flex flex-row align-center justify-center">
              <v-icon
                medium
                color="blue"
                @click="decreaseQuantity(selectedTest._id)"
                >remove_circle</v-icon
              >
              <p class="mx-2">{{ selectedTest.quantity }}</p>

              <v-icon
                medium
                color="blue"
                @click="increaseQuantity(selectedTest._id)"
                >add_circle</v-icon
              >
            </div>
          </div>

          <v-icon
            @click="deleteTestInCart(selectedTest._id)"
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
      <div class="">Summa : {{ this.totalPrice }} kr</div>

      <div
        class="payButton d-flex flex-row justify-center align-center btnColor white--text"
        @click="paymentGateway()"
      >
        Till betalning
      </div>

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
import Vue from "vue";
import { mapState } from "vuex";

export default {
  name: "KassaSidan",
  data() {
    return {
      displayErrorMessage: false,
      displayErrorMessageEmptycart: false,
    };
  },
  computed: {
    ...mapState(["tests", "order", "user", "company", "stripe"]),
    totalPrice() {
      let totalAmount = 0;
      this.tests.selectedTests.forEach((test) => {
        console.log(test.price);
        totalAmount = totalAmount + parseInt(test.price) * test.quantity;
      });
      console.log(totalAmount);
      this.$store.commit("tests/TOTAL_AMOUNT", totalAmount);
      return totalAmount;
    },
  },
  //   async created() {
  //     await this.$store.dispatch("stripe/getStripePublishableKey");
  //   },
  components: {},
  methods: {
    async generateOrder() {
      if (this.user.userIsloggedIn) {
        console.log(this.user.user._id);
        const id = this.user.user._id || this.company.companyUser._id;
        const orderTests = this.tests.selectedTests;
        const orderAmount = this.tests.totalAmount;
        const payload = {
          orderTests: orderTests,
          orderAmount: orderAmount,
          id: id,
        };
        console.log(payload);
        console.log("generating the order");
        await this.$store.dispatch("order/generateOrder", payload);
        this.$store.commit("tests/DELETE_SELECTED_TESTS");
        this.$router.push("/ordernumber");
      } else if (this.company.companyUserIsloggedIn) {
        console.log(this.company.companyUser._id);
        const id = this.company.companyUser._id;
        const orderTests = this.tests.selectedTests;
        const orderAmount = this.tests.totalAmount;
        const payload = {
          orderTests: orderTests,
          orderAmount: orderAmount,
          id: id,
        };
        console.log(payload);
        console.log("generating the order");
        await this.$store.dispatch("order/generateCompanyOrder", payload);
        this.$store.commit("tests/DELETE_SELECTED_TESTS");
        this.$router.push("/ordernumber");
      } else if (this.tests.selectedTests.length < 1) {
        this.displayErrorMessageEmptycart = true;
        Vue.$vToastify.error(
          "cart is empty must select a product to procced further"
        );
        return;
      } else {
        this.displayErrorMessage = true;
        Vue.$vToastify.error("User must able to login to procced further");
        this.$store.commit("user/OPEN_LOGIN_COMP");
        return;
      }
      //   if (this.order.orderGenerated) {
      //     console.log("move to mutations");
      //   }
      //   setTimeout(function () {}, 2000);
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
        this.$router.push("/bestallanalys");
      }
    },
    totalQuantity(id) {
      const testInfo = this.tests.selectedTests.find((test) => test._id === id);
      return testInfo;
    },
    deleteTestInCart(id) {
      console.log(id, " move to mutaions");
      this.$store.commit("tests/DELETE_TEST_CART", id);
      if (this.tests.selectedTests.length < 1) {
        this.$router.push("/bestallanalys");
      } else {
        return;
      }
    },
    paymentGateway() {
      const publishableKey = this.stripe.publishableKey;
      const orderTests = this.tests.selectedTests;
      const totalAmount = this.tests.totalAmount;
      const id = this.user.user._id || this.company.companyUser._id;
      const payload = {
        orderTests: orderTests,
        totalAmount: totalAmount,
        id: id,
      };

      console.log("payment gateway move to actions");
      this.$store.dispatch("stripe/stripeCheckOut", {
        payload,
        publishableKey,
      });
    },
  },
};
</script>

<style scoped>
.container {
  box-shadow: 2px 2px 5px #00000090;
}
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