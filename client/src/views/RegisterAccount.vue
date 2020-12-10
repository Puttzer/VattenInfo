<template>
  <div class="container">
    <div class="register-box">
      <v-btn x-small color="secondary" @click="isAPerson = !isAPerson">
        <!-- F;retag -->
        företag
      </v-btn>
      <v-btn x-small color="secondary" @click="isAPerson = !isAPerson">
        privat
      </v-btn>
      <PersonRegister v-if="isAPerson" />
      <CompanyRegister v-if="!isAPerson" />
     
      <v-btn class="reg-btn" rounded color="primary" dark> Register </v-btn>
    </div>
  </div>
</template>

<script>
import PersonRegister from "../components/ui/regForms/PersonRegister";
import CompanyRegister from "../components/ui/regForms/CompanyRegister";

export default {
  data() {
    return {
      isAPerson: true,
      userType: ["Privat", "Företag"],
    };
  },
  components: {
    PersonRegister,
    CompanyRegister,
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
  background: #00000075;
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