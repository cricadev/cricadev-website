<template>
  <div
    class="absolute flex flex-col items-start justify-center w-full h-full gap-10 px-8 mt-16 qa"
  >
    <div
      class="absolute left-0 flex items-center px-6 py-3 rounded-r-lg bg-green2 top-10"
    >
      <Icon :name="`${tag}`" class="mr-2 rrelative" size="18px" />

      <span> {{ tagline }} </span>
    </div>
    <div id="question">
      <h2
        class="w-full pl-4 font-bold leading-tight text-left border-l-2 border-green2 text-green text-base_t"
      >
        {{ question }}
        <br />
        <div>
          <span v-if="stars == 1">
            <Icon name="akar-icons:star" color="#ffb800" />
          </span>
          <span v-if="stars == 2">
            <Icon name="akar-icons:star" color="#ffb800" />
            <Icon name="akar-icons:star" color="#ffb800" />
          </span>
          <span v-if="stars == 3">
            <Icon name="akar-icons:star" color="#ffb800" />
            <Icon name="akar-icons:star" color="#ffb800" />
            <Icon name="akar-icons:star" color="#ffb800" />
          </span>
        </div>
      </h2>
    </div>
    <div id="answer" class="text-left">
      <h3 class="font-normal text-green text-[1.125rem]">Answer:</h3>
      <p class="mt-4 font-light leading-snug text-sm_m">
        {{ content }}
        <nuxt-img src="" alt="" />
      </p>
    </div>
    <Icon :name="`${icon}`" size="60px" class="place-self-center" />
  </div>
</template>
<script setup>
defineProps({
  tag: String,
  tagline: String,
  question: String,
  stars: String,
  content: String,
  icon: String,
});
</script>
<style lang="scss"></style>
