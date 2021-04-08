<template>
  <v-content>
    <v-flex>
      <v-row class="justify-center mt-12">
        <h1>Tester till vatten</h1>
      </v-row>

      <v-row class="d-flex justify-center packet-height">
        <v-card
          v-for="(test, index) in this.tests.tests"
          :key="index"
          width="250px"
          height="300px"
          class="ma-4"
        >
          <v-list class="d-flex flex-column justify-center" id="testList">
            <v-img
              id="testImage"
              :src="`http://localhost:4000/${test.image}`"
              height="150px"
              width="300px"
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
    </v-flex>
  </v-content>
</template>

<script>
import { mapState } from "vuex";
// import TestExpansion from "../components/testpages/TestExpansion.vue";
export default {
  name: "BestallSidan",
  components: {
    // TestExpansion,
  },
  mounted() {
    this.$store.dispatch("tests/getTests");
  },
  computed: {
    ...mapState(["tests"]),
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
.packet-height {
  min-height: 400px;
}
</style>