<template>
  <div class="shopping-container">
    <v-row class="pa-0 ma-0">
      <v-col cols="12" class="containercart yellow d-flex justify-space-between flex-row">
        <p class="title blue-grey--text lighten-3">Varukorg</p>
        <v-btn @click="closeCartComponent" text class="closeModal">
          <v-icon color="black">close</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="ma-0 pa-0">
      <v-col
        v-for="(selectTest, index) in this.tests.selectedTests"
        :key="selectTest._id"
        :index="index"
        cols="12"
        class="pa-0 ma-1"
      >
        <v-list class="d-flex justify-space-around flex-row">
          <img :src="selectTest.image" width="65px" height="65px" />
          <h2 class="blue-grey--text lighten-3">{{ selectTest.testname }}</h2>
          <div>
            <h3>{{ selectTest.price }} KR</h3>
          </div>
          <v-icon large color="red">delete</v-icon>
        </v-list>
        <v-divider></v-divider>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <h3 class="pl-4">Totalpris :</h3>
      </v-col>
    </v-row>
    <v-row >
      <v-col cols="12">
        <div
          @click="moveToKassaSida"
          class="btnColor shopme d-flex  align-center justify-center white--text"
        >Ga till kassa</div>
      </v-col>
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
    ...mapState(["tests"])
  },
  methods: {
    closeCartComponent() {
      this.$store.commit("tests/CLOSE_CART_COMPONENT");
    },
    moveToKassaSida() {
      this.$router.push("/kassasida");
    }
  }
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

.containercart {
  height: 10vh;
}

.shopme {
  border: 4px;
  height: 10vh;
}

.shopme:hover{
	box-shadow: 2px 2px 10px #010;
}
</style>