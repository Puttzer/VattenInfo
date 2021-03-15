<template>
  <v-main>
    <v-row>
      <v-col cols="2">
        <v-row class="ma-1">
          <v-btn @click="displayProducts">produkter</v-btn>
        </v-row>
        <v-row class="ma-1">
          <v-btn @click="displayPrivateusers">Privatkunder </v-btn>
        </v-row>
        <v-row class="ma-1">
          <v-btn @click="displayCompanyusers">Företagskunder</v-btn>
        </v-row>
        <v-row class="ma-1">
          <v-btn @click="displayOrders">Beställningar</v-btn>
        </v-row>
      </v-col>
      <v-col cols="10">
        <h1>Admin kontrollpanel</h1>
        <h3 v-if="showProducts">producter</h3>
        <h3 v-if="showPrivateusers">privatkunder</h3>
        <h3 v-if="showCompanyusers">foretags kunder</h3>
        <h3 v-if="showOrders">bestallningar</h3>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      showProducts: false,
      showPrivateusers: false,
      showCompanyusers: false,
      showOrders: false,
    };
  },
  methods: {
    displayProducts() {
      this.showProducts = true;
      this.showPrivateusers = false;
      this.showCompanyusers = false;
      this.showOrders = false;
    },
    displayPrivateusers() {
      this.showProducts = false;
      this.showPrivateusers = true;
      this.showCompanyusers = false;
      this.showOrders = false;
    },
    displayCompanyusers() {
      this.showProducts = false;
      this.showPrivateusers = false;
      this.showCompanyusers = true;
      this.showOrders = false;
    },
    displayOrders() {
      this.showProducts = false;
      this.showPrivateusers = false;
      this.showCompanyusers = false;
      this.showOrders = true;
    },
  },
};
</script>

<style>
</style>