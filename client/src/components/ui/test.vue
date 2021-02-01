<template>
  <div class="container">
    <nav v-scroll="scrollPosition" :class="{change_color: scrollPosition > 50}">
      <a href="index.html" class="logo">TOURS.</a>
      <ul class="nav-list">
        <li>
          <a href="index.html" class="nav-link">Home</a>
        </li>
        <li>
          <a href="#" class="nav-link">Pricing</a>
        </li>
        <li>
          <a href="#" class="nav-link">Dates</a>
        </li>
        <li>
          <a href="#" class="nav-link">Testimonials</a>
        </li>
        <li>
          <a href="#" class="nav-link">Contact</a>
        </li>
      </ul>
      <a href="#" id="nav-cta">Book now</a>
    </nav>
  </div>
</template>

<script>
export default {
	name: 'Test',
  data() {
    return {
      scrollPosition: null
    };
  },
  //   methods: {
  //     scrollMe() {}
  //   }
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