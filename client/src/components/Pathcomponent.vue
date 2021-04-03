<template>
  <v-row class="d-flex background pa-0 ma-0" cols="3">
    <v-col>
      <div class="d-flex flex-row justify-start mb=2 ml-16">
        <v-icon size="32" color="blue" @click="moveToHome()">home</v-icon>
        <v-list
          v-for="(route, index) in this.filterRoutes"
          :key="route"
          :index="index"
          class="background"
        >
          <p class="cursor-pointer background ma-1" @click="moveToRoute(route)">
            / {{ route }}
          </p>
        </v-list>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Pathcomponent",
  computed: {
    filterRoutes() {
      const routes = this.$route.path.split("/");
      console.log(routes);
      routes.forEach((route) => {
        if (route === "") {
          routes.shift();
        }
        console.log(routes);
      });
      return routes;
    },
  },
  methods: {
    moveToRoute(route) {
      this.$router.push(`/${route}`);
    },
    moveToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
/* .pathDec {
  text-decoration: underline 1px green;
} */
.cursor-pointer {
  cursor: pointer;
}
</style>