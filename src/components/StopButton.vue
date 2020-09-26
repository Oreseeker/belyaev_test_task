<template>
  <div
    class="stop-button"
    @click="$emit('click')"
    :style="{ 'background-color': color }"
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
.stop-button {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
</style>
