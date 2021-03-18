<template>
  <div class="page-contaier">
    <v-row class="d-flex flex-column">
      <v-row class="d-flex flex-row">
        <h1>Tester</h1>
        <v-spacer></v-spacer>
        <v-btn class="mr-12 mt-6"
          >Lägg till <br />
          Test</v-btn
        >
      </v-row>
      <v-col class="d-flex flex-row">
        <v-card
          v-for="test in this.tests.tests"
          :key="test.id"
          width="200px"
          height="250px"
          class="ma-2"
        >
          <v-list class="d-flex flex-column justify-center">
            <v-img
              :src="test.image"
              height="150px"
              width="150px"
              name="testimage"
            ></v-img>
            <v-divider></v-divider>
            <v-list-title class="Heading-2" name="testName">
              Title : {{ test.testname }}
            </v-list-title>
            <v-list-subtitle name="testShort">
              Description :{{ test.short_description }}
            </v-list-subtitle>
            <v-list-content name="testLong">
              Detailjer :{{ test.long_description }}
            </v-list-content>
            <v-list-title name="testPrice">
              Pris :{{ test.price }} SEK
            </v-list-title>
            <div class="d-flex flex-row">
              <v-icon @click="editTest(test._id)">mode_edit</v-icon>
              <v-icon @click="deleteTest(test._id)">delete</v-icon>
            </div>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "tests",
  computed: {
    ...mapState(["tests"]),
  },
  mounted() {
    this.$store.dispatch("tests/getTests");
  },
  methods: {
    deleteTest(_id) {
      this.$store.dispatch("tests/deleteTest", _id);
    },
  },
};
</script>

<style scoped>
</style>