<template>
  <div class="stopwatch">
    <substrate :classes="{ 'stopwatch-main': true, 'white-text': status === 'started' }">
      <div class="stopwatch__timer-block">
        <timer>{{ timeElapsed() }} </timer>
      </div>
      <horizontal-separator />
      <div class="stopwatch__buttons">
        <pause-button v-if="status == 'started'" @click="pauseTimer" />
        <play-button v-else @click="startTimer" />
        <stop-button @click="stopTimer" />
      </div>
    </substrate>
  </div>
</template>

<script>
import Substrate from "./Substrate.vue";
import HorizontalSeparator from "./HorizontalSeparator.vue";
import PlayButton from "./PlayButton.vue";
import StopButton from "./StopButton.vue";
import PauseButton from "./PauseButton.vue";
import Timer from "./Timer.vue";

export default {
  components: {
    Substrate,
    HorizontalSeparator,
    StopButton,
    PlayButton,
    PauseButton,
    Timer
  },
  data() {
    return {
      time: 0,
      status: "stopped",
      timer: null
    };
  },
  methods: {
    startTimer() {
      this.status = "started";
      this.timer = setInterval(() => { this.time++; }, 1000);
    },
    pauseTimer() {
      this.status = "paused";
      clearInterval(this.timer);
    },
    stopTimer() {
      if (this.status == "stopped") {
        return;
      }
     clearInterval(this.timer);
      this.status = "stopped";
      this.time = 0;
    },
    timeElapsed() {
      let hours = Math.floor(this.time/60**2);
      let minutes = Math.floor((this.time - hours*60**2)/60);
      let seconds = (this.time - hours*60**2 - minutes*60)
      if (hours === 0 && minutes == 0) {
        return seconds;
      }
      else if ( hours === 0 && minutes !==0) {
        return  minutes + ":" + seconds;
      }
      else {
        return  hours +  ":" + minutes + ":" + seconds;
      }
    }
  },
  computed: {

  }
};

</script>

<style scoped>
.stopwatch-main {
  width: 225px;
  height: 120px;
}
.timer {
  padding: 22px 0 20px 0;
  line-height: 18px;
  margin: 0 auto;
}
.stopwatch__buttons {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  box-sizing: border-box;
}
.pause-button {
  margin-right: 52px;
}
.play-button {
  margin-right: 52px;
}
.white-text {
  color: white;
}
</style>
