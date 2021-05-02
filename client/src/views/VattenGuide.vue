<template>
  <div class="pt-3 d-flex flex-column">
    <question class="mt-4" />
    <a
      href="https://vatteninfo.com/Radgivning"
      class="d-flex flex-row justify-center webpage mt-3"
    >
      Är du fortfarande osäker? kontakta oss!
    </a>
  </div>
</template>

<script>
import question from "../components/guiden/question";
export default {
  components: {
    question,
  },
  methods: {
    goTowebpage() {
    //   route: "https://vatteninfo.com/Radgivning";
    },
  },
};
</script>

<style>
.webpage:hover {
  color: #449a63;
  cursor: pointer;
  text-decoration: none;
}
</style>