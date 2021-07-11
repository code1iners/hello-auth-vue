<template>
  <div id="me">
    <Toast v-if="showToast" />
    <transition name="fade" appear>
      <div class="data_container mt-2">
        <span class="mb">Id : {{ me.id }}</span>
        <span class="mb">Email : {{ me.email }}</span>
        <span>Username : {{ me.username }}</span>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Toast from "@/components/Toast.vue";

export default {
  name: "Me",
  components: {
    Toast,
  },
  computed: {
    ...mapState("messages/", {
      showToast: (state) => state.showToast,
      toastMessage: (state) => state.toastMessage,
    }),
    ...mapState("members/", {
      me: (state) => state.me,
    }),
  },
};
</script>

<style>
#me {
  width: 50%;
  justify-self: center;
}
.data_container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
