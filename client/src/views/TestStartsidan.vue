<template>
  <v-main class="ma-16 d-flex">
    <v-row class="d-flex justify-center">
      <h1>Test Detailed Information</h1>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="4" class="d-flex justify-center">
        <img
          :src="this.tests.test.image"
          alt="imagename"
          height="400px"
          width="300px"
        />
      </v-col>
      <v-col cols="5" class="d-flex flex-column justify-center">
        <v-row>
          <h3 class="green--text test-category">
            {{ this.tests.test.category }}
          </h3>
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
          <div class="d-flex flex-row ma-2">
            <v-btn small color="btnColor">
              <v-icon>remove</v-icon>
            </v-btn>
            <p>{{ count }}</p>
            <v-btn small color="btnColor">
              <v-icon>add</v-icon>
            </v-btn>
          </div>

          <v-btn color="btnColor"><v-icon>add_shopping_cart</v-icon> Köp</v-btn>
        </v-row>
      </v-col>
      <v-col cols="3">
        <h1>relaterad producter</h1>
      </v-col>
    </v-row>

    {{ this.tests.test }}
  </v-main>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "TestStartsidan",
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    ...mapState(["tests"]),
  },
  async mounted() {
    const id = this.$route.params.id;
    await this.$store.dispatch("tests/getTestInfo", id);
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