<template>
  <div class="">
    <div class="flex justify-center gap-8">
      <a target="_blank" href="https://countgod.cricadev.com" class="text-white underline">Visit CountGod</a>
      <a target="_blank" href="https://github.com/cricadev/CountGod" class="text-white underline">Take a look at the
        code</a>
    </div>
    <nuxt-img :src="src" provider="cloudinary">
    </nuxt-img>





  </div>
</template>
<script setup>

defineProps({
  src: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    required: false,
  },
  relative: {
    type: Boolean,
    required: false,
    default: false,
  },
  top: {
    type: String,
    required: false,
    default: "0",
  },
  width: {
    type: Boolean,
    required: false,
    default: false,
  },
});

</script>