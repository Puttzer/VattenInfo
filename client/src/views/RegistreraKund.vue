<template>
  <div class="container">
    <v-row class="bgColor">
      <v-col cols="12" sm="12" md="12">
        <v-btn
          class="ml-4"
          small
          color="white"
          text
          @click="isAPerson = false"
          :class="{ active: !isAPerson }"
        >
          företag
        </v-btn>
        <span class="ma-2">|</span>
        <v-btn
          small
          color="white"
          text
          @click="isAPerson = true"
          :class="{ active: isAPerson }"
        >
          privat
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
  margin-top: 150px;
}
.bgColor {
  background-color: #051f38;
  height: 60px;
  width: 100%;
}
.personbgcolor {
  background: #2176c0;
  width: 100%;
}
.active {
  background-color: rgb(168, 123, 24);
  font-size: 16px;
}
</style>