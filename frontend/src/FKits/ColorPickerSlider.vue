<template>
  <div
    class="w-80 p-4 bg-[var(--card-bg)] dark:shadow-lg rounded-2xl text-gray-600"
  >
    <div class="flex items-center justify-between">
      <div class="font-bold mb-2 flex items-center">
        <div class="w-1 h-4 mr-2 bg-[var(--primary)] rounded-lg"></div>
        <div class="dark:text-white">主题色</div>
        <FButton
          v-if="hue != 300"
          @click="hue = 300"
          class="ml-2"
          icon="icon-[nrk--back] block text-[var(--btn-content)]"
        />
      </div>
      <div
        class="mb-2 text-sm font-bold rounded-lg p-1 bg-[var(--btn-regular-bg)] text-[var(--btn-content)]"
      >
        {{ hue }}
      </div>
    </div>
    <div class="h-[1.5rem] bg-[oklch(.8_.1_0)] px-1 rounded">
      <input
        v-model="hue"
        class="w-full"
        type="range"
        min="0"
        max="360"
        step="5"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import FButton from '@/FKits/FButton.vue'
import { onMounted, ref, watch } from 'vue'
const hue = ref(300)

onMounted(() => {
  const storedHue = localStorage.getItem('hue')
  if (storedHue !== null) {
    hue.value = Number.parseInt(storedHue, 10)
  } else {
    localStorage.setItem('hue', hue.value.toString())
  }
  document.documentElement.style.setProperty('--hue', hue.value.toString())
})

watch(hue, (newHue) => {
  document.documentElement.style.setProperty('--hue', newHue.toString())
  localStorage.setItem('hue', newHue.toString())
})
</script>
<style scoped>
input[type="range"] {
  -webkit-appearance: none;
  @apply bg-transparent h-[1.5rem];
  background-image: var(--color-selection-bar);
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  @apply h-[20px] w-[10px] bg-slate-100 bg-opacity-75 rounded-sm;
}
</style>
