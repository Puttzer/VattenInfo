<template>
  <v-main>
    <v-row class="d-flex justify-center packet-height">
      <v-card
        v-for="(test, index) in this.filterSamfalligheterTests"
        :key="index"
        width="250px"
        height="200px"
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
            <p class="caption">{{ test.short_description }}</p>
            <p id="testCategory">
              <strong>Kategori : </strong> {{ test.category }}
            </p>

            <p id="testPrice">Pris :{{ test.price }} SEK</p>
          </div>
          <div class="d-flex justify-center mb-2 mx-2 flex-row">
            <v-btn
              class="btnColor white--text ma-1"
              medium
              @click="moveToIndividual(test._id, test)"
              >Läs mer</v-btn
            >
            <v-btn
              medium
              class="btnColor white--text ma-1"
              @click="increaseThecounterValue(test._id)"
              >köp</v-btn
            >
          </div>
        </v-list>
      </v-card>
    </v-row>
  </v-main>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SamfalligheterTest",
  data() {
    return {};
  },
  computed: {
    ...mapState(["tests"]),
    filterSamfalligheterTests() {
      return this.tests.tests.filter(
        (test) =>
          test.testtype === "Styck Prov" &&
          test.category === "Samfällighet & Verksamhet"
      );
    },
  },
};
</script>

<style>
</style>