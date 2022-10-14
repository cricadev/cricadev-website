<template>
  <div
    class="absolute flex flex-col items-start justify-center w-full h-full gap-10 px-8 mt-16"
  >
    <div class="absolute left-0 px-6 py-3 rounded-r-lg top-10 bg-green2">
      <Icon name="akar-icons:vue-fill" class="mr-2 rrelative" size="15px" />

      <span> Vue.js </span>
    </div>
    <div id="question">
      <h2
        class="w-full pl-4 font-bold leading-tight text-left border-l-2 border-green2 text-green text-base_t"
      >
        What is Vue.js?
        <br />
        <span>
          <Icon name="akar-icons:star" color="#ffb800" size="15px" />
          <Icon name="akar-icons:star" color="#ffb800" size="15px" />
        </span>
      </h2>
    </div>
    <div id="answer" class="text-left">
      <h3 class="font-medium text-green text-[1.125rem]">Answer:</h3>
      <p class="mt-4 font-normal leading-snug text-sm_m">
        Vue js is progressive javascript script used to create dynamic user
        interfaces. Vue js is very easy to learn.In order to work with Vue js
        you just need to add few dynamic features to a website. You don’t need
        to install any thing to use Vue js just need add Vue js library in your
        project.
      </p>
    </div>
    <Icon name="logos:vue" size="60px" class="place-self-center" />
  </div>
</template>
<script setup>
defineProps({
  title: String,
  img: String,
  content: String,
  square: String,
  content2: String,
});
</script>
<style lang="scss"></style>
