<script setup>
import { ref } from 'vue'
import { VuePDF, usePDF } from '@tato30/vue-pdf'

const text_layer = ref(false)
const scale = ref(1)
const page = ref(1)
const { pdf, pages } = usePDF('/pdf/cristianCV.pdf')
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 py-32">
    <div class="flex flex-col w-full gap-4 bg-black header-pdf-controls">
      <div class=" buttons-wrapper">
        <button class="button" @click="page = page > 1 ? page - 1 : page">
          Prev
        </button>
        <span>{{ page }} / {{ pages }}</span>
        <button class="button" @click="page = page < pages ? page + 1 : page">
          Next
        </button>
      </div>
      <div class="buttons-wrapper">
        <button class="button" @click="scale = scale > 0.25 ? scale - 0.25 : scale">
          -
        </button>
        <span>{{ scale * 100 }}%</span>
        <button class="button" @click="scale = scale < 2 ? scale + 0.25 : scale">
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
  @apply px-4 py-1 rounded-md bg-green2
}
</style>