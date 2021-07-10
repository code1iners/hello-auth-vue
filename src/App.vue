<template>
  <div id="main_nav">
    <router-link class="nav_item m" :to="{ name: 'SignIn' }"
      >Sign in</router-link
    >
    <router-link class="nav_item m" :to="{ name: 'SignUp' }"
      >Sign up</router-link
    >
  </div>
  <div class="contents">
    <router-view />
  </div>
  <transition name="toast">
    <div v-if="showToast" class="messages"></div>
  </transition>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapState({
      showToast: (state) => state.showToast,
    }),
  },
};
</script>

<style>
#main_nav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
  border-bottom: 1px solid #171717;
}
.contents {
  display: grid;
}
.messages {
  width: 350px;
  margin-left: -175px;
  padding: 10px 30px;
  position: fixed;
  top: 10%;
  left: 50%;
  justify-self: end;
  background-color: white;
  border: 1px solid #171717;
  border-radius: 30px;
}
</style>
