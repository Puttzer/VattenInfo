<template>
  <div class="page-contaier">
    <v-row>
      <v-col>
        <h1>Tester</h1>
        <v-list v-for="n in 5" :key="n">
          <v-list-title>
            <v-img></v-img>
			{{n}}
          </v-list-title>
        </v-list>
      </v-col>
    </v-row>
  </div>
</template>

<script>

import {mapState} from 'vuex'
export default {
	computed:{
		...mapState 
	},
	


};
</script>

<style>
</style>