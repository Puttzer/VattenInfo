<template>
<v-container d-flex  class="mt-8 lostlogin" >
    <v-card d-flex justify="center" color=transparent flat width="40vw" >

        <v-form class="mt-3 pa-4">
            <v-row justify="center">
                <v-col class="lostlogin1" cols="12" md="9">
                <h2>Beställ Nytt Lösenord</h2>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="12" md="9">

                <v-text-field dense color="#051f38" text class="mt-6" v-model="user.fullName" append-icon="person" label="First Namn" outlined placeholder="krishna Mohan" ></v-text-field>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="12" md="9">
                <v-text-field color="#051f38" text dense class="mt-n3"  append-icon="email" v-model="user.email" label="Email" outlined placeholder="testemail@test.com"></v-text-field>
                </v-col>
            </v-row>
            
            <v-row justify="center">
                <v-col cols="12" md="9">
                <v-text-field color="#051f38" text dense class="mt-n3"  append-icon="email" v-model="user.repeatEmail" label="Repeat Email" outlined placeholder="testemail@test.com"></v-text-field>
                </v-col>
            </v-row>
            <v-row justify="end">
                <v-col cols="12" md="3" class="mr-12">
                <v-btn > Beställ </v-btn>
                </v-col>
            </v-row>

        </v-form>
    </v-card>
  </v-container>
  
</template>

<script>
export default {
    name:"LostLogin",
    data(){
        return{
            user:{
                email:'',
                repeatEmail:'',
                fullName:'',
            }

        }
    }

}
</script>

<style scoped>
.lostlogin{
    display:flex;
    justify-content: center;
    align-items:center;
    height:100vh;
}
.lostlogin1{
    display:flex;
    justify-content: center;
    align-items:center;
}
.v-text-field{
  font-size: 18px;
  font-weight: 400;
   color:chocolate;
}

/* .amos input {
      color: white !important;
    } */
</style>