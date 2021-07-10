<template>
  <teleport to=".messages">
    <div class="toast">{{ message }}</div>
  </teleport>
</template>

<script>
export default {
  name: "Toast",
  props: ["message"],
};
</script>

<style></style>
