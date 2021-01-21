<template>
<v-container>
    <v-row justify="center">
          <h1>Payment page</h1>  
    </v-row>
    <v-row>
        <v-col d-flex>
            <h3>Order Status</h3>
            <v-card v-for="item in items" :key="item.id" class="ma-3">
                <h3>{{item.name}}</h3>
                <v-icon>add_circle</v-icon>
                <span>{{item.price}} SEK</span>
                <v-icon>remove_circle</v-icon>
                <v-icon>close</v-icon>
            </v-card>
            <h2>Total Amount :{{totalAmount}} SEK</h2>
        </v-col>
        <v-col d-flex>
        <h3> payment status</h3>
            <v-card class="ma-2 pa-4">

        <form>


        <v-row>
           <v-col
          cols="12"
          sm="12"
        >
          <v-text-field
            v-model="cardDetails.cardNummer"
            label="card Number"
            outlined
          ></v-text-field>
        </v-col>
        </v-row>

        <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="cardDetails.firstName"
            label="First Name"
            outlined
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="cardDetails.lastName"
            label="Last Name"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
        <v-row>
            <v-col cols="12" sm="4">
                <v-select v-model="cardDetails.month" :items="months" label="Month" dense solo></v-select>                               
            </v-col>
            <v-col cols="12" sm="4">              
                <v-select v-model="cardDetails.year" :items="years" label="Year" dense solo></v-select>                 
            </v-col>
            <v-col cols="12" sm="4">
                    <v-text-field
            v-model="cardDetails.ccv"
            label="CCV"
            outlined
          ></v-text-field> 
            </v-col>
        </v-row>
        <v-row d-flex justify="end">
            <v-col>
            <v-btn color="light grey">Betala Nu</v-btn>
            </v-col>
        </v-row>
        </form>
            </v-card>

        </v-col>
    </v-row>

</v-container>
</template>

<script>
export default {
    data(){
        return {
            items:[
                {name:'test1',price:350,id:1},
                {name:'test2',price:200,id:2},
                {name:'test3',price:250,id:3}
            ],
            months:['01','02','03'],
            years:['2021','2022','2023','2025','2026'],
           cardDetails:{
                cardNummer:'',
                firstName:'',
                lastName:'',
                ccv:'',
                month:'',
                year:'',
           }
               
        }
    },
    methods:{
        totalAmount(){
            let total=0;
            total += this.items
            .map(item => {item.total;
            console.log(item)})
            .reduce((a,b)=>{
                return a+b;
            },0);
            return total  
        }
    }

}
</script>

<style>
/* label{
    font-size: 20px;
    color:black;
} */
/* input{
    border : 2px solid black;
    border-radius:5px;
    color:whitesmoke;
    margin-left:10px;
} */
/* select{
    border: 1px solid black;
    width:70px;
}
#year{
    width:50px;
} */

</style>