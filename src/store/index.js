import { createStore } from "vuex";

export default createStore({
  state: {
    showToast: false,
  },
  mutations: {
    triggerToast(state) {
      state.showToast = true;
      setTimeout(() => {
        state.showToast = false;
      }, 3000);
    },
  },
  actions: {},
  modules: {},
});
