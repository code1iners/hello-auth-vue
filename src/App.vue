<template>
  <div id="main_nav">
    <router-link class="nav_item m" :to="{ name: 'Home' }">Home</router-link>
    <router-link class="nav_item m" :to="{ name: 'SignIn' }"
      >Sign in</router-link
    >
    <router-link class="nav_item m" :to="{ name: 'SignUp' }"
      >Sign up</router-link
    >
    <router-link class="nav_item m" :to="{ name: 'Me' }" v-if="me"
      >Me</router-link
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
    ...mapState("messages/", {
      showToast: (state) => state.showToast,
    }),
    ...mapState("members/", {
      me: (state) => state.me,
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
#main_nav > .router-link-exact-active {
  color: #13a086;
}
.contents {
  display: grid;
  z-index: 1;
}
.messages {
  width: 350px;
  margin-left: -175px;
  padding: 10px 30px;
  position: fixed;
  z-index: 2;
  top: 10%;
  left: 50%;
  justify-self: end;
  background-color: white;
  border: 1px solid #171717;
  border-radius: 30px;
}
</style>
