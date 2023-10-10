<template>
  <Transition>
    <div class="banner" v-if="!toggle">
      <span>This site is being built, projects and blogs are still pending...</span>
      <Icon name="material-symbols:close" @click="closeBanner"></Icon>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const toggle = ref(false);
const closeBanner = () => {
  toggle.value = true
};
</script>

<style lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.banner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;

  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #5aaf98;
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
