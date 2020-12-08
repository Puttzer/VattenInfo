<template>
<v-container>
    <v-layout >

        <v-expansion-panels xs12 sm9 md6 class="ma-4" focusable>
            <v-expansion-panel class="mb-1" border="bottom" dark
            v-for="item in items"
            :key="item.title"
            >
            <v-expansion-panel-header class="grey lighten">{{item.title}}</v-expansion-panel-header>
            <v-expansion-panel-content class="grey lighten-2">
                <v-text  class="d-flex ma-4" v-for="(test,index) in item.tests" :key="index" >
                    <h3>{{test}}</h3><br>
                </v-text>
                <div class="d-flex justify-space-around">
                    <h1>Pris :{{item.price}}</h1>
                    <v-btn class="d-flex justify-end" color="grey">
                        <v-icon class="ma-1 ">add_shopping_cart</v-icon>
                     Add to cart</v-btn>
                </div>
            </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-layout>

</v-container>
</template>

<script>
  export default {
    data: () => ({
      panel: [0, 1],
      disabled: false,
      readonly: false,
      items: [{title:'BAS',price:'650 kr',tests:['klorid','krishna','oxygen', 'giguu']}, {title:'STORA', price:'1750 kr',tests:['klorid','krishna','oxygen', 'giguu']}, {title:'FAMIJ', price:'1000 kr',tests:['klorid','krishna','oxygen', 'giguu']}]
    }),
  }
</script>
<style scoped>
v-expansion-panel{
    border-bottom-width: 2px solid blue;
}
    
</style>