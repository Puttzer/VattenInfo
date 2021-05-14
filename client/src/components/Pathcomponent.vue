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
            /
            {{ route }}
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
      //   console.log(routes);
      routes.forEach((route) => {
        if (route === "") {
          routes.shift();
        }
      });
      const newArray = routes;
      //   let splitArray = [];
      //   newArray.forEach((routename) => {
      //     const ex1 = routename.split("");
      //     ex1[0] = ex1[0].toUpperCase();
      //     const cobminestring = ex1.join("");
      //     console.log(cobminestring);
      //     splitArray.push(cobminestring);
      //   });
      //   console.log(splitArray);
      return newArray;
    },
  },
  methods: {
    moveToRoute(route) {
      console.log(route);
      //   const routeParameter = route.split("");
      //   console.log(routeParameter);
      //   routeParameter[0] = routeParameter[0].toLowerCase();
      //   const cobminestring = routeParameter.join("");
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