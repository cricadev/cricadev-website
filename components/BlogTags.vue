|
<script setup>
function openModal(e) {
  const modal = document.querySelector(".modal");
  modal.classList.add("active");
}
function closeModal(e) {
  const modal = document.querySelector(".modal");
  modal.classList.remove("active");
}

const active = ref(false);
const activateButton = (e) => {
  e.target.classList.toggle("active");
  active.value = !active.value;
};
const counter = ref(0);

const activate = (e) => {
  console.log("clicked");
  console.log(e);
};
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
        <ButtonTag @active="activate()" name="All"></ButtonTag>
        <ButtonTag @active="activate()" name="Coding"></ButtonTag>
        <ButtonTag @active="activate()" name="About me"></ButtonTag>
        <ButtonTag @active="activate()" name="Javascript"></ButtonTag>
        <ButtonTag @active="activate()" name="Vue"></ButtonTag>
        <ButtonTag @active="activate()" name="Nuxt"></ButtonTag>
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
          <ButtonTag @active="() => activate(e)" name="All"></ButtonTag>
          <ButtonTag @active="() => activate(e)" name="Coding"></ButtonTag>
          <ButtonTag @active="() => activate(e)" name="About me"></ButtonTag>
          <ButtonTag @active="() => activate(e)" name="Javascript"></ButtonTag>
          <ButtonTag @active="() => activate(e)" name="Vue"></ButtonTag>
          <ButtonTag @active="() => activate(e)" name="Nuxt"></ButtonTag>
          <ButtonTag @active="() => activate(e)" name="CSS"></ButtonTag>
          <ButtonTag @active="() => activate(e)" name="HTML"></ButtonTag>
          <ButtonTag @active="() => activate(e)" name="Sass"></ButtonTag>
          <ButtonTag @active="() => activate(e)" name="Git"></ButtonTag>
          <ButtonTag @active="() => activate(e)" name="Github"></ButtonTag>
          <ButtonTag @active="() => activate(e)" name="Bootstrap"></ButtonTag>
          <ButtonTag @active="() => activate(e)" name="Typescript"></ButtonTag>
          <ButtonTag @active="() => activate(e)" name="Tailwind"></ButtonTag>
          <ButtonTag @active="() => activate(e)" name="NPM"></ButtonTag>
          <ButtonTag @active="() => activate(e)" name="NodeJS"></ButtonTag>
          <ButtonTag @active="() => activate(e)" name="React"></ButtonTag>
          <ButtonTag @active="() => activate(e)" name="GraphQL"></ButtonTag>
          <ButtonTag @active="() => activate(e)" name="Tips"></ButtonTag>
          <ButtonTag @active="() => activate(e)" name="Job"></ButtonTag>
        </div>
        <div class="flex flex-col w-full gap-4">
          <button
            class="px-8 py-2 transition-all border-2 border-green2 rounded-lg text-[.75rem] pointer-events-auto whitespace-nowrap button flex items-center gap-x-2 relative"
            @click="activateButton"
          >
            Continue
          </button>
          <button
            class="px-8 py-2 transition-all border-2 border-green2 rounded-lg text-[.75rem] pointer-events-auto whitespace-nowrap button flex items-center gap-x-2 relative"
            @click="activateButton"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
    <div class="py-16 blogs-order">
      <BlogComp></BlogComp>
    </div>
  </div>
</template>
<style lang="scss" scoped>
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
