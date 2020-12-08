<template>
<v-container>

  <v-data-table 
  dark  
  :headers="headers"
  :items="values"
  :selected="selected" >
    <template v-slot:item.basvalue="{item}" selected >
        <v-simple-checkbox
          v-model="item.basvalue"
          @click="selected = !selected"
        ></v-simple-checkbox>
      </template>
      <template v-slot:item.famijvalue="{item}">
        <v-simple-checkbox
          v-model="item.famijvalue"
          @click="selected = !selected"
        ></v-simple-checkbox>
      </template>
      <template v-slot:item.storvalue="{item}">
        <v-simple-checkbox
          v-model="item.storvalue"
          disabled
        ></v-simple-checkbox>
      </template>
  </v-data-table>
  <v-card :headers="headers" class="d-flex justify-center text--bold">Total Price :</v-card>
  <v-btn class="float-md-right ma-6">Add To Cart</v-btn>
</v-container>
</template>

<script>
  export default {
    data: () => ({
      pagination: {
        sortBy: 'name',
        descending:false
      },
      selected: false,
      headers: [
        {
          text: 'Analyser enskilt dricksvatten',
          align: 'left',
          sortable:false,
          value: 'name'
        },
        { text: 'BAS 695 KR',value:'basvalue', pris:'650 kr' },
        { text: 'FAMIJ 950 KR', value: 'famijvalue', pris:'950 kr'},
        { text: 'STOR 1750 KR', value: 'storvalue' ,pris:'1750 kr'},
      ],
      values: [
        {
          name: 'Klorid',
          basevalue: true,
          famijvalue: true,
          storvalue: true,
        },
        {
          name: 'Järn',
          basevalue: true,
          famijvalue: true,
          storvalue: true,
        },
        {
          name: 'Klorid',
          basevalue: true,
          famijvalue: true,
          storvalue: true,
        },
        {
          name: 'Klorid',
          basevalue: true,
          famijvalue: true,
          storvalue: true,
        },
        {
          name: 'Klorid',
          basevalue: false,
          famijvalue: true,
          storvalue: true,
        },
        {
          name: 'Klorid',
          basevalue: false,
          famijvalue: true,
          storvalue: true,
        },
        {
          name: 'Klorid',
          basevalue: false,
          famijvalue: false,
          storvalue: true,
        }
        ,{
          name: 'Klorid',
          basevalue: false,
          famijvalue: false,
          storvalue: true,
        }
      ]
    }),

    methods: {
      toggleAll () {
        if (this.selected.length) this.selected = []
        else this.selected = this.desserts.slice()
      },
      changeSort (column) {
        if (this.pagination.sortBy === column) {
          this.pagination.descending = !this.pagination.descending
        } else {
          this.pagination.sortBy = column
          this.pagination.descending = false
        }
      }
    }
  }
</script>

<style>

</style>