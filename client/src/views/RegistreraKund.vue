<template>
  <div class="container background">
    <v-row class="d-flex justify-center mt-4">
      <v-col cols="6" class="d-flex justify-center">
        <h2 v-show="isAPerson" class="blue--text">Skappa Privat kund Konto</h2>
        <h2 v-show="!isAPerson" class="blue--text">Skappa Företag Konto</h2>
      </v-col>
    </v-row>
    <v-row class="bgColor mt-12">
      <v-col cols="12" sm="12" md="12">
        <v-btn
          class="ml-4"
          small
          color="white"
          text
          @click="isAPerson = false"
          :class="{ active: !isAPerson }"
        >
          Företag
        </v-btn>
        <span class="ma-2">|</span>
        <v-btn
          small
          color="white"
          text
          @click="isAPerson = true"
          :class="{ active: isAPerson }"
        >
          Privatkund
        </v-btn>
      </v-col>
    </v-row>
    <TestPerson v-show="isAPerson" class="personbgcolor" />
    <TestCompany v-show="!isAPerson" class="personbgcolor" />
  </div>
</template>

<script>
// import PersonRegister from "../components/ui/regForms/PersonRegister";
import TestPerson from "../components/ui/TestPerson";
import TestCompany from "../components/ui/TestCompany";

export default {
  data() {
    return {
      isAPerson: true,
      message: "",
    };
  },
  components: {
    TestCompany,
    TestPerson,
  },
};
</script>

<style scoped>
.container {
  height: 1100px;
  width: 90%;
  margin-top: 10px;
}
.bgColor {
  background-color: #cfcfcf;
  height: 60px;
  width: 100%;
}
.personbgcolor {
  background: white;
  width: 100%;
}
.active {
  background-color: #12669c;
  font-size: 16px;
}
</style>