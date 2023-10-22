<template>
  <div class="">
    <canvas ref="canvas" width="400" height="400"></canvas>
  </div>
</template>

<script setup lang="ts">
import { Rive } from '@rive-app/canvas';
const canvas = ref(null)
const props = defineProps({
  src: String
})

onMounted(() => {
  if (canvas.value) {
    new Rive({
      canvas: canvas.value,
      src: props.src,
      autoplay: true,
      stateMachines: ['toggle'],
    })
  }
  const ctx = canvas.value?.getContext('2d');
  console.log(ctx)
  if (ctx) {
    ctx.rect(150, 180, 100, 40);
    ctx.stroke();
    ctx.clip();

    // Draw red rectangle after clip()
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 150, 100);
  }
})

</script>