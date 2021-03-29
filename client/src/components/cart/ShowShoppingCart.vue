<template>
  <div class="shopping-container">
    <v-row>
      <v-btn @click="closeCartComponent" text class="closeModal">
        <v-icon color="black">close</v-icon>
      </v-btn>
    </v-row>
    <v-row>
      <v-col cols="10">
        <v-list
          v-for="(selectTest, index) in this.tests.selectedTests"
          :key="selectTest._id"
          :index="index"
          class="d-flex flex-row"
        >
          <img src="selectTest.image" width="15px" height="15px" />
          <h5>{{ selectTest.testname }}</h5>
          <div>
            <h6>{{ selectTest.price }}</h6>
          </div>
          <v-icon>delete</v-icon>
        </v-list>
      </v-col>
    </v-row>
    <v-row>
      <p>Totalpris :</p>
    </v-row>
    <v-row>
      <v-btn class="btnColor white--text" @click="moveToKassaSida"
        >Ga till kassa</v-btn
      >
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ShowShoppingCart",
  data() {
    return {};
  },
  computed: {
    ...mapState(["tests"]),
  },
  methods: {
    closeCartComponent() {
      this.$store.commit("tests/CLOSE_CART_COMPONENT");
    },
    moveToKassaSida() {
      this.$router.push("/kassasida");
    },
  },
};
</script>

<style scoped>
.shopping-container {
  min-height: 10vh;
  width: 40vw;
  margin: 0 auto;
  margin-top: 50px;
  background: rgb(228, 227, 226);
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
</style>