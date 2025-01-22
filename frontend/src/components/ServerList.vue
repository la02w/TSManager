<template>
  <div class="flex items-center gap-5">
    <p class="text-lg font-semibold text-gray-800">选择服务器</p>
    <div class="items-center space-x-4">
      <select v-model="selectedServer"
        class="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
        <option v-for="server in servers" :key="server.name" :value="server">
          {{ server.name }} - {{ server.url }}
        </option>
      </select>
      <button
        class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        添加
      </button>
      <button @click="reload"
        class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        刷新
      </button>
    </div>
  </div>

</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { GetServerList } from '../../wailsjs/go/main/App'
import type { utils } from '../../wailsjs/go/models'

const servers = ref<utils.Server[]>([])
const props = defineProps<{
  modelValue: utils.Server | null
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