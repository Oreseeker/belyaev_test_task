import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stopwatches: [
      {
        id: 1,
        colorTheme: "#9e9e9e"
      }
    ]
  },
  mutations: {
    CHANGE_STOPWATCH_STATUS(state, stopwatchStatus) {
      const id = stopwatchStatus.id
      const el = state.stopwatches.find(el => {return el.id === id});
      el.colorTheme = stopwatchStatus.colorTheme;
    },
    ADD_STOPWATCH(state, stopwatchStatus) {
      state.stopwatches.push(stopwatchStatus);
    }
  },
  actions: {
    changeStopwatchStatus(state, stopwatchStatus) {
      state.commit("CHANGE_STOPWATCH_STATUS", stopwatchStatus);
    },
    addStopwatch(state, stopwatchStatus) {
      state.commit("ADD_STOPWATCH", stopwatchStatus);
    }
  },
  getters: {
    currentStopwatchStatus(state) {
      return (id) => {
        const element = state.stopwatches.find(el => { el.id === id });
        return element;
      };
    }
  }
});
