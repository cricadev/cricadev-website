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
    <div class="icon-appear-2 lg:hidden">
      <span
        class="absolute font-light uppercase bottom-10 text-green text-base_t xs:text-sm_m xs:font-bold lg:hidden"
        >Click it!</span
      >

      <Icon
        icon="akar-icons:arrow-forward"
        :rotate="1"
        :verticalFlip="true"
        class="z-20 w-8 h-8 mx-auto text-center text-green xs:w-6 xs:h-6 lg:hidden"
      />
    </div>
    <div
      class="left-0 z-10 justify-center hidden w-full mx-auto space-x-2 xs:bottom-20 lg:absolute lg:flex xss:bottom-20 cricadev-mobile lg:bottom-32"
    >
      <img src="../images/C.png" alt="" class="c-1 letter" />
      <img src="../images/R.png" alt="" class="r-1 letter" />
      <img src="../images/I.png" alt="" class="i-1 letter" />
      <img src="../images/C.png" alt="" class="c letter" />
      <img src="../images/A.png" alt="" class="a letter" />
      <img src="../images/D.png" alt="" class="d letter" />
      <img src="../images/E.png" alt="" class="e letter" />
      <img src="../images/V.png" alt="" class="v letter" />
    </div>
    <div
      class="flex justify-center w-full mx-auto space-x-4 text-center cricadev-logo xl:scale-75 2xl:scale-90 lg:scale-100 lg:hidden md:scale-75"
    >
      <div class="flex space-x-4 cri xs:absolute">
        <img src="../images/C.png" alt="" class="c-1 letter" />
        <img src="../images/R.png" alt="" class="r-1 letter" />
        <img src="../images/I.png" alt="" class="i-1 letter" />
      </div>
      <div class="flex space-x-4 ca">
        <img src="../images/C.png" alt="" class="c letter" />
        <img src="../images/A.png" alt="" class="a letter" />
      </div>
      <div class="flex space-x-4 xs:translate-x-[-10%]">
        <img src="../images/D.png" alt="" class="d letter" />
        <img src="../images/E.png" alt="" class="e letter" />
        <img src="../images/V.png" alt="" class="v letter" />
      </div>
    </div>
    <div
      class="flex justify-center w-full mx-auto space-x-16 text-center cricadev-logo-hover xl:scale-75 xl:space-x-48 2xl:scale-90 lg:flex-col lg:items-center lg:space-x-0 lg:scale-100 lg:space-y-4 md:scale-75 xs:translate-y-0 xs:scale-100 xs:space-x-0 xs:translate-x-[-5%] lg:hidden"
    >
      <div
        class="flex space-x-4 group-1 xl:space-x-20 xl:translate-x-[-22%] lg:translate-x-0 lg:space-x-4 sm:space-x-12 sm:translate-x-[-7%] xs:space-x-0"
      >
        <div class="flex space-x-4 cri-2 xs:scale-[.4]">
          <img src="../images/C.png" alt="" class="c letter" />
          <img src="../images/R.png" alt="" class="r letter" />
          <img src="../images/I.png" alt="" class="i letter" />
        </div>
        <div class="flex space-x-4 stian xs:scale-[.4]">
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
        <div class="flex space-x-4 ca-2 xs:scale-[.4]">
          <img src="../images/C.png" alt="" class="c letter" />
          <img src="../images/A.png" alt="" class="a letter" />
        </div>
        <div class="flex space-x-4 sallas xs:scale-[.4]">
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

    <div class="overflow-auto wrap-desktop text-xl_t xs:text-base_m">
      <p class="font-thin leading-tight text-left home-paragraph">
        I am proactive, I am curious and intrepid. I love to help people through
        technology. <br />
        <span class="italic font-normal">I never stop learning. </span>
      </p>
      <ul
        class="flex flex-col gap-2 italic text-left font-extralight home-list"
      >
        <li class="item">Risk-taking</li>
        <li class="item">Innovative</li>
        <li class="item">Ambitious</li>
        <li class="item">Determined</li>
        <li class="item">Enthusiastic</li>
      </ul>
      <intersection-observer
        sentinal-name="sentinal-name"
        @on-intersection-element="onIntersectionElement"
      ></intersection-observer>
    </div>
    <div class="icon-appear bottom-14 xs:bottom-0">
      <Icon
        icon="ant-design:arrow-down-outlined"
        class="z-20 w-8 h-8 mx-auto text-center text-green animate-bounce xs:w-6 xs:h-6"
        @click="scrollToBottom"
      />
    </div>

    <div class="box-appear"></div>
    <NuxtPage />
  </div>
</template>

<script setup>
import IntersectionObserver from "@/components/IntersectionObserver.vue";
import { Icon } from "@iconify/vue";
const scrollToBottom = () => {
  window.scrollTo(0, document.body.scrollHeight);
  console.log("clicked");
};
const isIntersectingElement = ref(false);
function onIntersectionElement(value) {
  console.log(value, "intersected");
  const cricadev = document.querySelector(".cricadev-logo");
  const icon = document.querySelector(".icon-appear");
  const cricadevMobile = document.querySelector(".cricadev-mobile");
  if (value === true) {
    console.log(cricadev);
    console.log(cricadevMobile);
    cricadev.classList.add("cricadev-logo-open");
    icon.classList.add("icon-close");
    cricadevMobile.classList.add("cricadev-logo-open");
  } else {
    cricadev.classList.remove("cricadev-logo-open");
    icon.classList.remove("icon-close");
    cricadevMobile.classList.remove("cricadev-logo-open");
  }
}
</script>

