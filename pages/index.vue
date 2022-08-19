<template lang="">
  <div
    class="grid w-screen h-screen min-h-screen grid-cols-12 grid-rows-6 home"
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
    <div class="line-container">
      <div class="line-1 line"></div>
      <div class="line-2 line"></div>
    </div>
    <div class="home-figure">
      <p class="font-thin text-center text-base_d">
        I am a colombian<br />
        <span class="italic font-normal">Web Developer</span>
      </p>
    </div>

    <ul
      class="flex flex-col gap-2 italic text-left text-xl_d font-extralight home-list"
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
  width: 100%;
  height: 100%;
  transform: translateX(3%);
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
}
.light-home-bg {
  background-image: linear-gradient(
      90deg,
      #f6f6f6 0%,
      #f6f6f6 20%,
      #f6f6f6 30%,
      transparent 40%
    ),
    url("@/images/lightMode-cricadev.png");
}
.dark-home-bg {
  background-image: linear-gradient(
      90deg,
      #00010d 0%,
      #00010d 20%,
      #00010d 30%,

      transparent 40%
    ),
    url("@/images/darkMode-cricadev.png");
}
.home {
  place-items: center;
}
.home-paragraph {
  grid-column: 2 / 5;
  grid-row: 3 / 5;
  z-index: 2;

  transition: 1s ease-in-out all;
  animation: home-paragraph-animation 1s ease-in-out forwards;
}
.home-figure {
  grid-column: 8 / 10;
  grid-row: 4 / 5;
  z-index: 2;
  place-self: end center;
  transition: 1s ease-in-out all;
  animation: home-figure-animation 1s ease-in-out forwards;
}
.home-list {
  grid-column: 11 / 12;
  grid-row: 3 / 5;
  transition: 1s ease-in-out all;
  animation: home-list-animation 1s ease-in-out forwards;
}
.line-container {
  grid-column: 8 / 10;
  grid-row: 4 / 5;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 100%;
  height: 100%;
  z-index: 2;
}
.line {
  background: #f6f6f6;

  animation: grow 1s linear forwards;
}
.line-1 {
  width: 100%;
  height: 1px;
  grid-column: 1 / 3;
  place-self: end;
}
.line-2 {
  width: 1px;
  height: 100%;
  grid-column: 3 / 4;
  grid-row: 1 / 3;
  place-self: end;
}
@keyframes grow {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
</style>
