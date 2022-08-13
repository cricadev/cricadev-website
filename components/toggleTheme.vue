<template lang="">
  <div>
    <div class="absolute bottom-16 right-16 parent-toggle">
      <input
        type="checkbox"
        class="bg-white toggle dark:bg-black"
        id="checkbox"
        v-model="checked"
        @change="toggleColorMode"
      />
      <Icon
        icon="akar-icons:sun-fill"
        class="moon svg"
        :class="[
          { fade: checked === false },
          { 'fade-moon': checked === true },
        ]"
      />
      <Icon
        icon="akar-icons:moon-fill"
        class="sun svg"
        :class="[{ fade: checked === true }, { 'fade-sun': checked === false }]"
      />
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";

const checked = ref(false);

const colorMode = useColorMode();
colorMode.preference;
const toggleColorMode = () => {
  colorMode.preference === "light"
    ? (colorMode.preference = "dark")
    : (colorMode.preference = "light");
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
}

.moon {
  bottom: 0;
  transform: translateY(0%) scale(0.75);
  color: #f6f6f6;
}
.fade-moon {
  transform: translateY(-100%) scale(0.75);
  transition: 2s all ease-in-out;
  opacity: 1;
}
.fade-sun {
  transform: translateY(100%) scale(0.75);
  transition: 2s all ease-in-out;
  opacity: 1;
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
