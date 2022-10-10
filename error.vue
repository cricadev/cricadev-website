<template>
  <button @click="handleError">Go Home</button>
</template>

<script setup>
const props = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });
</script>
