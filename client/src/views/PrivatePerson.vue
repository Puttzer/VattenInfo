<template>
  <div class="container">
     <v-card >
      <v-row>
        <v-col cols="12">

          <v-btn  class="ml-4" small color="white" text @click="isAPerson = false" >
            företag
          </v-btn>
          <span>|</span>
          <v-btn small color="white" text @click="isAPerson = true" :class="{active:isAPerson}">
            privat
          </v-btn>
        </v-col>
      </v-row>
      <PrivateLogin />
    </v-card>

  </div>
</template>

<script>
import PrivateLogin from '../components/privateperson/PrivateLogin'
export default {
  name:'PrivatePerson',
  components:{
    PrivateLogin
  }

}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  /* background: red; */
  /* background: url(../assets/pexels-kellie-churchman-1001682.jpg); */

  height: 1200px;
  width: 100%;
  /* background:#05427a; */
}

.v-card {
  height:80vh;
  width: 33vw;
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
}
.active{
  color:orangered;
}
.inactive{
  color:black;
}

.companybgcolor{
  background:#1d66a7 ;
}

</style>