<template>
  <div class="page-contaier ma-8">
    <v-row class="d-flex flex-row">
      <h1>Tester</h1>
      <v-spacer></v-spacer>
      <v-btn class="mr-12 mt-6" @click="loadTests">
        Load tests
        <br />Test
      </v-btn>
      <v-btn class="mr-12 mt-6" @click="showPopup">
        Lägg till
        <br />Test
      </v-btn>
    </v-row>
    <v-row class="d-flex flex-row justify-end">
      <AddTest
        v-if="showAddTest === true"
        class="placement"
        :showAddTest="showAddTest"
        :addtestButton="addtestButton"
        :addsaveButton="addsaveButton"
        :test="test"
        v-on:closeAddTest="closeAddtestModal"
      />
    </v-row>
    <v-row>
      <v-col cols="10">
        <div class="test-container ma-3">
          <v-card
            v-for="(test, index) in this.tests.paginatedTests"
            :key="index"
            width="200px"
            height="450px"
            class="ma-2"
          >
            <v-list class="d-flex flex-column justify-center" id="testList">
              <v-img
                id="testImage"
                :src="`http://localhost:4000/${test.image}`"
                height="150px"
                width="250px"
              ></v-img>
              <v-divider></v-divider>
              <h2 class="Heading-2" id="testName">
                Title : {{ test.testname }}
              </h2>
              <p>{{ test.short_description }}</p>
              <h4 id="testCategory">Detailjer :{{ test.category }}</h4>
              <h4 id="testType">Detailjer :{{ test.testtype }}</h4>
              <!-- <h5 id="testLong">Detailjer :{{ test.description }}</h5> -->
              <p id="testPrice">Pris :{{ test.price }} SEK</p>
              <div class="d-flex flex-row">
                <v-icon @click="editTest(test._id)">mode_edit</v-icon>
                <v-icon @click="deleteTest(test._id)">delete</v-icon>
              </div>
            </v-list>
          </v-card>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <div class="pagination-container">
        <li
          v-for="pageNumber in this.tests.numberOfPages"
          :key="pageNumber"
          class="ma-1"
          :class="{ activeColor: activeclass }"
        >
          <v-btn
            x-small
            @click="changePageNumber(pageNumber)"
            :class="[activeColor ? activeclass : 'blue']"
          >
            {{ pageNumber }}
          </v-btn>
        </li>
      </div>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AddTest from "./AddTest.vue";
export default {
  data() {
    return {
      showAddTest: false,
      addtestButton: false,
      addsaveButton: false,
      activeColor: false,
      test: {
        testname: "",
        testtype: "",
        description: "",
        short_description: "",
        price: "",
        image: "",
        category: "",
        id: "",
      },
    };
  },
  name: "tests",
  components: {
    AddTest,
  },
  computed: {
    ...mapState(["tests"]),
    testInfo(id) {
      const test = this.tests.tests.find((test) => test._id === id);
      console.log(test.image);

      console.log(test);
      return test;
    },
  },
  async mounted() {
    await this.$store.dispatch("tests/getPaginatedTests");
  },
  methods: {
    // testInfo(id) {
    //   const test = this.tests.tests.find((test) => test._id === id);
    //   console.log(test);
    //   return test;
    // },
    // async loadTests() {
    //   await this.$store.dispatch("tests/getPaginatedTests");
    // },
    async changePageNumber(pageNumber) {
      console.log(pageNumber);
      await this.$store.dispatch("tests/getPaginatedTests", pageNumber);
      this.activeColor = true;
    },

    deleteTest(_id) {
      this.$store.dispatch("tests/deleteTest", _id);
    },
    showPopup() {
      this.showAddTest = true;
      this.addtestButton = true;
      this.addsaveButton = false;
    },
    closeAddtestModal() {
      this.showAddTest = false;
    },
    editTest(id) {
      const test = this.tests.tests.find((test) => test._id === id);
      console.log(test);
      this.showAddTest = true;
      this.addtestButton = false;
      this.addsaveButton = true;

      this.test.testname = test.testname;
      this.test.testtype = test.testtype;
      this.test.price = test.price;
      this.test.short_description = test.short_description;
      this.test.description = test.description;
      this.test.id = test._id;
      this.test.image = test.image;

      this.test.category = test.category;
    },
  },
};
</script>

<style scoped>
.dontshow {
  display: none;
}
.placement {
  /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}
/* .test-container {
  display: grid;
  min-height: 600px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
} */

.test-container {
  display: flex;
  min-height: 1100px;
  width: 100%;
  flex-wrap: wrap;
}
.test-container > v-card {
  flex: 1 1 160px;
}
.pagination-container {
  display: flex;
  justify-content: center;
}
li {
  width: 30px;
  height: 50px;
  list-style: none;
}
.pagination-container > button {
  width: 30px;
  height: 50px;
  margin: 5px;
}
.activeclass {
  border: 5px solid green;
  background-color: chartreuse;
  font-size: 16px;
}
.inactiveclass {
  background-color: none;
  font-size: 16px;
}
</style>