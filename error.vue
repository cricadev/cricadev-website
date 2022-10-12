<template>
  <div
    class="grid w-full h-screen py-32 text-center place-items-center lg:py-24 xs:py-8"
  >
    <p class="absolute font-extrabold leading-[0.5] text-xl5_d z-10 opacity-5">
      Oops:(
      <br />
      <span class="font-normal text-xl2_d"> Page not found </span>
    </p>
    <div class="relative z-20">
      <img src="../images/404-bg.png" alt="" class="relative" />
      <div class="absolute top-0 left-0 z-10 grid w-full place-items-center">
        <div class="relative rotate-face">
          <img src="../images/face-img.png" alt="" class="relative" />
          <div class="waterdrop"></div>
        </div>
      </div>
    </div>
    <p class="relative z-20 font-bold text-base_t">
      It’s not you, it’s me. <br />
      <span class="relative z-20 font-extralight">Try this...</span>
    </p>

    <div class="z-20 flex flex-col items-center justify-center gap-2 w-60">
      <button @click="handleError" class="btn-green">Go Home</button>
      <button class="btn-border">Learn</button
      ><button class="btn-border">Test</button
      ><button class="btn-border">Chill</button>
    </div>
    <div
      class="fixed top-0 left-0 w-full h-24 bg-white dark:bg-black z-[9999] text-base_m lg-m:text-xl_t appear-from-top lg:h-20 xs:h-16 appear-menu"
    ></div>

    <NuxtPage />
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
  @apply font-bold text-white text-[0.9rem] bg-green2 px-8 py-3 rounded-lg w-full border-2 border-white dark:border-black transition-all;
  &:hover {
    @apply border-2 border-green2 text-green2 bg-[transparent] transition-all;
  }
}
.btn-border {
  @apply border-2 border-green2 text-green2 p-4 rounded-lg px-8 py-3 w-full transition-all;
  &:hover {
    @apply bg-green2  text-white transition-all;
  }
}
</style>
