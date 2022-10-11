<template>
  <div class="grid w-full h-screen text-center place-items-center">
    <div class="relative">
      <img src="./images/404-bg.png" alt="" class="relative" />
      <div class="absolute top-0 left-0 z-10 grid w-full place-items-center">
        <div class="relative rotate-face">
          <img src="./images/face-img.png" alt="" class="relative" />
          <div class="waterdrop"></div>
        </div>
      </div>
    </div>
    <p class="font-bold text-base_t">
      It’s not you, it’s me. <br />
      <span class="font-extralight">Try this...</span>
    </p>
    <div class="flex flex-col items-center justify-center gap-2">
      <button @click="handleError" class="btn-green">Go Home</button>
      <button class="btn-border">Learn</button
      ><button class="btn-border">Test</button
      ><button class="btn-border">Chill</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });
</script>
<style lang="scss">
.rotate-face {
  animation: tilt-face 2s infinite;
  animation-delay: 2s;
  @keyframes tilt-face {
    //tilt face to the left and then to the right infinitely
    0% {
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(-15deg);
    }
    66% {
      transform: rotate(15deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
}
.waterdrop {
  position: absolute;
  top: 30%;
  right: 20%;
  width: 10px;
  height: 10px;
  border-radius: 100% 0% 100% 100%;
  margin: 0px;
  transform: rotate(-45deg);
  background: #c1e8eb;
  animation: drip 2s forwards;
  @keyframes drip {
    0% {
      transform: rotate(-45deg) translate(0px, 0px);
    }
    100% {
      transform: rotate(-45deg) translate(0px, 10px) scaleY(1.5) scaleX(1.3);
    }
  }
}
.btn-green {
  @apply font-bold text-white text-[0.9rem] bg-green2 px-8 py-2 rounded-lg w-full;
}
.btn-border {
  @apply border-2 border-green2 text-green2 p-4 rounded-lg px-8 py-2 w-full;
}
</style>
