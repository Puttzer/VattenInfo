<template>
  <div class="d-flex flex-column">
    <v-row class="d-flex">
      <v-col class="d-flex justify-left ml" cols="12">
        <h1>Varukorg</h1>
      </v-col>
    </v-row>
    <v-row
      v-for="(selectedTest, index) in this.tests.selectedTests"
      :key="selectedTest._id"
      :index="index"
      class="my-1 mx-2"
      cols="12"
    >
      <v-col class="d-flex red justify-center pa-0 mx-1 my-1">
        <v-list
          class="d-flex justify-space-around pa-0 ma-0 flex-row"
          cols="12"
        >
          <div class="d-flex flex-column">
            <v-img
              cols="2"
              class="pink"
              :src="selectedTest.image"
              width="150px"
              height="150px"
            ></v-img>

            <div class="d-flex flex-column">
              <p class="price mb-3">
                {{ selectedTest.price }}
              </p>
              <p class="mb-0">
                {{ selectedTest.testname }}
              </p>
              <p class="mb-0">{{ selectedTest.testtype }}</p>
              <p>{{ selectedTest.category }}</p>
            </div>
          </div>

          <div cols="4" lass="d-flex pink flex-column">
            <div class="justify-text amber desc d-flex flex-column">
              <p class="text-justify green my-2 py-3 mx-2 px-3">
                {{ selectedTest.description }}
              </p>
            </div>
          </div>

          <v-icon
            @click="deleteProduct"
            class="d-flex justify-center"
            size="42px"
            color="red"
            cols="2"
            >delete</v-icon
          >
        </v-list>
      </v-col>
    </v-row>

    <v-col
      cols="12"
      class="amber d-flex flex-row justify-space-evenly align-right"
    >
      <div class="indigo">
        <p class="mt-4 pink">Summa : {{ this.tests.totalAmount }}</p>
      </div>
      <div
        class="payButton d-flex flex-row justify-center align-center btnColor white--text"
      >
        Bekräffta beställning
      </div>
    </v-col>

    {{ this.tests.selectedTests }}
    {{ this.tests.totalAmount }}
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "KassaSidan",
  computed: {
    ...mapState(["tests"]),
  },
};
</script>

<style scoped>
.payButton {
  height: 60px;
  width: 250px;
  border-radius: 4px;
}

.price {
  size: 54px;
  font-weight: bold;
}
</style>