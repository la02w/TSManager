<template>
  <div class="flex items-center gap-5">
    <p class="text-lg font-semibold text-[var(--primary)]">{{title}}</p>
    <div class="items-center space-x-4">
      <select v-model="selectedServer"
        class="flex-1 p-2 rounded-md focus:outline-none text-[var(--btn-content)] bg-[var(--btn-regular-bg)]">
        <option v-for="server in servers" :key="server.name" :value="server">
          {{ server.name }} - {{ server.url }}
        </option>
      </select>
    </div>
    <div class="flex gap-2">
        <FButton icon="icon-[material-symbols--add-circle-rounded] text-[1.5rem]" />
        <FButton icon="icon-[ion--reload-circle] text-[1.5rem]" @click="reload" />
      </div>
  </div>
  <hr class="my-3" />
</template>

<script setup lang="ts">
import FButton from '@/FKits/FButton.vue'
import { onMounted, ref, watch } from 'vue'
import { GetServerList } from '../../wailsjs/go/main/App'
import type { utils } from '../../wailsjs/go/models'

const servers = ref<utils.Server[]>([])
const props = defineProps<{
  modelValue: utils.Server | null
  title: string
}>()
const selectedServer = ref<utils.Server | null>(props.modelValue)

const getServer = async () => {
  try {
    const res = await GetServerList('./config/servers.json')
    servers.value = res
    selectedServer.value = res[0]
  } catch (error) {
    console.error('加载服务器列表失败:', error)
  }
}
const reload = async () => {
  getServer()
}
onMounted(async () => {
  getServer()
})

const emit =
  defineEmits<(e: 'update:modelValue', value: utils.Server | null) => void>()

watch(selectedServer, (newServer) => {
  emit('update:modelValue', newServer)
})
</script>