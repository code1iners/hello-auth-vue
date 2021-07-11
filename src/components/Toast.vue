<template>
  <teleport to=".messages">
    <div class="toast">{{ toastMessage }}</div>
  </teleport>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Toast",
  computed: {
    ...mapState("messages/", {
      toastMessage: (state) => state.toastMessage,
    }),
  },
};
</script>

<style></style>
