<script setup>
import { ref } from 'vue'
import { VuePDF, usePDF } from '@tato30/vue-pdf'
import { useWindowSize } from '@vueuse/core'

const { width, height } = useWindowSize();
const text_layer = ref(false)
const scale = ref(.5)
watch(() => width.value, () => width.value < 768 ? scale.value = .5 : scale.value = 1, { immediate: true })
const isMobile = computed(() => width.value < 768)
const disableScale = computed(() => isMobile.value && scale.value >= .75)
const page = ref(1)
const { pdf, pages } = usePDF('/pdf/CasallasCV.pdf')
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 py-32 overflow-hidden">
    <div class="flex justify-center w-full gap-32 header-pdf-controls md:flex-col md:gap-4">
      <span>Controls:</span>
      <div class="buttons-wrapper">
        <button class="button" @click="page === pages ? page = 1 : page++">
          {{ page > 2 ? 'Spanish' : 'English' }}
          Page {{ page }} of {{ pages }}
        </button>
      </div>
      <div class="buttons-wrapper">
        <button class="button" @click="scale = scale > 0.25 ? scale - 0.25 : scale">
          -
        </button>
        <span>{{ scale * 100 }}%</span>
        <button :disabled="disableScale" class="button" :class="{
          'bg-black2': disableScale
        }" @click="scale = scale < 2 ? scale + 0.25 : scale">
          +
        </button>
      </div>
    </div>
    <h2 class="text-xl_m"> {{ page === 1 ? 'ENGLISH' : 'SPANISH' }} </h2>

    <VuePDF :pdf="pdf" :page="page" :scale="scale" :text-layer="text_layer" />


  </div>
</template>
<style scoped>
.buttons-wrapper {
  @apply flex items-center justify-center gap-4
}

.button {
  @apply px-4 py-1 rounded-md bg-green2 text-white;
}
</style>