<template>
  <v-container fluid>
    <v-row align="center">

      <v-col
        class="d-flex"
        cols="6"
        sm="6"
      >
        <v-select
          :items="itemsTitle"
          v-model ="itemSelected"
          label="välj test"
          solo
        >
        </v-select>
      </v-col>
      </v-row>
      <v-card class="d-flex ma-3 flex-column"
       v-for="displayItem in displayItems" :key="displayItem.title">
    
        <h3>{{displayItem.title}}</h3><br>
        <h3>{{displayItem.price}}</h3><br>
        <v-card  class="d-flex mb-6 ma-4" v-for="displayTest in displayItem.tests" :key="displayTest" >
            <h3>{{displayTest}}</h3><br>
        </v-card>

        </v-card>
    
  </v-container>
</template>

<script>
  export default {
    data: () => ({
        itemSelected:'',
      items: [{title:'BAS',price:'650 kr',tests:['klorid','krishna','oxygen', 'giguu']}, {title:'stora', price:'1750 kr',tests:['klorid','krishna','oxygen', 'giguu']}, {title:'mellan', price:'1000 kr',tests:['klorid','krishna','oxygen', 'giguu']}],
    }),
    computed:{
        itemsTitle(){
            const title = this.items.map(item => item.title)
            return title
        },
        itemChoose(){
            return this.itemSelected
        },
        displayItems(){
            console.log(this.itemChoose)
           const selected = this.itemChoose
           console.log(selected)
           console.log(this.items)
            const itemsnew = this.items.filter(item =>item.title === selected)
            console.log(itemsnew)
            return itemsnew
        }
    }
  }
</script>

<style>

</style>