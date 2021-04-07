<template>
  <v-main class="container">
    <v-flex>
      <v-row> </v-row>
      <v-row d-flex justify="center">
        <h1>Enskilt dricksvatten</h1>
      </v-row>
      <v-row class="d-flex justify-center font-weight-light blue--text mt-6">
        <h3>Analyser för dig med enskild brunn</h3>
      </v-row>
      <v-row class="d-flex justify-center packet-height">
        <v-card
          v-for="(test, index) in this.filterPaketTest"
          :key="index"
          width="250px"
          height="300px"
          class="ma-4"
        >
          <v-list
            class="d-flex flex-column justify-center ma-0 pa-0"
            id="testList"
          >
            <v-img
              id="testImage"
              :src="`http://localhost:4000/${test.image}`"
              height="150px"
              width="300px"
              name="testimage"
              class="ma-0 pa-0"
            ></v-img>
            <v-divider></v-divider>
            <div class="ma-2">
              <h2 class="Heading-2" id="testName">
                {{ test.testname }}
              </h2>
              <p id="testCategory">
                <strong>Kategori : </strong> {{ test.category }}
              </p>
              <!-- <p id="testType">
                <strong>Test type : </strong>{{ test.testtype }}
              </p>

              <p id="testLong">Detailjer :{{ test.description }}</p> -->
              <p id="testPrice">Pris :{{ test.price }} SEK</p>
            </div>
            <div class="d-flex flex-row">
              <v-btn
                class="btnColor white--text ma-1"
                @click="moveToIndividual(test._id, test)"
                >Läs mer</v-btn
              >
              <v-btn
                class="btnColor white--text ma-1"
                @click="moveToCart(test._id)"
                >köp</v-btn
              >
            </div>
          </v-list>
        </v-card>
      </v-row>
      <v-divider></v-divider>
      <v-row class="blue--text d-flex justify-center my-4">
        <h3>Individuell tester styckvis 1</h3>
      </v-row>
      <v-row>
        <v-card
          v-for="(test, index) in this.filterIndividuelStyckvis1"
          :key="index"
          width="200px"
          height="200px"
          class="ma-4 amber darken-1"
        >
          <v-list
            class="d-flex flex-column justify-center amber darken-1"
            id="testList ma-0 pa-0"
          >
            <!-- <v-img
              id="testImage"
              :src="`http://localhost:4000/${test.image}`"
              height="150px"
              width="300px"
              name="testimage"
              class="ma-0 pa-0"
            ></v-img>
            <v-divider></v-divider> -->
            <div class="ma-2">
              <h2 class="Heading-2" id="testName">
                {{ test.testname }}
              </h2>
              <p id="testCategory">
                <strong>Kategori : </strong> {{ test.category }}
              </p>
              <!-- <p id="testType">
                <strong>Test type : </strong>{{ test.testtype }}
              </p>

              <p id="testLong">Detailjer :{{ test.description }}</p> -->
              <p id="testPrice">Pris :{{ test.price }} SEK</p>
            </div>
            <div class="d-flex justify-center">
              <!-- <v-btn
                class="btnColor white--text ma-1"
                @click="moveToIndividual(test._id, test)"
                >Läs mer</v-btn
              > -->
              <v-btn
                class="btnColor white--text ma-1"
                @click="moveToCart(test._id)"
                >köp</v-btn
              >
            </div>
          </v-list>
        </v-card>
      </v-row>
      <v-divider></v-divider>
      <v-row class="blue--text d-flex justify-center my-4">
        <h3>Individuell tester styckvis 2</h3>
      </v-row>
      <v-row>
        <v-card
          v-for="(test, index) in this.filterIndividuelStyckvis2"
          :key="index"
          width="200px"
          height="200px"
          class="ma-4 green darken-1"
        >
          <v-list
            class="d-flex flex-column justify-center green darken-1"
            id="testList ma-0 pa-0"
          >
            <!-- <v-img
              id="testImage"
              :src="`http://localhost:4000/${test.image}`"
              height="150px"
              width="300px"
              name="testimage"
              class="ma-0 pa-0"
            ></v-img>
            <v-divider></v-divider> -->
            <div class="ma-2 white--text">
              <h2 class="Heading-2" id="testName">
                {{ test.testname }}
              </h2>
              <p id="testCategory">
                <strong>Kategori : </strong> {{ test.category }}
              </p>
              <!-- <p id="testType">
                <strong>Test type : </strong>{{ test.testtype }}
              </p>

              <p id="testLong">Detailjer :{{ test.description }}</p> -->
              <p id="testPrice">Pris :{{ test.price }} SEK</p>
            </div>
            <div class="d-flex justify-center">
              <!-- <v-btn
                class="btnColor white--text ma-1"
                @click="moveToIndividual(test._id, test)"
                >Läs mer</v-btn
              > -->
              <v-btn
                class="btnColor white--text ma-1"
                @click="moveToCart(test._id)"
                >köp</v-btn
              >
            </div>
          </v-list>
        </v-card>
      </v-row>
    </v-flex>
  </v-main>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "EnsikltDricksVatten",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("tests/getTests");
    console.log(this.$root);
  },
  computed: {
    ...mapState(["tests"]),
    filterPaketTest() {
      return this.tests.tests.filter(
        (test) =>
          test.testtype === "Packet pris" &&
          test.category === "Enskilt dricksvatten"
      );
    },
    filterIndividuelStyckvis1() {
      return this.tests.tests.filter(
        (test) =>
          test.testtype === "Analyser Styckvis 1" &&
          test.category === "Enskilt dricksvatten"
      );
    },
    filterIndividuelStyckvis2() {
      return this.tests.tests.filter(
        (test) =>
          test.testtype === "Analyser styckvis 2" &&
          test.category === "Enskilt dricksvatten"
      );
    },
  },
  methods: {
    moveToCart(id) {
      console.log("move to cart", id);
      console.log(this);
    },
    moveToIndividual(id, test) {
      console.log(id);
      this.$router.push({
        name: "TestStartsidan",
        params: { id: id, test },
      });
    },
  },
};
</script>

<style scoped>
.container {
  width: 80vw;
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.packet-height {
  min-height: 400px;
}
p {
  margin: 0;
  padding: 0;
}
</style>