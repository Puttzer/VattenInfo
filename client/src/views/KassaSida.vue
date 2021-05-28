<template>
  <v-main class="">
    <div class="d-flex flex-row">
      <v-col cols="6" class="">
        <v-col
          v-for="(selectedTest, index) in this.tests.selectedTests"
          :key="selectedTest._id"
          :index="index"
          class="product-card white my-1 d-flex flex-row"
          cols="12"
        >
          <v-img
            max-height="100"
            max-width="100"
            class="product-image"
            :src="`http://localhost:4000/${selectedTest.image}`"
          ></v-img>

          <v-col cols="8" class="d-flex flex-column">
            <div class="d-flex justify-center mb-2">
              {{ selectedTest.testname }}
            </div>
            <div class="d-flex flex-row align-center justify-center">
              <v-icon
                medium
                color="blue"
                @click="decreaseQuantity(selectedTest._id)"
                >remove_circle</v-icon
              >
              <p class="quantity my-0 quantity-box px-3">
                {{ selectedTest.quantity }}
              </p>
              <v-icon
                medium
                color="blue"
                @click="increaseQuantity(selectedTest._id)"
                >add_circle</v-icon
              >
            </div>
            <div class="d-flex justify-center mt-2">
              {{ selectedTest.price }} kr
            </div>
          </v-col>
          <v-col cols="2" class="d-flex justify-end align-start">
            <div
              @click="deleteTestInCart(selectedTest._id)"
              class="del-me d-flex justify-center align-center"
            >
              X
            </div>
          </v-col>
        </v-col>
        <!-- testcatd ends here -->
      </v-col>
      <v-col cols="6" class="d-flex justify-center">
        <v-col class="d-flex" cols="12" sm="6">
          <!-- <v-select
            :items="houseType"
            label="Outlined style"
            dense
            outlined
          ></v-select> -->
          <form action="">
            <v-row class="ma-0 pa-0">
              <v-col class="pa-0 mb-0" cols="12" md="12" sm="12">
                <div :class="{ 'valid--error': $v.name.$error }"></div>
                <div class="bajs mb-5 pl-3">
                  <p class="red--text" v-if="!$v.name.minLength">
                    namnet är inte tillräckligt långt minst 5 bokstäver
                  </p>
                  <p class="red--text" v-if="!$v.name.required">ob</p>
                </div>
                <v-text-field
                  color="#051f38"
                  text
                  dense
                  class="mt-n3 sizeLabel"
                  v-model.trim="$v.name.$model"
                  @input="setName($event.target.value)"
                  append-icon="person"
                  label="Namn"
                  outlined
                  placeholder="Förnamn Efternamn"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row class="ma-0 pa-0" justify="center">
              <v-col class="pa-0 ma-0" cols="12" md="12" sm="12">
                <div :class="{ 'valid-error': $v.email.$error }"></div>
                <div class="bajs mb-5 pl-3">
                  <p class="red--text" v-if="!$v.email.email">
                    inte en gilltig mailadress
                  </p>
                  <p class="red--text" v-if="!$v.email.required">
                    obligatorisk
                  </p>
                </div>

                <v-text-field
                  color="#051f38"
                  text
                  dense
                  class="mt-n3"
                  append-icon="email"
                  v-model.trim="$v.email.$model"
                  label="Email"
                  outlined
                  placeholder="dinepst@mail.com"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="pa-0 ma-0" justify="center">
              <v-col class="pa-0 ma-0" cols="12" md="12" sm="6">
                <p class="red--text" v-if="!$v.adress.minLength">
                  not enough didgets
                </p>
                <p class="red--text" v-if="!$v.adress.required">
                  obligatoriskt
                </p>
                <v-text-field
                  dense
                  color="#051f38"
                  class="mt-n3 mr-3"
                  append-icon="place"
                  text
                  v-model.trim="$v.adress.$model"
                  label="Adress"
                  outlined
                  placeholder="Adress"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row class="pa-0 ma-0" justify="center ">
              <v-col class="pa-0 ma-0" cols="12" md="8" sm="6">
                <p class="red--text" v-if="!$v.city.required">obligatoriskt</p>
                <v-text-field
                  dense
                  class="mt-n3 mr=3"
                  append-icon="location_city"
                  color="#051f38"
                  text
                  v-model.trim="$v.city.$model"
                  label="Postort"
                  outlined
                  placeholder="Postort"
                ></v-text-field>
              </v-col>
              <v-col class="bajs pa-0 ma-0" cols="12" md="4" sm="6">
                <p
                  class="d-flex justify-center red--text"
                  v-if="!$v.postnr.required"
                >
                  obligatoriskt
                </p>
                <p
                  class="d-flex justify-center red--text"
                  v-if="!$v.postnr.numeric"
                >
                  maste vara siffror
                </p>
                <v-text-field
                  dense
                  class="mt-n3 ml-3"
                  color="#051f38"
                  text
                  v-model.trim="$v.postnr.$model"
                  label="Post nummer"
                  outlined
                  placeholder="19535"
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="d-flex justify-center">
                <v-col class=" d-flex flex-column justify-center">
                  <p class="d-flex justify-center">lägg till en adress</p>
                  <v-icon class=" d-flex justify-center">
                    add_circle
                  </v-icon>
                </v-col>
              </v-col>
            </v-row>
          </form>
        </v-col>
      </v-col>
    </div>
    <v-col cols="12" class="d-flex flex-row">
      <v-col cols="6"></v-col>
    </v-col>
    <v-col
      cols="12"
      class="mt-1 totalPrice d-flex flex-column justify-center align-center white"
    >
      <div class="d-flex flex-row justify-center">
        Summa : {{ this.totalPrice }} kr
      </div>

      <div
        class="payButton d-flex flex-row justify-center align-center btnColor white--text"
        @click="paymentGateway()"
      >
        Till betalning
      </div>
      <!-- <div
        class="payButton d-flex flex-row justify-center align-center btnColor white--text"
        @click="generateOrder()"
      >
        Bekräffta beställning
      </div> -->
    </v-col>
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
      brunntyp: ["Borrad", "Grävd", "Annan"],
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
  /* border-radius: 12px; */
}

.product-image {
  border-radius: 12.5px;
}
</style>