<template>
  <div class="add-stopwatch-box" @click="$emit('click')">
      <substrate>
          <div class="plus">
              +
          </div>
      </substrate>
  </div>
</template>

<script>
import Substrate from "./Substrate.vue";
export default {
    components: {
        Substrate
    }
}
</script>

<style scoped>
.add-stopwatch-box {
    width: 225px;
    height: 120px;
    cursor: pointer;
}
.substrate {
    height: 100%;
    width: 100%;
    color: #9E9E9E;
    font-size: 50px;
    font-weight: bold;
    position: relative;
}
.plus {
    position: absolute;
    font-size: 50px;
    font-weight: bold;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>