<template>
  <div class="progress-bar">
    <div :class="(progress == 100) ? 'progress-inner complete' : 'progress-inner'" class=""
      :style="`width: ${progress}%;`">
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  progress: {
    type: Number,
    required: true,
  },
})
</script>
<style scoped>
.progress-bar {
  width: 100%;
  height: 10px;
  background: transparent;
  position: sticky;

  z-index: 9999;
}

.progress-inner {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;

  width: 0;
  @apply bg-green rounded-l-none rounded-r-2xl;


  transition: width 0.3s ease-in-out;
}

.progress-inner.complete {
  @apply rounded-r-none;
}
</style>