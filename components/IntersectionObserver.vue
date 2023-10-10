<template>
  <div :ref="sentinalName" class="relative w-full h-px" />
</template>
<script setup>
defineProps({
  sentinalName: {
    type: String,
    required: true,
  },
})
const emit = defineEmits(['on-intersection-element'])
const isIntersectingElement = ref(false);
watch(isIntersectingElement, (value) => {
  emit("on-intersection-element", value)
})
onMounted(() => {
  const sentinal = this.$refs[this.sentinalName];
  const handler = (entries) => {
    if (entries[0].isIntersecting) {
      this.isIntersectingElement = true;
    } else {
      this.isIntersectingElement = false;
    }
  };
  const observer = new window.IntersectionObserver(handler);
  observer.observe(sentinal);
})


</script>
