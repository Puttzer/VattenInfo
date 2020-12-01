<template>
  <div class="container">
    <div class="login">
      <div class="login-box">
        <h1>Logga In!</h1>
        <label class="label" for="email">email</label>
        <input type="text" name="" id="email" />
        <label class="label" for="password">password</label>
        <input type="password" name="" id="password" />
        <!-- <Togglebar /> -->
        <toolbar :value="true" :position="left" :height="64" :width="64" />
      </div>
      <button class="login-btn">logga in</button>
      <toolbar :value="true" :position="left" :height="64" :width="64" />
    </div>
    <button class="change-lang">
		Svenska
	</button>
  </div>
</template>

<script>
// import Togglebar from '../components/ui/Togglebar.vue';
import Toolbar from "vue-js-toolbar";
export default {
  components: { Toolbar },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;
  height: 100vh;
  width: 100wv;
}
.login-box {
  height: 364px;
  width: 304px;
  /* background: #00000075; */
  border-radius: 15px;
  border: none;
  color: #fff;
}

input {
  border: #1565c0 2px solid;
  height: 54px;
  width: 261px;
  background: none;
  color: #fff;
}

.label {
  background: #1565c0;
  color: #fff;
  padding: 0 20px;
  font-size: 16px;
  border-radius: 5px 5px 0 0;
  margin-top: 50px;
  display: inline;
  float: left;
}

.login-btn {
  height: 36px;
  width: 97px;
  background: #1565c0;
  border-radius: 25px;
  border: none;
  color: #fff;
  /* background: #00000075; */
}

.change-lang{
	width: 186px;
	height: 36px;
	border-radius: 25px;
}
</style>