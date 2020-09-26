<template>
  <div class="stopwatch">
    <substrate :classes="{ 'stopwatch-main': true }">
      <div class="stopwatch__timer-block">
        <timer :color="currentStopwatchStatus.colorTheme"
          >{{ timeElapsed() }}
        </timer>
      </div>
      <horizontal-separator
        :color="currentStopwatchStatus.colorTheme"
      />
      <div class="stopwatch__buttons">
        <pause-button
          v-if="status == 'started'"
          @click="pauseTimer"
          :color="currentStopwatchStatus.colorTheme"
        />
        <play-button
          v-else
          @click="startTimer"
          :color="currentStopwatchStatus.colorTheme"
        />
        <stop-button
          @click="stopTimer"
          :color="currentStopwatchStatus.colorTheme"
        />
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
  props: {
    id: {
      required: true,
      type: Number
    }
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
      this.timer = setInterval(() => {
        this.time++;
      }, 1000);
      let currentStatus = { id: this.id, colorTheme: "#FFFFFF" };
      this.$store.dispatch("changeStopwatchStatus", currentStatus);
    },
    pauseTimer() {
      this.status = "paused";
      clearInterval(this.timer);
      const currentStatus = { id: this.id, colorTheme: "#9e9e9e" };
      this.$store.dispatch("changeStopwatchStatus", currentStatus);
    },
    stopTimer() {
      if (this.status == "stopped") {
        return;
      }
      const currentStatus = { id: this.id, colorTheme: "#9e9e9e" };
      this.$store.dispatch("changeStopwatchStatus", currentStatus);
      clearInterval(this.timer);
      this.status = "stopped";
      this.time = 0;
    },
    timeElapsed() {
      let hours = Math.floor(this.time / 60 ** 2);
      let minutes = Math.floor((this.time - hours * 60 ** 2) / 60);
      let seconds = this.time - hours * 60 ** 2 - minutes * 60;
      if (hours === 0 && minutes == 0) {
        return seconds;
      } else if (hours === 0 && minutes !== 0) {
        return minutes + ":" + seconds;
      } else {
        return hours + ":" + minutes + ":" + seconds;
      }
    }
  },
  computed: {
    currentStopwatchStatus() {
      const element = this.$store.state.stopwatches.find(el => {
        return el.id == this.id;
      });
      return element;
    }
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
</style>
