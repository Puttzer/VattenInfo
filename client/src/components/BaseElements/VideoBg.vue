<template>
  <div>
      <video autoplay muted loop id="myVideo">
     <source src="@/assets/new_video.mp4" type="video/mp4" >
</video>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#myVideo {
position:absolute;
top:0;
  right: 0;
  bottom: 0;
  min-width: 100%; 
  opacity:0.7;
}

</style>