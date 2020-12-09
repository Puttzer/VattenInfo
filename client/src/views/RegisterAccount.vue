<template>
  <div class="container">
    <v-flex xs12 sm6 d-flex>
      <v-select :items="userType" label="Användare"></v-select>
    </v-flex>
    <div class="register-box">
      <div v-if="isAPerson" class="private">
        <p>hej</p>
        <PersonRegister />
      </div>
      <div v-if="!isAPerson" class="private">
        <p>neger</p>
        <CompanyRegister />
      </div>
      <button @click="isAPerson = !isAPerson" class="reg-btn">Register</button>
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
  width: 100vw;
}

.register-box {
  height: 100vh;
  width: 461px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #00000075;

  border-radius: 15px;
  border: none;
  color: #fff;
  overflow: scroll;
}

label {
  background: #1565c0;
  color: #fff;
  padding: 0 20px;
  font-size: 16px;
  border-radius: 5px 5px 0 0;
  margin-top: 50px;
  display: inline;
  float: left;
}

input {
  border: #1565c0 2px solid;
  height: 54px;
  width: 261px;
  background: none;
  color: #fff;
}

.reg-btn {
  height: 36px;
  width: 97px;
  background: #1565c0;
  border-radius: 15px;
  border: none;
  color: #fff;
  /* background: #00000075; */
}

.slide-enter {
}

.slide-enter-active {
  animation: slide-in 0.5s ease-in-out forwards;
}

.slide-leave {
}

.slide-leave-active {
  animation: slide-away 0.5s ease-in-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(0);

    opacity: 0;
    /* transform: translateZ(90deg); */
  }

  to {
    transform: translateY(10px);
    opacity: 1;
    /* transform: translateZ(0); */
  }
}

@keyframes slide-away {
  from {
    transform: translateY(0);

    opacity: 1;
  }
  to {
    transform: translateY(10px);

    opacity: 0;
  }
}
</style>