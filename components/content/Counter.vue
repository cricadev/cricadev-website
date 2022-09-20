<template lang="">
  <div>
    <div class="counter">
      <p class="current-count">
        Current count: <strong> {{ currentCount }} </strong>
      </p>
      <button @click="incrementCount">+</button>
      <button @click="decrementCount" :disabled="currentCount.value === 0">
        -
      </button>
    </div>
  </div>
</template>
<script setup>
const currentCount = ref(0);
const incrementCount = () => {
  currentCount.value++;
};
const decrementCount = () => {
  currentCount.value--;
};
</script>
<style lang=""></style>
