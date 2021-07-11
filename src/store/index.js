import { createStore } from "vuex";

export default createStore({
  modules: {
    members: {
      namespaced: true,
      state: {
        me: null,
      },
      mutations: {
        updateMe(state, member) {
          state.me = member;
        },
      },
    },
    messages: {
      namespaced: true,
      state: {
        showToast: false,
        toastMessage: "",
      },
      mutations: {
        triggerToast(state) {
          state.showToast = true;
          setTimeout(() => {
            state.showToast = false;
          }, 3000);
        },
        updateToastMessage(state, message) {
          state.toastMessage = message;
        },
      },
    },
  },
});
