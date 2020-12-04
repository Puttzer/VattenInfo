<template>
  <div class="container">
    <div class="register-box">
      <v-layout align-center justify-center column fill-height>
        <form>
          <label for="fullname">Namn</label>
          <input
            type="text"
            id="fullname"
            v-model="fullname"
            placeholder="John"
            autocomplete="on"
          />

          <v-switch
            v-model="isAPerson"
            :disabled="bajs"
            class="mt-0"
            color="blue lighten-2"
            hide-details
            label="Företag"
          ></v-switch>
          <transition name="slide">
            <div v-if="isAPerson" class="company">
              <label for="lastname">Företagsnamn</label>
              <input
                type="text"
                id="company"
                v-model="email"
                placeholder="companyname"
                autocomplete="on"
              />
            </div>
          </transition>

          <label for="email">Email</label>
          <input
            type="text"
            id="email"
            v-model="lastname"
            placeholder="me@example.com"
            autocomplete="off"
          />

          <label for="adress">Adress</label>
          <input
            type="text"
            id="adress"
            v-model="adress"
            placeholder="Strettname 12"
            autocomplete="on"
          />

          <label for="city">City</label>
          <input
            type="text"
            id="city"
            v-model="city"
            placeholder="City"
            autocomplete="on"
          />
          <label for="postcode">Postcode</label>
          <input
            type="text"
            id="postcode"
            v-model="postcode"
            placeholder="123 45"
            autocomplete="on"
          />
          <v-btn color="info" @click="sendTheBill = !sendTheBill">fakturering</v-btn>
          <transition name="slide">


          <div v-if="sendTheBill" class="bill-adress">
            <label for="billAdress">billAdress</label>
            <input
              type="text"
              id="billAdress"
              v-model="billAdress"
              placeholder="Strettname 12"
              autocomplete="on"
            />

            <label for="billCity">billCity</label>
            <input
              type="text"
              id="billCity"
              v-model="billCity"
              placeholder="billCity"
              autocomplete="on"
            />
            <label for="billPostCode">billPostCode</label>
            <input
              type="text"
              id="billPostCode"
              v-model="billPostCode"
              placeholder="123 45"
              autocomplete="on"
            />
          </div>
          </transition>

          <label for="reds">Anmärkning/Referens</label>
          <input
            type="text"
            id="refs"
            v-model="refs"
            placeholder=""
            autocomplete="off"
          />
        </form>
      </v-layout>
    </div>
    <button class="reg-btn">Register</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAPerson: false,
      sendTheBill: false,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: red;
  height: 100vh;
  width: 100vw;
}

.register-box {
  height: 100vh;
  width: 261px;
  /* background: #00000075; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #00000075;

  border-radius: 15px;
  border: none;
  color: #fff;
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
  animation: slide-in .5s ease-in-out forwards;
}

.slide-leave {
}

.slide-leave-active {
  animation: slide-away .5s ease-in-out forwards;
}

@keyframes slide-in {
  from {
    /* transform: translateY(20px); */
	opacity: 0;

  }

  to {
    /* transform: translateY(0); */
	opacity: 1;

  }
}

@keyframes slide-away {
  from {
    /* transform: translateY(0); */
	opacity: 1;
  }
  to {
    /* transform: translateY(20px); */
	opacity: 0;

  }
}
</style>