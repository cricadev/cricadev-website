<template>
  <div
    class="grid w-full h-screen py-32 text-center place-items-center lg:py-24 xs:py-16"
  >
    <p
      class="absolute font-extrabold leading-[0.5] text-xl5_d z-10 opacity-5"
      ref="dvd"
    >
      Oops:(
      <br />
      <span class="font-normal text-xl2_d"> Page not found </span>
    </p>
    <div class="relative z-20">
      <img
        src="../images/404-bg.png"
        alt=""
        class="relative"
        v-show="$colorMode.value === 'dark'"
      />
      <img
        src="../images/404-bg-dark.png"
        alt=""
        class="relative"
        v-show="$colorMode.value === 'light'"
      />
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
      <button class="btn-border" @click="openModal">Learn</button
      ><button class="btn-border" @click="openModal">Test</button
      ><button class="btn-border" @click="openModal">Chill</button>
    </div>
    <div
      class="fixed top-0 left-0 w-full h-24 bg-white dark:bg-black z-[9999] text-base_m lg-m:text-xl_t appear-from-top lg:h-20 xs:h-16 appear-menu"
    >
      <div
        class="absolute top-0 z-20 parent-toggle right-4 toggle-menu toggle-404"
      >
        <input
          type="checkbox"
          class="bg-white toggle dark:bg-black"
          id="checkbox"
          @change="
            setColorTheme($colorMode.preference === 'dark' ? 'light' : 'dark')
          "
        />
        <div v-show="$colorMode.value === 'light'">
          <Icon name="akar-icons:sun-fill" class="moon svg" />
        </div>
        <div v-show="$colorMode.value === 'dark'">
          <Icon name="akar-icons:moon-fill" class="sun svg" />
        </div>
      </div>
    </div>
    <div
      class="grid items-center justify-center modal modal1 dark:bg-black/80 bg-white/80 place-items-center"
      @click="closeModalOutside"
    >
      <div
        class="absolute grid w-11/12 bg-white dark:bg-black h-3/4 modal-content"
      >
        <div
          class="absolute w-6 h-6 left-4 top-4 z-[9999] text-white"
          @click="closeModal"
        >
          <Icon
            name="akar-icons:arrow-back"
            class="relative p-2 text-white rounded-lg bg-green2"
            size="40px"
          />
        </div>
        <Q&AContainer></Q&AContainer>

        <div class="opacity-0">Learn</div>
      </div>
    </div>
    <div
      class="grid items-center justify-center modal modal2 dark:bg-black/80 bg-white/80 place-items-center"
      @click="closeModalOutside"
    >
      <div
        class="absolute grid w-11/12 bg-white dark:bg-black h-3/4 modal-content"
      >
        <div
          class="absolute w-6 h-6 left-4 top-4 z-[9999] text-white"
          @click="closeModal"
        >
          <Icon name="akar-icons:arrow-back" class="relative w-6 h-6" />
        </div>
        <div class="opacity-0">Test</div>
      </div>
    </div>
    <div
      class="grid items-center justify-center modal modal3 dark:bg-black/80 bg-white/80 place-items-center"
      @click="closeModalOutside"
    >
      <div
        class="absolute grid w-11/12 bg-white dark:bg-black h-3/4 modal-content"
      >
        <div
          class="absolute w-6 h-6 left-4 top-4 z-[9999] text-white"
          @click="closeModal"
        >
          <Icon name="akar-icons:arrow-back" class="relative w-6 h-6" />
        </div>
        <div class="opacity-0">Chill</div>
      </div>
    </div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
type Theme = "light" | "dark";

const colorMode = useColorMode();
const setColorTheme = (newTheme: Theme) => {
  colorMode.preference = newTheme;
};
const props = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });
function openModal(e) {
  const modal = document.querySelectorAll(".modal");
  const target = e.currentTarget.innerText;
  modal.forEach((item) => {
    if (item.firstChild.lastChild.innerText == target) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}
function closeModal(e) {
  const modal = document.querySelectorAll(".modal");
  modal.forEach((item) => {
    item.classList.remove("active");
  });
}
function closeModalOutside(e) {
  const modal = document.querySelectorAll(".modal");
  if (e.currentTarget === e.target) {
    modal.forEach((item) => {
      item.classList.remove("active");
    });
  }
}
useHead({
  title: "CricaDev | 404",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content:
        "Hey, this is a 404, it's not you it's me... Have some fun here!",
    },
  ],
  link: [{ rel: "icon", type: "image/png", href: "/404-img.png" }],
});
</script>
<style lang="scss">
.modal.active {
  opacity: 1;
  pointer-events: all;
  transform: translateY(0%);
  transition: all 0.2s ease-in-out;
}
.modal {
  transition: all 0.5s ease-in-out;

  transform: translateY(100%);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 999;
  opacity: 0;
  pointer-events: none;
  .modal-content {
    border-radius: 20px;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: repeat(6, 1fr);
    grid-auto-flow: column;
    place-self: center;
    place-items: center;
    -webkit-box-shadow: 0px 0px 10px 2px rgba(90, 175, 152, 1);
    -moz-box-shadow: 0px 0px 10px 2px rgba(90, 175, 152, 1);
    box-shadow: 0px 0px 10px 2px rgba(90, 175, 152, 1);
    @media (min-width: 1100px) {
      width: 40%;
    }
    @media (max-height: 780px) {
      height: 90%;
    }
  }
}
.toggle-404 {
  @media (min-width: 599px) {
    display: none;
  }
}
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
.toggle-menu {
  @media (max-width: 599px) {
    transform: scale(0.6) rotate(90deg);
  }
}
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
  @media (max-width: 599px) {
    animation: fade-sun-mobile 0.5s ease-in-out forwards;
  }
}

.moon {
  bottom: 0;
  transform: translateY(0%) scale(0.75);
  color: #f6f6f6;
  animation: fade-moon 0.5s ease-in-out forwards;
}

@keyframes fade-sun-mobile {
  0% {
    transform: translateY(100%) scale(0.75) rotate(165deg) translateX(70%);
  }
  100% {
    transform: translateY(-10%) scale(0.75) rotate(165deg) translateX(70%);
  }
}
@keyframes fade-moon {
  0% {
    transform: translateY(-100%) scale(0.75) translateX(-70%);
  }
  100% {
    transform: translateY(0%) scale(0.75) translateX(-70%);
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
