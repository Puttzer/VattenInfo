<template>
  <div>
    <p v-if="showErrorMessage === true">{{ errorDisplayMessage }}</p>
    <p v-if="showSucessMessage === true">{{ sucessDisplayMessage }}</p>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>