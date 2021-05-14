<template>
  <div>
    <v-card flat>
      <v-row class="bgColor">
        <v-col cols="12" md="2" class="text--black font-weight-bold">
          <v-row>
            <div class="text--black font-weight-bold ml-3">order Number</div>
            <v-spacer></v-spacer>
            <span>|</span>
          </v-row>
        </v-col>
        <v-col cols="12" md="2" class="text--black font-weight-bold">
          <v-row>
            <div class="text--black font-weight-bold ml-2">order date</div>
            <v-spacer></v-spacer>
            <span>|</span>
          </v-row>
        </v-col>

        <v-col cols="12" md="2" class="text--black font-weight-bold">
          <v-row>
            <div class="text--black font-weight-bold ml-2">Amount</div>
            <v-spacer></v-spacer>
            <span>|</span>
          </v-row>
        </v-col>
        <v-col cols="12" md="2" class="text--black font-weight-bold">
          <div class="text--black font-weight-bold ml-2">No Of Tests</div>
        </v-col>
        <v-col cols="12" md="2" class="text--black font-weight-bold">
          <div class="text--black font-weight-bold ml-2">Status</div>
        </v-col>
      </v-row>
      <v-row
        class="bgColor1"
        v-for="order in this.order.individualOrders"
        :key="order._id"
      >
        <v-col cols="12" md="2" class="text--black">
          <v-row class="ml-1" justify="start">
            <div>{{ order.orderNumber }}</div>
          </v-row>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col cols="12" md="2" class="text--black">
          <div>{{ order.createdAt }}</div>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col cols="12" md="2" class="text--black">
          <div>{{ order.totalAmount }}</div>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col cols="12" md="2" class="text--black">
          <div class="text--black font-weight-bold ml-2">
            {{ order.tests.length }}
          </div>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col cols="12" md="2" class="text--black d-flex">
          <div :class="`order ${order.status} colorstatus`" class="ma-4">
            pending
          </div>
          <v-btn small class="btnColor ma-4">detail information</v-btn>
        </v-col>
        <v-row>
          <v-divider></v-divider>
        </v-row>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "PrivateUser",
  data() {
    return {
      orders: [
        {
          number: 1,
          id: "2567896",
          date: "2021-01-22",
          description: "three tests are ordered",
          amount: "360 SEK",
          status: "Pending",
        },
        {
          number: 2,
          id: "2567897",
          date: "2021-01-22",
          description: "three tests are ordered",
          amount: "360 SEK",
          status: "Pending",
        },
        {
          number: 3,
          id: "2567898",
          date: "2021-01-22",
          description: "three tests are ordered",
          amount: "360 SEK",
          status: "Confirmed",
        },
        {
          number: 4,
          id: "2567899",
          date: "2021-01-22",
          description: "three tests are ordered",
          amount: "360 SEK",
          status: "Results",
        },
        {
          number: 5,
          id: "2567900",
          date: "2021-01-22",
          description: "three tests are ordered",
          amount: "360 SEK",
          status: "Pending",
          inset: false,
        },
      ],
    };
  },
  computed: {
    ...mapState(["user", "order"]),
  },
  async mounted() {
    const userId = this.user.user._id;
    await this.$store.dispatch("order/getIndividualOrders", userId);
  },
};
</script>

<style scoped>
.bgColor {
  background-color: rgba(175, 116, 88, 0.966);
}
.bgColor1 {
  background-color: rgb(197, 195, 196);
}
.order.Pending {
  border-left: 5px solid orange;
  background-color: orange;
}
.order.Confirmed {
  border-left: 5px solid yellow;
  background-color: yellow;
}
.order.Results {
  border-left: 5px solid green;
  background-color: green;
}
.order.Pending.colorstatus {
  background-color: orange;
  border-radius: 10px;
  width: 50%;
}
.order.Confirmed.colorstatus {
  background-color: yellow;
  border-radius: 10px;
  width: 50%;
}
.order.Results.colorstatus {
  background-color: green;
  border-radius: 10px;
  width: 50%;
}
</style>