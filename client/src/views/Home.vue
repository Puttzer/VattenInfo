<template>
  <div class="home">
    <navigation-bar />
    <hello-world></hello-world>
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationBar from '@/components/ui/NavigationBar.vue'
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    NavigationBar,
    HelloWorld
  }
}
</script>

<style scoped>

  
</style>
