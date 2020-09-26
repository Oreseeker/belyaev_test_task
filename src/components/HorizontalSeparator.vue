<template>
  <div class="horizontal-separator" :style="{ 'border-color': color }"></div>
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
.horizontal-separator {
  border: 1px solid;
}
</style>
