<template>
  <v-main>
    <v-row class="d-flex justify-center">
      <v-col cols="6">
        <v-card>
          <v-row class="d-flex justify-end mr-2">
            <v-icon @click="closeModal()" class="closeModal" large
              >close</v-icon
            >
          </v-row>
          <form enctype="multipart/form-data">
            <v-row class="d-flex flex-column justify-center align-center">
              <v-col cols="9">
                <!-- <input type="text" v-model="testname" />
                <select v-model="category">
                  <option value="">select Category</option>
                  <option value="Ackrediterade analyser">
                    Ackrediterade analyser
                  </option>
                  <option value="Enskilt dricksvatten">
                    Enskilt dricksvatten
                  </option>
                  <option value="avloppsvatten och badvatten">
                    avloppsvatten och badvatten
                  </option>
                </select>
                <select v-model="testtype">
                  <option value="">select Category</option>
                  <option value="Packet pris">packet pris</option>
                  <option value="styckvis 1">styckvis1</option>
                  <option value="styckvis 2">styckvis2</option>
                  <option value="ovriga priser">ovriga priser</option>
                  <option value="styck prov">styck prov</option>
                </select>
                <input type="text" v-model="price" />

                <input type="file" ref="file" @change="selectFile" /> -->
                <!-- <textarea v-model="description" cols="30" rows="5"></textarea> -->
                <v-text-field
                  v-model="testname"
                  dense
                  outlined
                  label="Test namm"
                  >Test Name</v-text-field
                >
                <v-select
                  :items="type1"
                  v-model="category"
                  dense
                  outlined
                  label="kategori"
                ></v-select>
                <v-select
                  :items="type2"
                  v-model="testtype"
                  dense
                  outlined
                  label="typ av tester"
                ></v-select>
                <v-text-field
                  v-model="price"
                  dense
                  outlined
                  label="Pris i SEK"
                ></v-text-field>
                <input type="file" ref="file" @change="selectFile" />
                <v-textarea
                  v-model="description"
                  dense
                  outlined
                  label="Description"
                  no-resize
                  rows="5"
                ></v-textarea>
                <v-btn dark @click.prevent="addTest()">Skapa test</v-btn>
              </v-col>
            </v-row>
          </form>
        </v-card>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      testname: "",
      type1: [
        "Ackrediterade analyser",
        "Enskilt dricksvatten",
        "avloppsvatten och badvatten",
      ],
      type2: [
        "Packet pris",
        "Analyser Styckvis 1",
        "Analyser styckvis 2",
        "Styck Prov",
        "övriga prover",
      ],
      category: "",
      testtype: "",
      description: "",
      price: "",
      image: "",
    };
  },
  props: ["showAddtest"],
  methods: {
    async addTest() {
      let formData = new FormData();
      formData.append("testname", this.testname);
      formData.append("category", this.category);
      formData.append("testtype", this.testtype);
      formData.append("description", this.description);
      formData.append("price", this.price);
      formData.append("image", this.image);

      console.log(formData);

      await this.$store.dispatch("tests/createNewTest", formData);
      this.$emit("closeAddTest");

      //   const newTest = {
      //     testname: this.testname,
      //     category: this.category,
      //     testtype: this.testtype,
      //     description: this.description,
      //     price: this.price,
      //     // image: this.image,
      //   };
      //   console.log(newTest);
      //   await this.$store.dispatch("tests/createNewTest", newTest);
      //   this.$emit("closeAddTest");

      //   (this.testname = ""),
      //     (this.category = ""),
      //     (this.testtype = ""),
      //     (this.description = ""),
      //     (this.price = "");
      // (this.image = "");
    },
    selectFile() {
      this.image = this.$refs.file.files[0];
    },
    closeModal() {
      this.$emit("closeAddTest");
    },
  },
};
</script>

<style scoped>
.closeModal {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.closeModal:hover,
.closeModal:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>