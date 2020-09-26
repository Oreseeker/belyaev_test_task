<template>
  <div id="app">
    <div class="outter-wrapper">
      <div class="wrapper">
        <stopwatch v-for="item in $store.state.stopwatches" :key="item.id" :id="item.id" />
        <add-stopwatch-box @click="addStopwatch" />
      </div>
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
    addStopwatch() {
      this.numberOfStopwatches++;
      this.$store.dispatch("addStopwatch", {
        id: this.numberOfStopwatches,
        colorTheme: "#9e9e9e"
      });
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
  background-color: #353638;
}
#app {
  width: 100%;
  min-height: 100vh;
  display: table;
}
.outter-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.wrapper {
  margin: auto auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
}
.stopwatch,
.add-stopwatch-box {
  margin: 22px 25px;
}
@media screen and (min-width: 1024px) {
  .wrapper {
    width: 825px;
  }
}
@media screen and (max-width: 1024px) {
  .wrapper {
    width: 550px;
  }
}
@media screen and (max-width: 768px) {
  .wrapper {
    width: 275px;
  }
}
</style>
