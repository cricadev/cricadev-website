<template lang="">
  <div>
    <button @click="toggleColorMode">toggle</button>
  </div>
</template>
<script setup>
const colorMode = useColorMode();
colorMode.preference;
const toggleColorMode = () => {
  colorMode.preference === "light"
    ? (colorMode.preference = "dark")
    : (colorMode.preference = "light");
};
</script>
<style lang="css"></style>
