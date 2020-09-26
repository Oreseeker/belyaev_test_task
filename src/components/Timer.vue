<template>
  <div class="timer" :style="{ 'color': color }">
    <slot></slot>
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
.timer {
  font-family: "Gotham Pro";
  font-weight: 400;
  font-size: 22px;
  text-align: center;
}
</style>
