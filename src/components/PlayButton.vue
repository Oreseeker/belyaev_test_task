<template>
  <div class="play-button">
    <div
      class="inner-layer"
      :style="{ 'background-color': color }"
      @click="$emit('click')"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.play-button {
  width: 20px;
  height: 17px;
  overflow: hidden;
}
.inner-layer {
  transform: rotate(-135deg) translateX(-50%);
  width: 26px;
  height: 26px;
  cursor: pointer;
}
</style>
