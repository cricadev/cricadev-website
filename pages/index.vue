<template lang="">
  <div
    class="grid w-screen h-screen min-h-screen grid-cols-12 grid-rows-6 home lg:grid"
  >
    <div
      v-if="$colorMode.value === 'dark'"
      class="dark-home-bg home-bg lg:hidden"
    ></div>
    <div
      v-if="$colorMode.value === 'light'"
      class="light-home-bg home-bg lg:hidden"
    ></div>
    <div class="line-container lg:hidden">
      <div class="line-1 line lg:hidden"></div>
      <div class="line-2 line lg:hidden"></div>
      <div class="figure-1 figure lg:hidden"></div>
      <div class="figure-2 figure lg:hidden"></div>
    </div>
    <div class="home-figure lg:hidden">
      <p class="font-thin text-center text-base_d">
        I am a colombian<br />
        <span class="italic font-normal">Web Developer</span>
      </p>
    </div>

    <p
      class="font-thin leading-tight text-left text-xl_d home-paragraph lg:hidden"
    >
      I am proactive, I am curious and intrepid. I love to help people through
      technology. <br />
      <span class="italic font-normal">I never stop learning.</span>
    </p>
    <ul
      class="flex flex-col gap-2 italic text-left text-xl_d font-extralight home-list lg:hidden"
    >
      <li class="item">Risk-taking</li>
      <li class="item">Innovative</li>
      <li class="item">Ambitious</li>
      <li class="item">Determined</li>
      <li class="item">Enthusiastic</li>
    </ul>

    <div
      class="flex justify-center w-full mx-auto space-x-4 text-center cricadev-logo xl:scale-75 2xl:scale-90 lg:scale-100 md:scale-75 md:space-x-16 md:translate-x-0 xs:scale-50 sm:translate-x-[-5%] sm:space-x-32 sm:scale-50 sm:translate-y-[-10%]"
    >
      <div class="flex space-x-4 cri">
        <img src="../images/C.png" alt="" class="c-1 letter" />
        <img src="../images/R.png" alt="" class="r-1 letter" />
        <img src="../images/I.png" alt="" class="i-1 letter" />
      </div>
      <div class="flex space-x-4 ca">
        <img src="../images/C.png" alt="" class="c letter" />
        <img src="../images/A.png" alt="" class="a letter" />
      </div>
      <div class="flex space-x-4 dev">
        <img src="../images/D.png" alt="" class="d letter" />
        <img src="../images/E.png" alt="" class="e letter" />
        <img src="../images/V.png" alt="" class="v letter" />
      </div>
    </div>
    <div
      class="flex justify-center w-full mx-auto space-x-16 text-center cricadev-logo-hover xl:scale-75 xl:space-x-48 2xl:scale-90 lg:flex-col lg:items-center lg:space-x-0 lg:scale-100 lg:space-y-4 md:scale-75 sm:scale-50"
    >
      <div
        class="flex space-x-4 group-1 xl:space-x-20 xl:translate-x-[-22%] lg:translate-x-0 lg:space-x-4 sm:space-x-12 sm:translate-x-[-7%]"
      >
        <div class="flex space-x-4 cri-2">
          <img src="../images/C.png" alt="" class="c letter" />
          <img src="../images/R.png" alt="" class="r letter" />
          <img src="../images/I.png" alt="" class="i letter" />
        </div>
        <div class="flex space-x-4 stian">
          <img src="../images/S.png" alt="" class="s letter" />
          <img src="../images/T.png" alt="" class="t letter" />
          <img src="../images/I.png" alt="" class="i letter" />
          <img src="../images/A.png" alt="" class="a letter" />
          <img src="../images/N.png" alt="" class="n letter" />
        </div>
      </div>
      <div
        class="flex space-x-4 group-2 xl:space-x-20 xl:translate-x-[-15%] lg:translate-x-0 lg:space-x-4 sm:space-x-20 sm:translate-x-[-15%]"
      >
        <div class="flex space-x-4 ca-2">
          <img src="../images/C.png" alt="" class="c letter" />
          <img src="../images/A.png" alt="" class="a letter" />
        </div>
        <div class="flex space-x-4 sallas">
          <img src="../images/S.png" alt="" class="s letter" />
          <img src="../images/A.png" alt="" class="a letter" />
          <img src="../images/L.png" alt="" class="l letter" />
          <img src="../images/L.png" alt="" class="l letter" />
          <img src="../images/A.png" alt="" class="a letter" />
          <img src="../images/S.png" alt="" class="s letter" />
        </div>
      </div>
    </div>
    <div class="wrap-tablet">
      <div
        v-if="$colorMode.value === 'dark'"
        class="dark-home-bg home-bg lg:block"
      ></div>
      <div
        v-if="$colorMode.value === 'light'"
        class="light-home-bg home-bg"
      ></div>
      <div class="line-container">
        <div class="line-1 line"></div>
        <div class="line-2 line"></div>
        <div class="figure-1 figure"></div>
        <div class="figure-2 figure"></div>
      </div>
      <div class="home-figure">
        <p class="font-thin text-center text-base_d lg:text-base_t">
          I am a colombian<br />
          <span class="italic font-normal">Web Developer</span>
        </p>
      </div>
    </div>
    <div class="wrap-desktop">
      <p class="font-thin leading-tight text-left text-xl_d home-paragraph">
        I am proactive, I am curious and intrepid. I love to help people through
        technology. <br />
        <span class="italic font-normal">I never stop learning.</span>
      </p>
      <ul
        class="flex flex-col gap-2 italic text-left text-xl_d font-extralight home-list"
      >
        <li class="item">Risk-taking</li>
        <li class="item">Innovative</li>
        <li class="item">Ambitious</li>
        <li class="item">Determined</li>
        <li class="item">Enthusiastic</li>
      </ul>
    </div>

    <NuxtPage />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.home {
  place-items: center;
  @media (max-width: 1100px) {
    grid-template-rows: 100vh 80vh;
    grid-template-columns: repeat(3, 1fr);
  }
}
.wrap-desktop {
  display: none;

  @media (max-width: 1100px) {
    display: grid;
    grid-column: 1/4;
    grid-row: 2/3;
    height: 100%;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);

    place-items: center;
    place-content: center;
    .home-paragraph {
      grid-column: 2/3;
      grid-row: 1/2;
      text-align: center;
    }
    .home-list {
      grid-row: 3/4;
    }
  }
}
.wrap-tablet {
  display: none;
  @media (max-width: 1100px) {
    display: grid;
    grid-column: 1/4;
    grid-row: 1/2;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    height: 100vh;
    width: 100vw;

    .home-bg {
      height: 100%;
      width: 100%;
      transform: translateX(10%);
      grid-column: 1/5;
      grid-row: 1/5;
      @media (max-width: 1100px) {
        background-size: auto 100%;
        background-position: cover;
        transform: translateX(5%);
      }
    }
    .light-home-bg {
      background-image: linear-gradient(
          90deg,
          #f6f6f6 0%,
          transparent 5%,
          transparent 100%
        ),
        url("@/images/lightMode-cricadev.png");
    }
    .dark-home-bg {
      background-image: linear-gradient(
          90deg,
          #00010d 0%,

          transparent 5%,
          transparent 100%
        ),
        url("@/images/darkMode-cricadev.png");
    }
    .home-figure {
      grid-column: 4/5;
      grid-row: 2/4;
      place-self: center;
      padding-top: 200px;
    }
    .line-container {
      grid-column: 2/5;
      grid-row: 2/4;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(5, 1fr);

      .line-1 {
        grid-column: 4/5;
        grid-row: 3/4;
      }
      .line-2 {
        grid-column: 5/6;
        grid-row: 3/4;
      }
      .figure-1 {
        grid-column: 2 / 6;
        grid-row: 2 / 4;
        place-self: center;
      }
      .figure-2 {
        grid-column: 4 / 6;
        grid-row: 2 / 4;
        place-self: end center;
      }
    }
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
  @media (max-width: 1100px) {
    grid-column: 3/4;
    grid-row: 1/2;
  }
}
.home-list {
  grid-column: 11 / 12;
  grid-row: 3 / 5;
  transition: 1s ease-in-out all;
  animation: home-list-animation 1s ease-in-out forwards;
  @media (max-width: 1100px) {
    grid-column: 1/4;
    grid-row: 2/3;
  }
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
}
.cricadev-logo {
  position: absolute;
  z-index: 4;
  bottom: 15%;
  animation: logo-open 1s ease-in-out forwards;
}
.cricadev-logo-hover {
  position: absolute;
  z-index: 4;
  bottom: 15%;
  pointer-events: none;
  opacity: 0;
  animation: logo-close 1s ease-in-out forwards;
  transition: 1s ease-in-out all;
  @media (max-width: 1100px) {
    bottom: 5%;
  }
  @media (max-width: 800px) {
    bottom: 6%;
  }
}
.cricadev-logo:hover + .cricadev-logo-hover {
  animation: cricadev-logo-hover-animation 1s ease-in-out forwards;
  transition: 1s ease-in-out all;
}
.cricadev-logo:hover {
  animation: cricadev-logo-animation 1s ease-in-out forwards;
  transition: 1s ease-in-out all;
}
.cricadev-logo:hover > .cri {
  animation: cri-animation 0.5s ease-in-out forwards;
  @media (max-width: 1100px) {
    animation: cri-animation-tablet 0.5s ease-in-out forwards;
  }
}
.cricadev-logo:hover > .ca {
  animation: ca-animation 0.5s ease-in-out forwards;
  @media (max-width: 1100px) {
    animation: ca-animation-tablet 0.5s ease-in-out forwards;
  }
  @media (max-width: 639px) {
    animation: ca-animation-mobile 0.5s ease-in-out forwards;
  }
}
.cricadev-logo:hover > .dev {
  animation: dev-animation 0.5s ease-in-out forwards;
}
.cri {
  animation: cri-close-animation 1s ease-in-out forwards;
  @media (max-width: 1100px) {
    animation: cri-close-animation-tablet 1s ease-in-out forwards;
  }
}
.ca {
  animation: ca-close-animation 1s ease-in-out forwards;
  @media (max-width: 1100px) {
    animation: ca-close-animation-tablet 1s ease-in-out forwards;
  }
}
.stian {
  animation: stian-close-animation 1s ease-in-out forwards;
}
.sallas {
  animation: stian-close-animation 1s ease-in-out forwards;
}
.cricadev-logo:hover + .cricadev-logo-hover > .group-1 > .cri-2 {
  animation: cri-2-close-animation 1.3s ease-in-out forwards;
}
.cricadev-logo:hover + .cricadev-logo-hover > .group-1 > .stian {
  animation: stian-animation 1s ease-in-out forwards;
  @media (max-width: 1100px) {
    animation: stian-animation-tablet 1s ease-in-out forwards;
  }
}
.cricadev-logo:hover + .cricadev-logo-hover > .group-2 > .ca-2 {
  animation: ca-2-close-animation 1.3s ease-in-out forwards;
}
.cricadev-logo:hover + .cricadev-logo-hover > .group-2 > .sallas {
  animation: stian-animation 1s ease-in-out forwards;
  @media (max-width: 1100px) {
    animation: stian-animation-tablet 1s ease-in-out forwards;
  }
}
@keyframes stian-animation {
  0% {
    transform: translateX(100%);
    opacity: 0.2;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}
@keyframes stian-animation-tablet {
  0% {
    transform: translateX(100%);
    opacity: 0.2;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}

@keyframes stian-close-animation {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}

@keyframes cri-animation {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-179%);
  }
}
@keyframes cri-animation-tablet {
  0% {
    transform: translateX(0%) translateY(-5%);
  }
  100% {
    transform: translateX(25%) translateY(-5%);
  }
}
@keyframes cri-close-animation {
  0% {
    transform: translateX(-179%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes cri-close-animation-tablet {
  0% {
    transform: translateX(25%) translateY(-5%);
  }
  100% {
    transform: translateX(0) translateY(-5%);
  }
}
@keyframes cri-2-close-animation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes ca-animation {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(50%);
  }
}
@keyframes ca-animation-tablet {
  0% {
    transform: translateX(0) translateY(0%);
  }
  100% {
    transform: translateX(-110%) translateY(110%);
  }
}
@keyframes ca-animation-mobile {
  0% {
    transform: translateX(0) translateY(0%);
  }
  100% {
    transform: translateX(-230%) translateY(120%);
  }
}
@keyframes ca-close-animation {
  0% {
    transform: translateX(50%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes ca-close-animation-tablet {
  0% {
    transform: translateX(-110%) translateY(110%);
  }
  100% {
    transform: translateX(0) translateY(0%);
  }
}
@keyframes ca-2-close-animation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes dev-animation {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes logo-open {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes logo-close {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes cricadev-logo-animation {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
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
