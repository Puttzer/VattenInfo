<template>
  <div class="test">
    <label for="name">Full Name</label>
    <input
      type="text"
      id="name"
      v-model="name"
      placeholder=""
      autocomplete="on"
    />
    <label for="email">Email</label>
    <input
      type="email"
      id="Email"
      v-model="email"
      placeholder=""
      autocomplete="on"
    />

    <label for="street">Street</label>
    <input
      type="name"
      id="street"
      v-model="street"
      placeholder=""
      autocomplete="on"
    />
    <label for="areaCode">Area Code</label>
    <input
      type="name"
      id="areaCode"
      v-model="areaCode"
      placeholder=""
      autocomplete="on"
    />
    <label for="areaCode">City</label>
    <input
      type="name"
      id="city"
      v-model="city"
      placeholder=""
      autocomplete="on"
    />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.test {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 100vh;
  width: 100vw; */
}

label {
  background: #1565c0;
  color: #fff;
  padding: 0 20px;
  font-size: 16px;
  border-radius: 5px 5px 0 0;
  /* margin-top: 20px; */
  display: inline;
	margin: 0;
}
/* 
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
} 
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
} */

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
}
</style>