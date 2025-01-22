<template>
  <div class="flex items-center justify-between mx-auto bg-[var(--card-bg)] relative dark:text-white/75 select-none">
    <div class="px-4 w-full" style="widows: 1">TeamspeakManager</div>
    <div class="flex space-x-2">
      <div>
        <button @click="toggleColorPicker"
          class="flex items-center justify-center w-6 h-6 hover:bg-gray-200 dark:hover:text-black">
          <i class="icon-[ion--color-palette-outline]" role="img" aria-hidden="true" />
        </button>
      </div>
      <div>
        <button @click="toggleLightDarkMode"
          class="flex items-center justify-center w-6 h-6 hover:bg-gray-200 dark:hover:text-black">
          <i class="icon-[ix--light-dark]" role="img" aria-hidden="true" />
        </button>
      </div>
      <div>
        <button @click="WindowMinimise"
          class="flex items-center justify-center w-6 h-6 hover:bg-gray-200 dark:hover:text-black">
          <i class="icon-[material-symbols--minimize-rounded]" role="img" aria-hidden="true" />
        </button>
      </div>
      <div>
        <button @click="Quit" class="flex items-center justify-center w-6 h-6 hover:bg-gray-200 dark:hover:text-black">
          <i class="icon-[material-symbols--close-rounded]" role="img" aria-hidden="true" />
        </button>
      </div>
    </div>
    <ColorPickerSlider id="ColorPickerSlider" class="hidden absolute top-8 right-5 z-[99]" />
  </div>
</template>
<script setup lang="ts">
import ColorPickerSlider from '@/FKits/ColorPickerSlider.vue' // 引入 ColorPickerSlider 组件
import { Quit, WindowMinimise } from '../../wailsjs/runtime/runtime'
const toggleColorPicker = () => {
  const colorpicker = document.getElementById('ColorPickerSlider')
  if (colorpicker) {
    colorpicker.classList.toggle('hidden')
  }
}
const toggleLightDarkMode = () => {
  document.documentElement.classList.toggle('dark')
}
</script>
