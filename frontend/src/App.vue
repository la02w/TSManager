<template>
  <div class="flex flex-col h-screen">
    <TitleBar class="w-full" />
    <div class="flex-1 overflow-auto myscrollbar p-5 bg-[var(--page-bg)]" 
        @click="hiddenColorPicker">

    </div>
  </div>
</template>

<script setup lang="ts">
import TitleBar from '@/components/TitleBar.vue'
const hiddenColorPicker = () => {
  const colorpicker = document.getElementById('ColorPickerSlider')
  if (colorpicker) {
    if (!colorpicker.classList.contains('hidden')) {
      colorpicker.classList.add('hidden')
    }
  }
}
</script>
