<template>
  <v-main class="green">
    <div class="d-flex flex-row">
      <v-col cols="6" class="deep-purple">
        <div class="product-card white mx-2">
          <v-col
            v-for="(selectedTest, index) in this.tests.selectedTests"
            :key="selectedTest._id"
            :index="index"
            class="d-flex flex-column align-center justify-center"
            cols="8"
          >
          </v-col>
        </div>
      </v-col>
      <v-col cols="6" class="amber">hej</v-col>
    </div>
  </v-main>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";
import {
  required,
  //   sameAs,
  email,
  //   alphaNum,
  numeric,
  minLength,
  //   maxLength,
} from "vuelidate/lib/validators";
export default {
  name: "KassaSidan",
  data() {
    return {
      displayErrorMessage: false,
      displayErrorMessageEmptycart: false,
      name: "",
      email: "",
      adress: "",
      city: "",
      postnr: "",
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(5),
    },
    email: {
      required,
      email,
    },
    adress: {
      required,
      minLength: minLength(2),
    },
    postnr: {
      required,
      numeric,
    },
    city: {},
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
  async created() {
    await this.$store.dispatch("stripe/getStripePublishableKey");
  },
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

      let reformatedTests = orderTests.map((test) => {
        const testData = {
          price_data: {
            currency: "sek",
            product_data: {
              name: "",
            },
            unit_amount: "",
          },
          quantity: "",
        };
        testData.price_data.unit_amount = test.price * 100;
        testData.quantity = test.quantity;
        testData.price_data.product_data.name = test.testname;
        return testData;
      });
      console.log(reformatedTests);
      const totalAmount = this.tests.totalAmount;
      const id = this.user.userIsloggedIn
        ? this.user.user._id
        : this.company.companyUser._id;
      const payload = {
        orderTests: reformatedTests,
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

.del-me {
  height: 25px;
  width: 25px;
  color: #424242;
  border-radius: 99rem;
  background: #e0e0e0;
}

.del-me:hover {
  background: tomato;
  color: #fff;
  cursor: pointer;
}

.quantity-box {
  border: 1px solid teal;
}

.product-image {
  width: 180px;
}

.more-info:hover {
  color: teal;
  text-decoration: underline solid 1px;
  cursor: pointer;
  font-weight: bold;
}
.payButton {
  height: 60px;
  width: 550px;
  border-radius: 24px;
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

.product-card {
  border-radius: 12px;
  color: tomato;
}
</style>