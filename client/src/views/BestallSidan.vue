<template>
  <v-main>
    <v-flex>
      <v-row class="justify-center mt-6">
        <h1>Vattentester</h1>
      </v-row>
      <v-row class="d-flex white ma-16 align-center filter justify-center">
        <v-col class="" cols="1">
          <div class="white--text d-flex flex-row justify-center btnColor">
            <p class="ma-1">Filter</p>
            <!-- <v-icon class="white--text ma-1">filter_alt</v-icon> -->
          </div>
        </v-col>
        <v-col cols="3">
          <v-select
            :items="type1"
            v-model="category"
            label="select test category"
          ></v-select>
        </v-col>
        <v-col cols="3">
          <v-select
            :items="type2"
            v-model="testtype"
            label="select test type"
          ></v-select>
        </v-col>
        <v-col cols="3" class="d-flex flex-row justify-center align-center">
          <h4>Total available tests :</h4>
          <p class="ma-1 pa-1">{{ this.filterCategory.length }}</p>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center packet-height">
        <div
          v-for="(test, index) in this.filterCategory"
          :key="index"
          width="50px"
          height="300px"
          class="mainCard ma-4 mt-0 pa-0"
          color=""
        >
          <v-list class="d-flex flex-column justify-center pt-0" id="testList">
            <v-img
              id="testImage"
              :src="`${process.env.VUE_APP_BACKEND_URL}/${test.image}`"
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
                @click="moveToIndividual(test.slug, test)"
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
  </v-main>
</template>

<script>
import { mapState } from "vuex";
// import TestExpansion from "../components/testpages/TestExpansion.vue";

export default {
  data: () => ({
    // items: ["Foo", "Bar", "Fizz", "Buzz"],
    // testtype:
    type1: [
      "",
      "Ackrediterade analyser",
      "Enskilt dricksvatten",
      "avloppsvatten och badvatten",
      "Samfällighet & Verksamhet",
    ],
    type2: [
      "",
      "Packet pris",
      "Analyser Styckvis 1",
      "Analyser styckvis 2",
      "Styck Prov",
      "övriga prover",
    ],
    category: "",
    testtype: "",
  }),
  name: "BestallSidan",
  components: {
    // TestExpansion,
  },
  mounted() {
    this.$store.dispatch("tests/getTests");
  },
  computed: {
    ...mapState(["tests"]),
    // filterTestName() {
    //   return this.tests.tests.map((test) => {
    //     let testtype = [];
    //     testtype = test.testtype;
    //     return testtype;
    //   });
    // },
    filterCategory() {
      console.log(this.category);
      if (this.category === "") {
        return this.tests.tests;
      } else {
        const filterTests = this.tests.tests.filter(
          (test) => test.category === this.category
        );
        if (this.testtype === "") {
          return filterTests;
        } else {
          return filterTests.filter((test) => test.testtype === this.testtype);
        }
      }
    },
    // filterTesttype() {
    //   if (this.testtype === "") {
    //     return this.tests.tests;
    //   } else {
    //     return this.filterCategory.filter(
    //       (test) => test.testtype === this.testtype
    //     );
    //   }
    // },
  },
  methods: {
    moveToCart(id, value) {
      this.$store.commit("tests/INCREASE_COUNT", id);
      if (value) {
        this.countStyckvisOne++;
      } else {
        this.countStyckvisOne--;
      }
    },
    moveToIndividual(slug, test) {
      console.log(slug);
      this.$router.push({
        name: "TestStartsidan",
        params: { slug: slug, test },
      });
    },
    displayTests() {
      return this.filterTesttype(this.testtype);
    },
  },
};
</script>

<style scoped>
.packet-height {
  min-height: 400px;
}

.filter {
  box-shadow: 2px 2px 5px #00000090;
}

.mainCard {
  box-shadow: 2px 2px 5px #00000090;
}
</style>