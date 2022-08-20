<template lang="">
  <div
    class="grid w-screen h-screen min-h-screen grid-cols-12 grid-rows-6 home"
  >
    <div v-if="$colorMode.value === 'dark'" class="dark-home-bg home-bg"></div>
    <div
      v-if="$colorMode.value === 'light'"
      class="light-home-bg home-bg"
    ></div>
    <p class="font-thin leading-tight text-left text-xl_d home-paragraph">
      I am proactive, I am curious and intrepid. I love to help people through
      technology. <br />
      <span class="italic font-normal">I never stop learning.</span>
    </p>
    <div class="line-container">
      <div class="line-1 line"></div>
      <div class="line-2 line"></div>
      <div class="figure-1 figure"></div>
      <div class="figure-2 figure"></div>
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

    <div class="space-x-4 cricadev-logo">
      <img src="../images/C.png" alt="" class="c letter" />
      <img src="../images/R.png" alt="" class="r letter" />
      <img src="../images/I.png" alt="" class="i letter" />
      <img src="../images/C.png" alt="" class="c letter" />
      <img src="../images/A.png" alt="" class="a letter" />
      <img src="../images/D.png" alt="" class="d letter" />
      <img src="../images/E.png" alt="" class="e letter" />
      <img src="../images/V.png" alt="" class="v letter" />
    </div>
    <div class="space-x-4 cricadev-logo-hover">
      <img src="../images/C.png" alt="" class="c letter" />
      <img src="../images/R.png" alt="" class="r letter" />
      <img src="../images/I.png" alt="" class="i letter" />
      <img src="../images/S.png" alt="" class="s letter" />
      <img src="../images/T.png" alt="" class="t letter" />
      <img src="../images/I.png" alt="" class="i letter" />
      <img src="../images/A.png" alt="" class="a letter" />
      <img src="../images/N.png" alt="" class="n letter" />
    </div>
    <!--<div class="absolute w-full h-36 bottom-28 logo-index logo-home"></div>
    <div
      class="absolute w-full h-36 bottom-28 logo-index logo-home-hover"
    ></div>-->
    <NuxtPage />
  </div>
</template>

<script setup></script>

<style lang="css" scoped>
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
  grid-column: 8 / 11;
  grid-row: 4 / 5;
  z-index: 2;
  place-self: center;
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
  position: relative;
  grid-column: 8 / 11;
  grid-row: 3 / 5;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  width: 100%;
  height: 100%;
  z-index: 2;
  transition: 1s ease-in-out all;
}

.line-1 {
  width: 50%;
  height: 2px;
  grid-column: 2 / 3;
  grid-row: 2/ 3;
  place-self: start;
  animation: grow 1s linear forwards;
  background: #00010d;
  animation-delay: 1s;
  opacity: 0;
}
.line-2 {
  width: 2px;
  height: 100%;
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  background: #00010d;

  animation: grow2 1s ease-in-out forwards;

  animation-delay: 2s;
  opacity: 0;
}
.dark .line-1 {
  background: #f6f6f6;
}
.dark .line-2 {
  background: #f6f6f6;
}
@keyframes grow {
  0% {
    width: 0;
    opacity: 1;
  }
  100% {
    width: 100%;
    opacity: 1;
  }
}
@keyframes grow2 {
  0% {
    height: 0;
    opacity: 1;
  }
  100% {
    height: 100%;
    opacity: 1;
  }
}
.figure {
  border-radius: 50%;
  background: #00010d;

  width: 10px;
  height: 10px;
}
.figure-1 {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
  place-self: center;
  animation: opacity-animation 0.2s ease-in-out forwards;
  animation-delay: 0.5s;
  opacity: 0;
}
.figure-2 {
  grid-column: 2 / 4;
  grid-row: 2 / 3;
  place-self: end center;

  animation: opacity-animation 0.2s ease-in-out forwards;
  animation-delay: 3s;
  opacity: 0;
}
.dark .figure {
  background: #f6f6f6;
}
@keyframes opacity-animation {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
.letter {
  display: inline;
} /*
.c {
  background-image: url("../images/C.png");
}
.r {
  background-image: url("../images/R.png");
}
.i {
  background-image: url("../images/I.png");
}
.a {
  background-image: url("../images/A.png");
}
.d {
  background-image: url("../images/D.png");
}
.e {
  background-image: url("../images/E.png");
}
.v {
  background-image: url("../images/V.png");
}
.s {
  background-image: url("../images/S.png");
}
.t {
  background-image: url("../images/T.png");
}
.l {
  background-image: url("../images/L.png");
}
.n {
  background-image: url("../images/N.png");
}
.cricadev-logo {
  grid-column: 1/13;
  grid-row: 5/6;
  width: 100%;
  height: 100%;
  display: grid;
  grid-auto-flow: column;
}*/
.cricadev-logo {
  position: absolute;
  z-index: 4;
  bottom: 15%;
  transition: 1s ease-in-out all;
}
.cricadev-logo-hover {
  position: absolute;
  z-index: 4;
  bottom: 15%;
  opacity: 1;
  pointer-events: none;
  opacity: 0;
  transition: 1s ease-in-out all;
}
.cricadev-logo:hover + .cricadev-logo-hover {
  animation: cricadev-logo-hover-animation 1s ease-in-out;
  transition: 1s ease-in-out all;
}
@keyframes cricadev-logo-hover-animation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
