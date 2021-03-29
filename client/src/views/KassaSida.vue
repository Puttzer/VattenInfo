<template>
  <div>
    <h1>kassa sidan</h1>
    {{ this.tests.selectedTests }}
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "KassaSidan",
  computed: {
    ...mapState(["tests"]),
  },
};
</script>

<style>
</style>