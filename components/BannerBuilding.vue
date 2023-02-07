<template>
  <div class="banner" v-if="!toggle">
    <span
      >This site is being built, projects and blogs are still pending...</span
    >
    <Icon name="material-symbols:close" @click="closeBanner"></Icon>
  </div>
</template>

<script setup lang="ts">
const toggle = ref(false);
const closeBanner = () => {
  toggle.value = !toggle.value;
};
</script>

<style lang="scss">
.banner {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;

  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #5aaf98;
  opacity: 0.8;
  color: #ffffff;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
  span {
    padding: 0.5rem;

    border-radius: 0.5rem;
  }
}
</style>
