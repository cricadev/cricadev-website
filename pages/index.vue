<template lang="">
  <div
    class="grid w-screen h-screen min-h-screen grid-cols-12 grid-rows-6 overflow-hidden"
  >
    <div v-if="$colorMode.value === 'dark'" class="dark-home-bg home-bg"></div>
    <div
      v-if="$colorMode.value === 'light'"
      class="light-home-bg home-bg"
    ></div>
    <p class="font-thin text-left text-xl_d home-paragraph">
      I am proactive, I am curious and intrepid. I love to help people through
      technology. <br />
      <span class="italic font-normal">I never stop learning.</span>
    </p>
    <div class="home-figure">
      <div class="colombian-section">
        <div
          class="border-[1px] border-b-0 border-l-0 border-t-white-1 border-r-white-1 square"
        ></div>
      </div>
      <p class="font-thin text-center text-base_d">
        I am a colombian<br />
        <span class="italic font-normal">Web Developer</span>
      </p>
    </div>
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

.home-bg {
  grid-column: 1 / 13;
  grid-row: 1 / 7;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
.light-home-bg {
  background-image: linear-gradient(
      90deg,
      #f6f6f6 0%,
      #f6f6f6 10%,
      transparent 100%
    ),
    url("@/images/lightMode-cricadev.png");
}
.dark-home-bg {
  background-image: linear-gradient(
      90deg,
      #00010d 0%,
      #00010d 10%,
      transparent 100%
    ),
    url("@/images/darkMode-cricadev.png");
}
.home-paragraph {
  grid-column: 2 / 5;
  grid-row: 3 / 4;
  transition: 1s ease-in-out all;
  animation: home-paragraph-animation 1s ease-in-out forwards;
}
</style>
