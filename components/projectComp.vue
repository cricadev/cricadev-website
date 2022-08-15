<template lang="">
  <div class="relative w-1/2 mx-auto">
    <div class="relative rounded-sm">
      <img class="item-container" :src="src" />
      <div class="absolute top-0 w-full h-48 project-container"></div>
    </div>
    <h1
      class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white text-xl2_d font-bold"
    >
      {{ title }}
    </h1>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="css" scoped>
.project-container {
  background-image: linear-gradient(
    90deg,
    rgba(0, 1, 13, 0.3) 0%,
    rgba(0, 1, 13, 0.3) 100%
  );
}
</style>
