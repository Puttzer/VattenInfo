<template>
  <div class="home">
    <navigation-bar></navigation-bar>
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationBar from '../components/ui/NavigationBar.vue'

export default {
  name: 'Home',
  components: {
    NavigationBar
  }
}
</script>
