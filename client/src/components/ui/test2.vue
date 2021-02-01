<template>
  <nav :class="{change_color: scrollPosition > 50}" v-scroll="handleScroll">
    <div class="logo">
      <img src="../assets/images/logo.png" alt="logo" />
      <button id="mobBtn" @click="displayList">
        <i class="fas fa-bars"></i>
      </button>
    </div>

    <ul class="navlist" id="mobList">
      <li>
        <a href>Home</a>
      </li>
      <li>
        <a href>About</a>
      </li>
      <li>
        <a href>Blog</a>
      </li>
      <li>
        <a href>Contact</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
 data: {
      scrollPosition = false
    },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  }
};
</script>

<style scoped>
.change_color {
  background-color: red;
}
</style