<template>
  <div class="play-button" @click="$emit('click')">
      <div class="inner-layer"></div>  
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.play-button {
    width: 20px;
    height: 17px;
    overflow: hidden;
}
.inner-layer {
    background-color: #9E9E9E;
    transform: rotate(-135deg) translateX(-50%);
    width: 26px;
    height: 26px;
}
</style>