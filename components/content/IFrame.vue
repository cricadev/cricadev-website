<template>
  <div>

    <iframe :src="src" class="h-[50vh]" width="100%" allowfullscreen lazyload frameborder="0" allow="clipboard-write"
      refererPolicy="strict-origin-when-cross-origin"></iframe>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  src: String

})
</script>

<style></style>