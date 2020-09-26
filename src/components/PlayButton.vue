<template>
  <div
    class="play-button"
    :style="{ 'border-color': 'transparent transparent transparent ' + color }"
    @click="$emit('click')"
  ></div>
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
  cursor: pointer;
  border-style: solid;
  border-width: 8px 0 8px 20px;
  box-sizing: border-box;
}
</style>
