<template>
  <div class="container">
    <div class="register-box">
      <v-btn  x-small color="secondary" @click="isAPerson = false">
        företag
      </v-btn>
      <v-btn x-small color="secondary" @click="isAPerson = true">
        privat
      </v-btn>
      <TestPerson v-show="isAPerson" />
      <TestCompany v-show="!isAPerson" />
     
      <v-btn class="reg-btn" rounded color="primary" dark> Register </v-btn>
    </div>
  </div>
</template>

<script>
// import PersonRegister from "../components/ui/regForms/PersonRegister";
import TestPerson from "../components/ui/regForms/TestPerson";
import TestCompany from "../components/ui/regForms/TestCompany";

export default {
  data() {
    return {
      isAPerson: true,
      userType: ["Privat", "Företag"],
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: red; */
  /* background: url(../assets/pexels-kellie-churchman-1001682.jpg); */

  height: 100vh;
  width: 100%;
}

.register-box {
  height: 100vh;
  width: 461px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  /* background: #00000075; */
  background: #fff;

  border-radius: 15px;
  border: none;
  color: #fff;
  overflow: scroll;
}

.reg-btn {
  /* height: 36px;
  width: 97px; */
  /* background: #1565c0; */
  /* border-radius: 15px; */
  border: none;
  color: #fff;
  margin: 25px;
}
</style>