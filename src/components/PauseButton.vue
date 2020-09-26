<template>
  <div class="pause-button" @click="$emit('click')">
      <div class="stick"></div>
      <div class="stick"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.pause-button   {
    height: 20px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
}
.stick {
    border-left: 3px solid #9E9E9E;
    height: 100%;
    margin-right: 3px;
    width: 0;
}
.stick:last-child {
    margin: 0;
}
</style>