<style lang="scss" scoped>
.home {
  place-items: center;
  @media (max-width: 1100px) {
    grid-template-rows: 100vh 80vh;
    grid-template-columns: repeat(3, 1fr);
  }
}
.box-appear {
  width: 100vw;
  height: 20vh;
  background-image: linear-gradient(
    180deg,
    transparent 0%,
    rgb(246, 246, 246) 10%,
    transparent 100%
  );
  position: absolute;
  bottom: -5vh;
  transform: rotate(0deg);
}
.dark .box-appear {
  background-image: linear-gradient(
    0deg,
    transparent 0%,
    #00010d 10%,
    transparent 100%
  );
}
.icon-appear {
  display: none;
  @media (max-width: 1100px) {
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 32px;
    position: absolute;
  }
}
.icon-appear-2 {
  display: none;
  @media (max-width: 1100px) {
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 32px;
    position: absolute;
    top: 70%;
    left: -20%;
    animation: bounce-2 1s infinite;
    z-index: 99;
  }
  @media (max-width: 599px) {
    top: 60%;
  }
}
@keyframes bounce-2 {
  0% {
    transform: translateY(-25%) rotate(-45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: translateY(-25%) rotate(-45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0%) rotate(-45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
.icon-close {
  opacity: 0;
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
      grid-column: 1/4;
      grid-row: 1/3;
      text-align: center;
      padding: 0 160px;
      @media (max-width: 599px) {
        grid-column: 1/-1;
        grid-row: 1/3;
        padding: 0 40px;
      }
    }
    .home-list {
      grid-row: 3/4;
      text-align: center;
      @media (max-width: 599px) {
        grid-column: 1/-1;
        grid-row: 3/5;
      }
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
      @media (max-width: 599px) {
        height: 100vh;
        width: 100vw;
        background-size: auto 100%;
        background-position: contain;
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
      grid-row: 2/3;
      place-self: center;
      padding-top: 130px;
      padding-right: 30px;
      @media (max-width: 599px) {
        grid-column: 2/4;
        grid-row: 3/4;
        padding-right: 0px;
        padding-top: 0px;
        place-self: start center;
      }
    }
    .line-container {
      grid-column: 2/5;
      grid-row: 2/3;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(5, 1fr);
      @media (max-width: 599px) {
        grid-column: 2/4;
        grid-row: 2/3;
      }

      .line-1 {
        grid-column: 4/5;
        grid-row: 3/4;
        @media (max-width: 599px) {
          grid-column: 2/3;
          grid-row: 5/6;
        }
      }
      .line-2 {
        grid-column: 5/6;
        grid-row: 3/4;
        @media (max-width: 599px) {
          grid-column: 3/4;
          grid-row: 5/6;
        }
      }
      .figure-1 {
        grid-column: 2 / 6;
        grid-row: 2 / 4;
        place-self: center;
        @media (max-width: 599px) {
          grid-column: 1/2;
          grid-row: 4/6;
          place-self: center end;
        }
      }
      .figure-2 {
        grid-column: 4 / 6;
        grid-row: 2 / 4;
        place-self: end center;
        @media (max-width: 599px) {
          grid-column: 2/4;
          grid-row: 4/6;
          place-self: end center;
        }
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
  @media (max-width: 599px) {
    width: 8px;
    height: 8px;
  }
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
  @media (max-width: 605px) {
    height: 60px;
  }
  @media (max-width: 400px) {
    height: 40px;
  }
}

.cricadev-logo {
  position: absolute;
  z-index: 4;
  bottom: 15%;
  animation: logo-open 1s ease-in-out forwards;
}
.cricadev-logo-open {
  bottom: 0;
  pointer-events: none;
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
  @media (max-width: 599px) {
    bottom: 2%;
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
  @media (max-width: 599px) {
    animation: cri-animation-mobile 0.5s ease-in-out forwards;
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
.cri-2 {
  @media (max-width: 599px) {
    animation: cri-2-open-animation-mobile 1s ease-in-out forwards;
  }
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
  @media (max-width: 599px) {
    animation: ca-close-animation-mobile 1s ease-in-out forwards;
  }
}
.stian {
  animation: stian-close-animation 1s ease-in-out forwards;
  @media (max-width: 599px) {
    animation: stian-close-animation-mobile 1s ease-in-out forwards;
  }
}
.sallas {
  animation: stian-close-animation 1s ease-in-out forwards;
  @media (max-width: 599px) {
    animation: stian-close-animation-mobile 1s ease-in-out forwards;
  }
}
.cricadev-logo:hover + .cricadev-logo-hover > .group-1 > .cri-2 {
  animation: cri-2-close-animation 1.3s ease-in-out forwards;
  @media (max-width: 599px) {
    animation: cri-2-close-animation-mobile 1.3s ease-in-out forwards;
  }
}
.cricadev-logo:hover + .cricadev-logo-hover > .group-1 > .stian {
  animation: stian-animation 1s ease-in-out forwards;
  @media (max-width: 1100px) {
    animation: stian-animation-tablet 1s ease-in-out forwards;
  }
  @media (max-width: 599px) {
    animation: stian-animation-mobile 1s ease-in-out forwards;
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
  @media (max-width: 599px) {
    animation: stian-animation-mobile 1s ease-in-out forwards;
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
    transform: translateX(-100%) translateY(200%);
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
