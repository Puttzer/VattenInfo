<template>
  <div class="container">
    <form action="formCompany">
      <label for="CompanyName">Företagsname</label>
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
      <label for="orgNumber">org number</label>
      <input
        type="text"
        id="orgNumber"
        v-model="orgNumber"
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
    <!-- <button class="reg-btn">Register</button> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* background: red; */
  height: 100vh;
  width: 100vw;
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