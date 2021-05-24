<template>
  <v-main class="container">
    <v-flex>
      <v-row d-flex justify="center">
        <h2>
          Analyser för dig med egen brunn eller gemensam brunn för upp till 50
          personer
        </h2>
      </v-row>
      <v-row class="d-flex justify-center font-weight-bold blue--text mt-6">
        <v-col cols="11" class="d-flex justify-center">
          <p class="bread">
            Här hittar du analyser för dig med enskilt vatten (vatten för privat
            dricksvattenförsörjning för färre än 50 personer eller med ett flöde
            på mindre än 10 kubikmeter).<br />
            Om du har anlagt en ny brunn så rekommenderas att prova vatten efter
            någon månads användning. I andra fall rekommenderar Livsmedelsverket
            att du testar ditt eget vatten minst vart tredje år.<br />
            Är det fler än två fastigheter som är anslutna till samma brunn, om
            vattnet kommer från en sjö eller passerar en avsaltningsanläggning
            bör vattnet testas minst en gång per år.<br />
            <span> OBS! </span> Vatten som försörjer fler än 50 personer eller
            har ett flöde på minst 10 m3 är dricksvatten enligt
            Livsmedelslagstiftningen. Klicka här för att komma till
            ackrediterade analyser för registrerade anläggningar.
          </p>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center mt-6">
        <v-col cols="11" class="d-flex flex-column justify-center">
          <h2 class="d-flex justify-center text--black">
            Analyser i lokalt laboratorium
          </h2>
          <p class="bread font-weight-light blue--text">
            Det lokala laboratoriet analyserar enligt akrediterade metoder, men
            är inte ackrediterat. Därför är det lämpligt för enskilt vatten.
            Vårt lokala laboratorie erbjuder snabbare svarstider och
            direktkoppling till rådgivning.
          </p>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center packet-height">
        <v-card
          v-for="(test, index) in this.filterPaketTest"
          :key="index"
          width="300px"
          height="200px"
          class="ma-4"
        >
          <v-list
            class="d-flex flex-column justify-center ma-0 pa-0"
            id="testList"
          >
            <v-img
              id="testImage"
              :src="`http://localhost:4000/${test.image}`"
              height="150px"
              width="300px"
              name="testimage"
              class="ma-0 pa-0"
            ></v-img>
            <v-divider></v-divider>
            <div class="ma-2">
              <h2 class="Heading-2" id="testName">
                {{ test.testname }}
              </h2>
              <p class="caption">{{ test.short_description }}</p>
              <!-- <p id="testCategory">
                <strong>Kategori : </strong> {{ test.category }}
              </p> -->

              <p id="testPrice">Pris :{{ test.price }} SEK</p>
            </div>
            <div class="d-flex justify-center mb-2 mx-2 flex-row">
              <v-btn
                class="btnColor white--text ma-1"
                medium
                @click="moveToIndividual(test.slug, test)"
                >Läs mer</v-btn
              >
              <v-btn
                medium
                class="btnColor white--text ma-1"
                @click="increaseThecounterValue(test._id)"
                >köp</v-btn
              >
            </div>
          </v-list>
        </v-card>
      </v-row>
      <v-divider></v-divider>

      <!-- <v-divider></v-divider> -->

      <v-col cols="12" class="d-flex justify-center flex-row">
        <div class="">
          <v-row class="blue--text d-flex justify-center">
            <h3>Analyser styckvis, prisklass 1 <br />200 kr/st</h3>
            <!-- <p>{{ countStyckvisOne }}</p> -->
          </v-row>
          <v-col cols="12" class="d-flex flex-column justify-center">
            <div
              v-for="(test, index) in this.filterIndividuelStyckvis1"
              :key="index"
              :testId="test._id"
              class="d-flex white my-2 flex-row"
            >
              <v-col
                cols=""
                class="d-flex align-center justify-center ma-0 pa-0"
              >
                <p
                  class="amber white--text testbox d-flex align-center mr-2 ma-0 pa-0 justify-center"
                >
                  {{ test.short_description }}
                </p>
              </v-col>

              <v-col
                class="d-flex align-center justify-center ma-0 pa-0"
                cols=""
              >
                <p
                  class="d-flex align-center ma-0 pa-0 testname justify-center"
                >
                  {{ test.testname }}
                </p>
              </v-col>
              <v-col class="d-flex align-center justify-center" cols="">
                <v-btn
                  x-small
                  class="btnColor white--text"
                  @click="moveToIndividual(test.slug, test)"
                  >läs mer</v-btn
                >
              </v-col>
              <v-col class="d-flex align-center justify-center" cols="">
                <v-btn icon small @click="increaseThecounterValue(test._id)">
                  <v-icon>add_shopping_cart</v-icon>
                </v-btn>
              </v-col>
            </div>
          </v-col>
        </div>

        <div class="">
          <v-row class="blue--text d-flex justify-center my-4">
            <h3>Analyser styckvis, prisklass 2 <br />250 kr/st</h3>
          </v-row>
          <v-col cols="" class="d-flex flex-column justify-center">
            <div
              v-for="(test, index) in this.filterIndividuelStyckvis2"
              :key="index"
              class="d-flex white my-2 flex-row"
            >
              <v-col cols="" class="d-flex white align-center justify-center">
                <p
                  class="btnColor white--text testbox d-flex align-center mr-2 ma-0 pa-0 justify-center"
                >
                  {{ test.short_description }}
                </p>
              </v-col>
              <v-col
                class="d-flex align-center ma-0 pa-0 testname justify-center"
              >
                <p
                  class="d-flex align-center ma-0 pa-0 testname justify-center"
                >
                  {{ test.testname }}
                </p>
              </v-col>
              <v-col class="d-flex align-center justify-center">
                <v-btn
                  x-small
                  class="btnColor white--text"
                  @click="moveToIndividual(test._id, test)"
                  >läs mer</v-btn
                >
              </v-col>
              <v-col class="d-flex align-center justify-center">
                <v-btn icon small @click="increaseThecounterValue(test._id)">
                  <v-icon>add_shopping_cart</v-icon>
                </v-btn>
              </v-col>
            </div>
          </v-col>
        </div>
      </v-col>

      <v-divider></v-divider>

      <v-row class="d-flex justify-center mt-6">
        <v-col cols="10">
          <h1 class="d-flex justify-center text--black">
            Ackrediterade analyser för enskilt dricksvatten
          </h1>
          <h2 class="bread font-weight-light blue--text">
            Analyser för dig som önskar få en bedömning från ett ackrediterat
            laboratorium eller analysera specifika parametrar så som metaller,
            samt räkna bakterier.
          </h2>
        </v-col>
      </v-row>
      <v-col class="d-flex justify-center packet-height">
        <v-card
          v-for="(test, index) in this.filterAckrediteradePaketTester"
          :key="index"
          width="280px"
          height="200px"
          class="ma-4"
        >
          <v-list
            class="d-flex flex-column justify-center ma-0 pa-0"
            id="testList"
          >
            <v-img
              id="testImage"
              :src="`http://localhost:4000/${test.image}`"
              height="150px"
              width="300px"
              name="testimage"
              class="ma-0 pa-0"
            ></v-img>
            <v-divider></v-divider>
            <div class="ma-2">
              <h2 class="Heading-2" id="testName">
                {{ test.testname }}
              </h2>
              <p class="caption">{{ test.short_description }}</p>
              <!-- <p id="testCategory">
                <strong>Kategori : </strong> {{ test.category }}
              </p> -->

              <p id="testPrice">Pris :{{ test.price }} SEK</p>
            </div>
            <div class="d-flex justify-center mb-2 mx-2 flex-row">
              <v-btn
                class="btnColor white--text ma-1"
                @click="moveToIndividual(test.slug, test)"
                >Läs mer</v-btn
              >
              <v-btn
                class="btnColor white--text ma-1"
                @click="increaseThecounterValue(test._id)"
                >köp</v-btn
              >
            </div>
          </v-list>
        </v-card>
      </v-col>
      <v-divider></v-divider>
      <v-row class="blue--text d-flex justify-center my-4">
        <h3>Ackrediterade analyser styckvis</h3>
      </v-row>
      <v-col class="d-flex flex-column justify-center">
        <div
          v-for="(test, index) in this.filterAckrediteradeIndividuelStyckvis"
          :key="index"
          :testId="test._id"
          class="d-flex white flex-row my-2"
        >
          <v-col cols="2" class="d-flex align-center ma-0 pa-0 justify-start">
            <p
              class="green white--text ma-0 pa-0 testbox d-flex align-center justify-center"
            >
              {{ test.short_description }}
            </p>
          </v-col>
          <v-col class="d-flex align-center justify-center ma-0 pa-0" cols="1">
            <p class="justify-center d-flex align-center">
              {{ test.testname }}
            </p>
          </v-col>
          <v-col class="d-flex align-center justify-center" cols="1">
            <v-btn
              x-small
              class="btnColor red justify-center white--text"
              @click="moveToIndividual(test.slug, test)"
              >äs mer</v-btn
            >
          </v-col>
          <v-col class="d-flex align-center justify-center" cols="1">
            <v-btn icon small @click="increaseThecounterValue(test._id)">
              <v-icon>add_shopping_cart</v-icon>
            </v-btn>
          </v-col>
        </div>
      </v-col>
      <v-col class="d-flex align-center justify-center">
        <v-btn icon large @click="backToTheTop">
          <v-icon>arrow_upward</v-icon>
        </v-btn>
      </v-col>
    </v-flex>
  </v-main>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "EnsikltDricksVatten",
  data() {
    return {
      isChecked: false,
      //   clicked: false,
      countStyckvisOne: 0,
    };
  },
  mounted() {
    this.$store.dispatch("tests/getTests");
    console.log(this.$root);
  },
  computed: {
    ...mapState(["tests"]),
    filterPaketTest() {
      return this.tests.tests.filter(
        (test) =>
          test.testtype === "Packet pris" &&
          test.category === "Enskilt dricksvatten"
      );
    },
    filterAckrediteradePaketTester() {
      return this.tests.tests.filter(
        (test) =>
          test.testtype === "Packet pris" &&
          test.category === "Ackrediterade analyser"
      );
    },
    filterIndividuelStyckvis1() {
      const inviduelStyckvis1 = this.tests.tests.filter(
        (test) =>
          test.testtype === "Analyser Styckvis 1" &&
          test.category === "Enskilt dricksvatten"
      );
      inviduelStyckvis1.map((test) => {
        test.isChecked = false;
      });
      return inviduelStyckvis1;
    },
    filterIndividuelStyckvis2() {
      return this.tests.tests.filter(
        (test) =>
          test.testtype === "Analyser styckvis 2" &&
          test.category === "Enskilt dricksvatten"
      );
    },
    filterAckrediteradeIndividuelStyckvis() {
      return this.tests.tests.filter(
        (test) =>
          test.testtype === "Styck Prov" &&
          test.category === "Ackrediterade analyser"
      );
    },
  },
  methods: {
    increaseThecounterValue(_id, value) {
      console.log(_id);
      this.$store.commit("tests/INCREASE_COUNT", _id);
      if (value) {
        this.countStyckvisOne++;
      } else {
        this.countStyckvisOne--;
      }
    },
    moveToIndividual(slug, test) {
      console.log(slug);
      this.$router.push({
        name: "TestStartsidan",
        params: { slug: slug, test },
      });
    },
    backToTheTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
.container {
  width: 80vw;
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.packet-height {
  min-height: 400px;
}

/* p {
  margin: 0;
  padding: 0;
} */

.test-text {
  font-size: 14px;
}

.white {
  background-color: white;
}
.blue {
  background-color: blue;
}
.bread {
  /* letter-spacing: 3px; */
  font-family: "Poppins", sans-serif;
  font-weight: lighter;
  font-size: 14px;
}

.testname {
  text-transform: capitalize;
}

.testbox {
  width: 55px;
  height: 55px;
  font-size: 24px;
}
</style>