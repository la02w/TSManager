<template>
  <div class="flex flex-col h-screen">
    <TitleBar class="w-full" />
    <div class="flex-1 overflow-auto myscrollbar p-5 bg-[var(--page-bg)]" @click="hiddenColorPicker">
      <div class="bg-white w-full  p-4 rounded-lg items-center">
        <div>
          <ServerList v-model="selectedServer" :servers="servers" />
        </div>
        <div>服务器信息</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ServerList from '@/components/ServerList.vue'
import TitleBar from '@/components/TitleBar.vue'
import getIP from '@/utils/api'
import { onMounted, ref } from 'vue'
import { GetServerList } from '../wailsjs/go/main/App'
import type { utils } from '../wailsjs/go/models'
import FButton from './FKits/FButton.vue'

const servers = ref<utils.Server[]>([])
const selectedServer = ref<utils.Server | null>(null)

const getIPButton = async () => {
  const ip = await getIP()
  alert(ip)
}

const hiddenColorPicker = () => {
  const colorpicker = document.getElementById('ColorPickerSlider')
  if (colorpicker) {
    if (!colorpicker.classList.contains('hidden')) {
      colorpicker.classList.add('hidden')
    }
  }
}
</script>
