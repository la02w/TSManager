<template>
  <div class="flex flex-col h-screen">
    <TitleBar class="w-full" />
    <div class="flex-1 overflow-auto myscrollbar p-5"></div>
  </div>
</template>

<script setup lang="ts">
import TitleBar from '@/components/TitleBar.vue'
</script>
