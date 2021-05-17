<template>
  <div class="shopping-container background">
    <v-row class="ma-0 pa-0 mt-n4">
      <v-col class="d-flex justify-center align-end ma-0 pa-0">
        <div class="arrow-up"></div>
      </v-col>
    </v-row>
    <v-row class="pa-0 ma-0">
      <v-col
        cols="12"
        class="containercart yellow d-flex justify-space-between flex-row"
      >
        <p class="title blue-grey--text lighten-3">Varukorg</p>
        <v-btn @click="closeCartComponent" text class="closeModal">
          <v-icon color="black">close</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="ma-0 pa-0 d-flex justify-center">
      <v-col
        v-for="(selectTest, index) in this.tests.selectedTests"
        :key="selectTest._id"
        :index="index"
        cols="12"
        class="pa-0 ma-1"
      >
        <v-list class="d-flex justify-space-around flex-row align-center">
          <img
            :src="`http://localhost:4000/${selectTest.image}`"
            width="65px"
            height="65px"
          />

          <h2 class="blue-grey--text lighten-3">{{ selectTest.testname }}</h2>
          <div class="d-flex flex-row align-center justify-center">
            <h3>{{ selectTest.price }} KR</h3>
          </div>
          <div class="d-flex flex-row align-center justify-center">
            <v-icon
              medium
              color="blue"
              @click="decreaseQuantity(selectTest._id)"
              >remove_circle</v-icon
            >
            <p class="mx-2">{{ selectTest.quantity }}</p>

            <v-icon
              medium
              color="blue"
              @click="increaseQuantity(selectTest._id)"
              >add_circle</v-icon
            >
          </div>
          <v-icon large color="red" @click="deleteTestInCart(selectTest._id)"
            >delete</v-icon
          >
        </v-list>
        <v-divider></v-divider>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <h3 class="pl-4">Totalpris :{{ this.totalPrice }} KR</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div
          @click="moveToKassaSida"
          class="btnColor shopme d-flex align-center justify-center white--text"
        >
          Gå till kassan
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ShowShoppingCart",
  data() {
    return {
      quantity: 0,
    };
  },
  computed: {
    ...mapState(["tests"]),
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
  mounted() {},
  methods: {
    closeCartComponent() {
      this.$store.commit("tests/CLOSE_CART_COMPONENT");
    },
    moveToKassaSida() {
      this.$store.commit("tests/CLOSE_CART_COMPONENT");
      console.log(this.tests.selectedTests.length);
      if (this.tests.selectedTests.length > 0) {
        this.$router.push("/kassa");
      } else {
        return;
      }
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
    async deleteTestInCart(id) {
      //   console.log(id, " move to mutaions");
      await this.$store.commit("tests/DELETE_TEST_CART", id);
      //   console.log(this.tests.selectedTests.length);

      //   checking the condition to display the dropdown window or NOT?

      if (this.tests.selectedTests.length < 1) {
        this.$store.commit("tests/CLOSE_CART_COMPONENT");
      }
    },
  },
};
</script>

<style scoped>
.shopping-container {
  min-height: 15vh;
  width: 30vw;
  margin: 0 auto;
  margin-top: 40px;
  box-shadow: 2px 2px 2px 2px rgb(107, 95, 95);
}

.closeModal {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.closeModal:hover,
.closeModal:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
.colorStatus {
  background-color: #12669c;
}

.containercart {
  height: 10vh;
}

.shopme {
  border: 4px;
  height: 10vh;
}

.shopme:hover {
  box-shadow: 2px 2px 10px #010;
}
.arrow-up {
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;

  border-bottom: 15px solid #f7db68;
}
</style>