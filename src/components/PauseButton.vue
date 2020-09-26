<template>
  <div class="pause-button" @click="$emit('click')">
    <div
      class="stick"
      :style="{ 'border-color': color }"
    ></div>
    <div
      class="stick"
      :style="{ 'border-color': color }"
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
.pause-button {
  height: 20px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  cursor: pointer;
  width: 20px;
}
.stick {
  border-left: 3px solid;
  height: 100%;
  margin-right: 3px;
  width: 0;
}
.stick:last-child {
  margin: 0;
}
</style>
