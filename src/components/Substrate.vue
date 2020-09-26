<template>
  <div class="substrate" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    classes: {
      type: Object,
      required: false
    }
  }
};
</script>

<style scoped>
.substrate {
  background-color: #696969;
}
</style>
