<template>
  <v-content>
    <v-flex>
      <v-row class="justify-center mt-12">
        <h1>Vattentester</h1>
      </v-row>
      <v-row class="justify-start black">
        <div class="sortera ml-16 red">hata aik</div>
      </v-row>
      <v-row class="d-flex justify-center packet-height">
        <div
          v-for="(test, index) in this.tests.tests"
          :key="index"
          width="50px"
          height="300px"
          class="mainCard ma-4 mt-0 pa-0"
          color=""
        >
          <v-list class="d-flex flex-column justify-center pt-0" id="testList">
            <v-img
              id="testImage"
              :src="`http://localhost:4000/${test.image}`"
              height="150px"
              width="300px"
              name="testimage"
              class="ma-0 pt-0 align-start"
            ></v-img>
            <v-divider></v-divider>
            <div class="ma-2">
              <h2 class="Heading-2" id="testName">
                {{ test.testname }}
              </h2>
              <p id="testCategory">
                {{ test.category }}
              </p>
              <!-- <p id="testType">
                <strong>Test type : </strong>{{ test.testtype }}
              </p>

              <p id="testLong">Detailjer :{{ test.description }}</p> -->
              <p id="testPrice">Pris :{{ test.price }} SEK</p>
            </div>
            <div class="d-flex flex-row justify-center">
              <v-btn
                class="btnColor justify-center white--text ma-1"
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
        </div>
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

.mainCard {
  box-shadow: 2px 2px 5px #00000090;
}
</style>