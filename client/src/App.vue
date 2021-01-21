<template>
  <v-app ma-0 pa-3>
    <navigation-bar ></navigation-bar>
     <v-main ma='0' class="grey lighten-2">
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
