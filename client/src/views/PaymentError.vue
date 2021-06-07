<template>
  <v-main class="mt-12">
    <v-row>
      <Spinner loading="true" color="blue" />
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col class="d-flex justify-center" cols="12">
        <h3 class="heading-3 red--text">Payment Error</h3>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col class="d-flex justify-center" cols="12">
        <p class="body">something went wrong with the card payment</p>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="3" class="d-flex flex-column justify-center white">
        <v-row class="d-flex flex-row justify-center">
          <v-col cols="3" class="d-flex justify-center">
            <v-icon x-large color="red">error</v-icon>
          </v-col>
          <v-col cols="9" class="d-flex justify-end flex-column">
            <h3 class="bold">Payment Failure</h3>
            <p>something went wrong</p>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-end">
          <v-col cols="12" class="d-flex align-start mr-n12 flex-column">
            <h3>Suggestion</h3>
            <p>Please Try again later.</p>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
          <v-col
            cols="10"
            class="d-flex justify-center flex-column"
            height="300px"
          >
            <div
              class="white--text red mb-2 d-flex justify-center align-center pa-2 rounded listItem"
              height="150"
            >
              Try again
            </div>
            <div
              class="white--text red d-flex justify-center align-center pa-2 rounded listItem"
              @click="moveToHome"
            >
              Back To Homepage
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import Spinner from "../components/ui/Spinner.vue";
export default {
  name: "PaymentError",
  components: {
    Spinner,
  },
  methods: {
    moveToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.listItem:hover {
  /* text-decoration: underline wavy; */
  /* font-weight: normal; */
  cursor: pointer;
  zoom: 110%;
}
</style>