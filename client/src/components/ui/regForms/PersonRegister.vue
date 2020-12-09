<template>
  <div class="container">
    <form action="formCompany">
      <label for="CompanyName">Namn</label>
      <input
        type="text"
        id="CompanyName"
        v-model="CompanyName"
        placeholder=""
        autocomplete="on"
      />
      <label for="Email">Email</label>
      <input
        type="email"
        id="Email"
        v-model="Email"
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
    </form>
    <!-- <button @click="" class="reg-btn">Register</button> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: #00000075; */
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
</style>