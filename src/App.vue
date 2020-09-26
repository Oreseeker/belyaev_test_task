<template>
  <div id="app">
    <div class="wrapper">
      <stopwatch v-for="item in numberOfStopwatches" :key="item" />
      <add-stopwatch-box @click="addPlayer" />
    </div>
  </div>
</template>

<script>
import Stopwatch from "./components/Stopwatch.vue";
import AddStopwatchBox from "./components/AddStopwatchBox.vue";
export default {
  name: "App",
  components: {
    Stopwatch,
    AddStopwatchBox
  },
  data() {
    return {
      numberOfStopwatches: 1
    };
  },
  methods: {
    addPlayer() {
      this.numberOfStopwatches++;
    }
  }
};
</script>

<style>
@font-face {
  font-family: "Gotham Pro";
  src: url("./assets/fonts/gotham_pro.ttf");
}
body {
  margin: 0;
  background-color:
}
#app {
  width: 100%;
}
.wrapper {
  margin: 0 auto;
  width: 1000px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
.stopwatch, .add-stopwatch-box {
  margin: 22px 25px;
}
</style>
