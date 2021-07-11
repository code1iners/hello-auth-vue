<template>
  <div id="home">
    <transition name="fade" appear>
      <div class="links mt-2">
        <router-link class="nav_item mb" :to="{ name: 'SignUp' }"
          >Go Sign up</router-link
        >
        <router-link class="nav_item" :to="{ name: 'SignIn' }"
          >Go Sign in</router-link
        >
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
.links {
  display: flex;
  flex-direction: column;
}
</style>
