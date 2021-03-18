<template>
<h1></h1>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      drawer: false,
    };
  },
  computed: {
    ...mapState(["admin"]),
  },
  methods: {
    async logout() {
      console.log("logout");
      await this.$store.dispatch("admin/logout");
      this.$router.push("/login/admin");
      // if (!localStorage.token) {
      //   this.$router.push("/");
      // }
    },
  },
};
</script>

<style scoped>
.admin-container {
  height: 960px;
  min-height: 90%;
}
</style>
