<template>
  <v-main class="ma-16 d-flex">
    <v-row class="d-flex justify-center">
      <h1>Information</h1>
    </v-row>
    <v-row class="d-flex justify-start white">
      <v-col cols="4" class="d-flex justify-start pa-0">
        <img
          :src="`http://localhost:4000/${this.tests.test.image}`"
          alt="imagename"
          height="400px"
          width="300px"
          class="justify-center"
        />
      </v-col>
      <v-col cols="5" class="d-flex flex-column justify-start">
        <v-row>
          <h3 class="green--text test-category">
            {{ this.tests.test.category }}
          </h3>
        </v-row>
        <v-row>
          <p class="caption">{{ this.tests.test.short_description }}</p>
        </v-row>
        <v-row>
          <h2 class="green--text test-name">
            <strong class="black--text headline"> Test Name</strong> :
            {{ this.tests.test.testname }}
          </h2>
        </v-row>
        <v-row>
          <h4 class="test-type">
            <strong class="title">Test type </strong>:{{
              this.tests.test.testtype
            }}
          </h4>
        </v-row>
        <v-row>
          <p class="">
            <strong>Mer Information </strong>:{{ this.tests.test.description }}
          </p>
        </v-row>
        <v-row>
          <h3 class="bold">Pris :{{ this.tests.test.price }} Kr</h3>
        </v-row>
        <v-row>
          <!-- <div class="d-flex flex-row ma-2">
            <v-btn small color="btnColor" @click="decreaseCount">
              <v-icon>remove</v-icon>
            </v-btn>
            <p>{{ testSampleCount }}</p>
            <v-btn small color="btnColor" @click="increaseCount">
              <v-icon>add</v-icon>
            </v-btn>
          </div> -->

          <v-btn color="btnColor white--text" @click="increaseThecounterValue()"
            ><v-icon class="mx-2">add_shopping_cart</v-icon> Köp</v-btn
          >
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h1>Relaterade produkter</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex">
        <v-card
          v-for="(test, index) in this.filterRelatedTests"
          :key="index"
          width="250px"
          height="300px"
          class="ma-4"
        >
          <v-list
            class="d-flex flex-column justify-center"
            id="testList ma-0 pa-0"
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
              <!-- <v-btn
                class="btnColor white--text ma-1"
                @click="increaseThecounterValue()"
                >köp</v-btn
              > -->
            </div>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "TestStartsidan",
  data() {
    return {};
  },
  computed: {
    ...mapState(["tests"]),
    filterPaketTest() {
      return this.tests.tests.filter(
        (test) =>
          test.testtype === this.tests.test.testtype &&
          test.category === this.tests.test.category
      );
    },
    filterRelatedTests() {
      const id = this.$route.params.id;
      return this.filterPaketTest.filter((test) => test._id !== id);
    },
  },
  async mounted() {
    window.scrollTo(0, 0);

    const id = this.$route.params.id;
    await this.$store.dispatch("tests/getTestInfo", id);
  },

  methods: {
    // decreaseCount() {
    //   if (this.testSampleCount <= 1) {
    //     return (this.testSampleCount = 1);
    //   } else {
    //     return this.testSampleCount--;
    //   }
    // },
    // increaseCount() {
    //   return this.testSampleCount++;
    // },
    moveToIndividual(id, test) {
      console.log(id);
      this.$router.push({
        name: "TestStartsidan",
        params: { id: id, test },
      });
    },
    increaseThecounterValue() {
      const id = this.$route.params.id;
      console.log(id);
      this.$store.commit("tests/INCREASE_COUNT", id);
    },
  },
};
</script>

<style scoped>
.test-category {
  font-size: 32px;
  /* font-family: 'Poppins', sans-serif; */
  font-family: "Roboto", sans-serif;
  font-weight: bold;
}
.test-type {
  letter-spacing: 5px;
  font-family: "Poppins", sans-serif;
  font-weight: lighter;
  font-size: 14px;
}
.test-name {
  /* letter-spacing: 3px; */
  font-family: "Poppins", sans-serif;
  font-weight: lighter;
  font-size: 24px;
}
</style>