<template>
  <div class="container">
     <div class="loginHeading mb-4">
       <h1>Logga In!</h1>
     </div>
     <v-card class="mt-1" >
      <v-row>
        <v-col cols="12">

          <v-btn class="ml-4" small color="white" text @click="isAPerson = false" :class="{active:!isAPerson}" >
            företag
          </v-btn>
          <span>|</span>
          <v-btn small color="white" text @click="isAPerson = true" :class="{active:isAPerson}">
            privat
          </v-btn>
        </v-col>
      </v-row>
      <PrivateLogin v-show="isAPerson" class="personbgcolor"/>
      <CompanyLogin v-show="!isAPerson"  class="personbgcolor"/>
    </v-card>

  </div>
</template>

<script>
import PrivateLogin from '../components/privateperson/PrivateLogin'
import CompanyLogin from '../components/company/CompanyLogin'
export default {
  name:'PrivatePerson',
  components:{
    PrivateLogin,
    CompanyLogin
  },
  data(){
    return{
      isAPerson: false,
    }
  },

}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: red; */
  /* background: url(../assets/pexels-kellie-churchman-1001682.jpg); */

  height:700px;
  width: 100%;
  /* background:#05427a; */
}
.loginHeading{
  display:flex;
  justify-content:center;
}

.v-card {
  height:400px;
  width: 25vw;
  display: flex;
  flex-direction: column;
  background-color:#051f38 ;
  /* justify-content: center; */
  /* align-items: center; */
  /* background: #00000075; */
  margin-top:75px;
  border-radius: 5px;
}
.personbgcolor{
  background:#2176c0 ;
  height:370px;
}
.active{
  background-color:rgb(168, 123, 24);
  font-size:16px;
}

.companybgcolor{
  background:#11446e ;
}

</style>