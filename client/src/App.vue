<template>
  <v-app>
    <navigation-bar></navigation-bar>
     <v-main class="grey darken-2">
      <router-view></router-view>
     </v-main>
  
  </v-app>
</template>

<script>
import NavigationBar from './components/ui/NavigationBar.vue'

export default {
  name: 'App',

  components: {
    NavigationBar
    
  },

  data: () => ({
    //
  }),
};
</script>
