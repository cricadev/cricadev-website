<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <button
    class="px-8 py-2 transition-all border-2 border-green2 rounded-xl text-green2 hover:bg-green2 hover:text-white dark:text-green text-[.75rem] dark:hover:text-white pointer-events-auto whitespace-nowrap"
  >
    {{ props.name }}
  </button>
</template>
<style></style>
