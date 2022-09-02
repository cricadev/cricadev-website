<template lang="">
  <div class="">
    <div class="wrap-desktop xs:hidden">
      <nav
        class="fixed z-10 flex justify-between w-full p-4 px-32 mx-auto lg:px-16 lg:p-4 sm:px-4"
      >
        <NuxtLink to="/" class="link">Home</NuxtLink>
        <NuxtLink to="/portfolio" class="link">Portfolio</NuxtLink>
        <NuxtLink to="/about" class="link">About me</NuxtLink>
        <NuxtLink to="/blog" class="link">Blog</NuxtLink>
      </nav>
      <header class="fixed z-10 flex justify-center w-full mx-auto top-16">
        <img
          src="../images/logo-logo-cricadev.png"
          alt="CricaDev"
          class="h-[63px] w-[50px] lg:h-[32px] lg:w-[25px]"
        />
      </header>
    </div>

    <header class="fixed z-10 hidden mt-6 ml-8 xs:inline">
      <img
        src="../images/logo-logo-cricadev.png"
        alt="CricaDev"
        class="h-[32px] w-[25px]"
      />
    </header>
    <div
      class="fixed w-5 h-5 z-[999] hover-toggle right-8 top-8"
      @click="handleClick"
    >
      <div class="w-5 h-[2px] menu-toggle bg-black dark:bg-white"></div>
    </div>
    <div
      class="fixed top-0 left-0 w-full h-screen z-[999] background overflow-y-hidden"
    ></div>
    <div
      class="w-full h-screen wrap-tablet-header z-[9999] fixed top-0 left-0 overflow-y-hidden"
    >
      <div
        class="absolute w-6 h-6 left-8 top-8 z-[9999]"
        @click="handleClickBack"
      >
        <Icon icon="akar-icons:cross" class="relative w-6 h-6" />
      </div>
      <nav
        class="fixed z-10 flex flex-col items-center justify-center w-full h-full space-y-16 nav-tablet"
      >
        <NuxtLink to="/" class="link" @click="linkClick">Home</NuxtLink>
        <NuxtLink to="/portfolio" class="link" @click="linkClick"
          >Portfolio</NuxtLink
        >
        <NuxtLink to="/about" class="link" @click="linkClick"
          >About me</NuxtLink
        >
        <NuxtLink to="/blog" class="link" @click="linkClick">Blog</NuxtLink>
      </nav>

      <div class="footer-desktop">
        <footer class="fixed z-10 w-full bottom-16">
          <nav class="flex justify-center w-full mx-auto space-x-4 text-lg_d">
            <a
              href="https://instagram.com/cricadev"
              class="link-footer"
              target="_blank"
            >
              <svg
                class="h-[18px] w-[18px]"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066c1.172.053 1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066c-2.988 0-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268a5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534c.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948a5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511Zm8.98 1.98c-1.16-.053-1.508-.064-4.445-.064c-2.937 0-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445c0 2.937.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064c2.938 0 3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445c0-2.937-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379Zm-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986ZM8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996Zm10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89Z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://twitter.com/cricadev"
              class="link-footer"
              target="_blank"
            >
              <svg
                class="h-[18px] w-[18px]"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578a9.3 9.3 0 0 1-2.958 1.13a4.66 4.66 0 0 0-7.938 4.25a13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568a4.692 4.692 0 0 1-2.104.08a4.661 4.661 0 0 0 4.352 3.234a9.348 9.348 0 0 1-5.786 1.995a9.5 9.5 0 0 1-1.112-.065a13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254c0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.003Z"
                />
              </svg>
            </a>
            <a
              href="https://github.com/cricadev"
              class="link-footer"
              target="_blank"
              ><svg
                class="h-[18px] w-[18px]"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a
              href="mailto:cricadev@gmail.com"
              class="link-footer"
              target="_blank"
              ><svg
                class="h-[18px] w-[18px]"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="m18.73 5.41l-1.28 1L12 10.46L6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/cristian-david-casallas-velandia-81630b174/"
              class="link-footer"
              target="_blank"
            >
              <svg
                class="h-[18px] w-[18px]"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M1 2.838A1.838 1.838 0 0 1 2.838 1H21.16A1.837 1.837 0 0 1 23 2.838V21.16A1.838 1.838 0 0 1 21.161 23H2.838A1.838 1.838 0 0 1 1 21.161V2.838Zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634c3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8c-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708V9.388Zm-5.5 10.403h3.208V9.25H4.208v10.54ZM7.875 5.812a2.063 2.063 0 1 1-4.125 0a2.063 2.063 0 0 1 4.125 0Z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </nav>
        </footer>
        <p
          class="fixed left-0 z-10 w-full m-0 text-center text-white bottom-10 bg-green2 text-xs_t footer"
        >
          Made with love by CricaDev 💚
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";

function handleClick(e) {
  const hoverToggle = document.querySelector(".hover-toggle");
  hoverToggle.classList.add("active");
  //window.scrollTo(0, document.body.scrollHeight);

  console.log(hoverToggle);
}
function linkClick(e) {
  const hoverToggle = document.querySelector(".hover-toggle");
  hoverToggle.classList.remove("active");
}
function handleClickBack(e) {
  const hoverToggle = document.querySelector(".hover-toggle");
  hoverToggle.classList.remove("active");
  console.log(hoverToggle);
}
</script>
<style lang="scss">
.wrap-desktop {
}
.wrap-tablet-header {
  display: none;
  @media (max-width: 599px) {
    display: block;
    overflow-y: hidden;
  }
  .background {
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100%;
  }
}
.dark .background {
  background: transparent;
  backdrop-filter: blur(10px);
}
.background {
  background: transparent;
  backdrop-filter: blur(10px);
}
.hover-toggle {
  display: none;
  @media (max-width: 599px) {
    display: block;
  }
}
.dark .wrap-tablet-header {
  animation: close-menu 0.5s ease-in-out forwards;
}
.wrap-tablet-header {
  animation: close-menu 0.5s ease-in-out forwards;
}
.background {
  animation: close-menu 0.5s ease-in-out forwards;
}
@keyframes close-menu {
  0% {
    transform: translateX(0%);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 1;
  }
}

.hover-toggle.active + .background + .wrap-tablet-header,
.hover-toggle.active + .background {
  animation: open-menu 0.5s ease-in-out forwards;
  transition: all 0.5s ease-in-out;
}
@keyframes open-menu {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
}
.hover-toggle.active + .wrap-tablet-header > .background {
}
.hover-toggle.active > .menu-toggle,
.hover-toggle.active > .menu-toggle::after,
.hover-toggle.active > .menu-toggle::before {
  transition: all 0.2s ease-in-out;
}
.hover-toggle.active + .wrap-tablet-header {
  opacity: 1;
}

.dark .menu-toggle::after,
.dark .menu-toggle::before {
  background: white;
}
.menu-toggle::after,
.menu-toggle::before {
  content: "";
  display: block;
  width: 20px;
  height: 2px;
  position: absolute;
  background: black;
  transition: all 0.2s ease-in-out;
}
.menu-toggle::after {
  top: 8px;
}
.menu-toggle::before {
  top: 16px;
}
</style>
