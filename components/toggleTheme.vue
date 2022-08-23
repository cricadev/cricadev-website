<template lang="">
  <div>
    <div class="fixed z-20 bottom-16 right-16 parent-toggle lg:right-8">
      <input
        type="checkbox"
        class="bg-white toggle dark:bg-black"
        id="checkbox"
        @change="
          setColorTheme($colorMode.preference === 'dark' ? 'light' : 'dark')
        "
      />
      <div v-if="$colorMode.value === 'light'">
        <Icon icon="akar-icons:sun-fill" class="moon svg" />
      </div>
      <div v-if="$colorMode.value === 'dark'">
        <Icon icon="akar-icons:moon-fill" class="sun svg" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Icon } from "@iconify/vue";

type Theme = "light" | "dark";

const colorMode = useColorMode();
const setColorTheme = (newTheme: Theme) => {
  colorMode.preference = newTheme;
};
</script>
<style lang="css">
.parent-toggle {
  height: 80px;
  width: 40px;
}
input {
  appearance: none;
  border: 2px solid #5aaf98;
  border-radius: 20px;
  display: block;
  position: relative;
  top: 0;
  left: 0;
  width: 40px;
  height: 80px;
  margin: 0;
}
.sun {
  top: 0;
  transform: translateY(0%) scale(0.75);

  color: #00010d;
  animation: fade-sun 0.5s ease-in-out forwards;
}

.moon {
  bottom: 0;
  transform: translateY(0%) scale(0.75);
  color: #f6f6f6;
  animation: fade-moon 0.5s ease-in-out forwards;
}
@keyframes fade-sun {
  0% {
    transform: translateY(100%) scale(0.75);
  }
  100% {
    transform: translateY(0%) scale(0.75);
  }
}
@keyframes fade-moon {
  0% {
    transform: translateY(-100%) scale(0.75);
  }
  100% {
    transform: translateY(0%) scale(0.75);
  }
}

.svg {
  position: absolute;
  box-sizing: content-box;
  padding: 10px;
  width: 20px;
  height: 20px;
  transition: 0.2s all ease-in;
  pointer-events: none;
  background: #5aaf98;
  border-radius: 50%;
}

.fade {
  opacity: 0;
}
</style>
