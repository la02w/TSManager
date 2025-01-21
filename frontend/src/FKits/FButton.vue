<template>
  <button
    type="button"
    class="flex items-center justify-center space-x-2 p-1 rounded-lg relative"
  >
    <i v-if="icon" :class="[icon]" role="img" aria-hidden="true" />
    <span v-if="content" class="z-10">{{ content }}</span>
  </button>
</template>
<script setup lang="ts">
defineProps({
  content: {
    type: String,
  },
  icon: {
    type: String,
  },
})
</script>

<style scoped>
button::before {
  @apply content-[''] absolute rounded-lg inset-0 bg-[var(--btn-regular-bg)]
    hover:bg-[var(--btn-regular-bg-hover)] hover:scale-[1.1]
    active:bg-[var(--btn-regular-bg-active)] active:scale-95
}
</style>
