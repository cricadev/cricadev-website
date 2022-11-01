<script setup>
function openModal(e) {
  const modal = document.querySelector(".modal");
  modal.classList.add("active");
}
function closeModal(e) {
  const modal = document.querySelector(".modal");
  modal.classList.remove("active");
}
</script>
<template>
  <div class="">
    <p>Filter by</p>
    <button class="mr-2 text-green2 dark:text-green" @click="openModal">
      View more
      <Icon name="dashicons:arrow-down-alt2" class="-rotate-90"></Icon>
    </button>
    <ButtonTag name="All"></ButtonTag>
    <ButtonTag name="Coding"></ButtonTag>
    <ButtonTag name="About me"></ButtonTag>
    <ButtonTag name="Javascript"></ButtonTag>
    <div class="modal">
      <Icon
        name="akar-icons:arrow-back"
        class="relative w-6 h-6 arrow"
        @click="closeModal"
      />
      <p class="font-bold text-left text-xl_m">What are you into?</p>
      <ButtonTag name="All"></ButtonTag>
      <ButtonTag name="Coding"></ButtonTag>
      <ButtonTag name="About me"></ButtonTag>
      <ButtonTag name="Javascript"></ButtonTag>
      <ButtonTag name="Vue"></ButtonTag>
      <ButtonTag name="Nuxt"></ButtonTag>
      <ButtonTag name="CSS"></ButtonTag>
      <ButtonTag name="HTML"></ButtonTag>
      <ButtonTag name="Sass"></ButtonTag>
      <ButtonTag name="Git"></ButtonTag>
      <ButtonTag name="Github"></ButtonTag>
      <ButtonTag name="Bootstrap"></ButtonTag>
      <ButtonTag name="Typescript"></ButtonTag>
      <ButtonTag name="Tailwind"></ButtonTag>
      <ButtonTag name="NPM"></ButtonTag>
      <ButtonTag name="NodeJS"></ButtonTag>
      <ButtonTag name="React"></ButtonTag>
      <ButtonTag name="GraphQL"></ButtonTag>
      <ButtonTag name="Tips"></ButtonTag>
      <ButtonTag name="Job"></ButtonTag>
    </div>
  </div>
</template>
<style lang="scss">
.dark .modal {
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 7%,
    rgba(0, 1, 13, 1) 7%,

    rgba(0, 1, 13, 1) 100%
  );
}
.modal {
  display: grid;
  place-items: center;
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 998;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 7%,
    rgba(246, 246, 246, 1) 7%,

    rgba(246, 246, 246, 1) 100%
  );
  transition: all 0.2s;
  // slide out animation
  transform: translateX(100%);

  &.active {
    transform: translateX(0%);

    transition: all 0.2s;
    .arrow {
      pointer-events: all;
      place-self: center start;
      top: 10%;
      left: 10%;
    }
  }
}
</style>
