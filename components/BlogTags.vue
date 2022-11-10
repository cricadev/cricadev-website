<script setup>
function openModal(e) {
  const modal = document.querySelector(".modal");
  modal.classList.add("active");
}
function closeModal(e) {
  const modal = document.querySelector(".modal");
  modal.classList.remove("active");
}
/*
1. make that if the button is selected then it highlights you can select as much buttons as you want, but if you select the same button it will unselect it, and if you select "all" it will unselect all the other buttons and select "all" and if you select "all" and then another button it will unselect "all" and select the other button

2. A blog can have multiple tags, so when you click on a tag it will show you all the blogs that have that tag, and if you click on another tag it will show you all the blogs that have both tags, and if you click on "all" it will show you all the blogs

3. the blogs will have tags on its image in and outside the article.

*/
</script>
<template>
  <div class="pt-8">
    <div class="flex flex-col gap-y-4">
      <div class="flex justify-between">
        <p class="font-semibold text-base_t">Filter by</p>
        <button class="text-green2 dark:text-green" @click="openModal">
          View more
          <Icon name="dashicons:arrow-down-alt2" class="ml-2 -rotate-90"></Icon>
        </button>
      </div>
      <div class="filter-container">
        <ButtonTag name="All"></ButtonTag>
        <ButtonTag name="Coding"></ButtonTag>
        <ButtonTag name="About me"></ButtonTag>
        <ButtonTag name="Javascript"></ButtonTag>
        <ButtonTag name="Vue"></ButtonTag>
        <ButtonTag name="Nuxt"></ButtonTag>
      </div>
    </div>
    <div class="px-8 modal">
      <div class="flex flex-col modal-into">
        <Icon
          name="akar-icons:arrow-back"
          class="absolute w-6 h-6 arrow"
          @click="closeModal"
        />
        <p class="relative font-bold text-left text-xl_m">What are you into?</p>

        <div class="filter-container">
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
        <div class="flex flex-col w-full gap-4">
          <ButtonTag name="Continue"></ButtonTag>
          <ButtonTag name="Cancel"></ButtonTag>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.modal-into {
  justify-content: space-around;
  align-items: center;
  height: 80%;
}
.filter-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 0.8rem;
  justify-content: flex-start;
}
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
  pointer-events: all;
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
