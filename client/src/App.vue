<template>
  <v-app>
    <navigation-bar></navigation-bar>
     <v-content fluid>
      <router-view></router-view>
     </v-content>
  
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
