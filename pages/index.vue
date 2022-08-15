<template lang="">
  <div class="text-center">
    <div v-if="$colorMode.value === 'dark'" class="dark-home-bg home-bg"></div>
    <div
      v-if="$colorMode.value === 'light'"
      class="light-home-bg home-bg"
    ></div>
    <p
      class="absolute font-thin w-[400px] top-1/2 left-28 text-xl_d translate-y-[-50%] text-left"
    >
      I am proactive, I am curious and intrepid. I love to help people through
      technology. <br />
      <span class="italic font-normal">I never stop learning.</span>
    </p>
    <div
      class="absolute colombian-section left-1/2 top-1/2 translate-x-[150%] translate-y-[0%]"
    >
      <div
        class="w-32 h-24 border-[1px] border-b-0 border-l-0 border-t-white-1 border-r-white-1 square"
      ></div>
    </div>
    <p
      class="absolute font-thin colombian-section left-1/2 top-1/2 translate-x-[140%] translate-y-[140%] text-center text-base_d"
    >
      I am a colombian<br />
      <span class="italic font-normal">Web Developer</span>
    </p>
    <ul
      class="absolute flex flex-col right-28 top-1/2 translate-y-[-50%] text-left text-xl_d italic font-extralight space-y-4"
    >
      <li class="item">Risk-taking</li>
      <li class="item">Innovative</li>
      <li class="item">Ambitious</li>
      <li class="item">Determined</li>
      <li class="item">Enthusiastic</li>
    </ul>
    <div class="absolute w-full h-36 bottom-28 logo-index logo-home"></div>
    <div
      class="absolute w-full h-36 bottom-28 logo-index logo-home-hover"
    ></div>

    <NuxtPage />
  </div>
</template>

<script setup></script>

<style lang="css" scoped>
.square::before,
.square::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #00010d;
}
.dark .square::before,
.dark .square::after {
  @apply bg-white;
}
.square::before {
  top: -2px;
  left: -4px;
}
.square::after {
  bottom: -4px;
  right: -2px;
}
.logo-index {
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
.logo-home {
  background-image: url("/images/cricadev-logo-home.png");
  transition: 1s ease-in-out all;
}
.logo-home-hover {
  background-image: url("/images/cricadev-logo-home-hover.png");
  pointer-events: none;
  opacity: 0;
  transition: 1s ease-in-out all;
  animation: logo-close 1s ease-in-out forwards;
}
.logo-home:hover {
  opacity: 0;
  transition: 0.5s ease-in-out all;
}
.logo-home:hover ~ .logo-home-hover {
  opacity: 1;
  z-index: 2;
  transition: 0.5s ease-in-out all;
  animation: logo-open 0.5s ease-in-out forwards;
}
@keyframes logo-open {
  0% {
    transform: translateX(0%) scale(0);
  }
  100% {
    transform: translateX(0%) scale(1);
  }
}
@keyframes logo-close {
  0% {
    transform: translateX(0%) scale(1);
  }
  100% {
    transform: translateX(0%) scale(0);
  }
}

/*.pattern {
  background-image: linear-gradient(
      90deg,
      #f6f6f6 0%,
      #f6f6f6 30%,
      transparent 31%,
      transparent 69%,
      #f6f6f6 70%,
      #f6f6f6 100%
    ),
    url("../images/cricadev-home.png");
}*/
.home-bg {
  width: 50%;
  margin: 0 auto;
  height: 100vh;
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
  transform: translateX(5%);
}
.light-home-bg {
  background-image: linear-gradient(
      90deg,
      #f6f6f6 0%,
      #f6f6f6 10%,
      transparent 50%
    ),
    url("@/images/lightMode-cricadev.png");
}
.dark-home-bg {
  background-image: linear-gradient(
      90deg,
      #00010d 0%,
      #00010d 10%,
      transparent 50%
    ),
    url("@/images/darkMode-cricadev.png");
}
</style>
