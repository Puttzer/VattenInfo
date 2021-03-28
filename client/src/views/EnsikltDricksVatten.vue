<template>
  <v-main class="container">
    <v-flex>
      <v-row>
        <div class="d-flex flex-row">
          <v-icon color="black">home</v-icon>
          <p>/ {{ this.$route.path }}</p>
        </div>
      </v-row>
      <v-row d-flex justify="center">
        <h1>Enskilt Dricks Vatten</h1>
      </v-row>
      <v-row class="d-flex justify-center font-weight-light blue--text mt-6">
        <h3>Analyser för dig med enskild brunn Introducerande text</h3>
      </v-row>
      <v-row class="d-flex justify-center packet-height">
        <v-card
          v-for="(test, index) in this.filterPaketTest"
          :key="index"
          width="250px"
          height="300px"
          class="ma-4"
        >
          <v-list class="d-flex flex-column justify-center" id="testList">
            <v-img
              id="testImage"
              :src="test.image"
              height="150px"
              width="150px"
              name="testimage"
            ></v-img>
            <v-divider></v-divider>
            <div class="ma-2">
              <h2 class="Heading-2" id="testName">
                Title : {{ test.testname }}
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
        <v-col cols="2" class="d-flex justify-center">
          <h3>bas</h3>
        </v-col>
        <v-col cols="2" class="d-flex justify-center">
          <h3>familj</h3>
        </v-col>
        <v-col cols="2" class="d-flex justify-center">
          <h3>stora</h3>
        </v-col>
        <v-col cols="2" class="d-flex justify-center">
          <h3>stora</h3>
        </v-col>
        <v-col cols="2" class="d-flex justify-center">
          <h3>stora</h3>
        </v-col>
        <v-col cols="2" class="d-flex justify-center">
          <h3>stora</h3>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row class="blue--text d-flex justify-center my-4">
        <h3>Individuell tester styckvis 2</h3>
      </v-row>
      <v-row>
        <v-col cols="2" class="d-flex justify-center">
          <h3>bas</h3>
        </v-col>
        <v-col cols="2" class="d-flex justify-center">
          <h3>familj</h3>
        </v-col>
        <v-col cols="2" class="d-flex justify-center">
          <h3>stora</h3>
        </v-col>
        <v-col cols="2" class="d-flex justify-center">
          <h3>stora</h3>
        </v-col>
        <v-col cols="2" class="d-flex justify-center">
          <h3>stora</h3>
        </v-col>
        <v-col cols="2" class="d-flex justify-center">
          <h3>stora</h3>
        </v-col>
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
  },
  methods: {
    moveToCart(id) {
      console.log("move to cart", id);
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