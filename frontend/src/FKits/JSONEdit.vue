<template>
  <FButton icon="icon-[material-symbols--add-circle-rounded]" :content="i18n(I18nKey.addParameters,lang)" @click="addData" class="my-1" />
  <div>
    <div v-for="(item, index) in currentPairs" :key="index" class="flex items-center gap-2 mb-2">
      <div class="flex gap-2">
        <input v-model="item.key" :style="{ width: inputWidth(item.key, 'key') + 'px' }"
          class="focus:outline-none px-2 rounded-md text-[var(--btn-content)] bg-[var(--btn-regular-bg)]" type="text" @input="updateJsonData(index)" />
        <input v-model="item.value" :style="{ width: inputWidth(item.value, 'value') + 'px' }"
          class="focus:outline-none px-2 rounded-md text-[var(--btn-content)] bg-[var(--btn-regular-bg)]" type="text" @input="updateJsonData(index)" />
      </div>
      <div>
        <FButton icon="icon-[material-symbols--delete]" @click="delData(index)" />
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import FButton from '@/FKits/FButton.vue'
import I18nKey from '@/i18n/i18nKey'
import { i18n } from '@/i18n/translation'
import { getLang } from '@/utils/getLang'
import { onMounted, ref, watch } from 'vue'

const props = defineProps<{
  modelValue: string
  lang: string
}>()

const emit = defineEmits<(event: 'update:modelValue', value: string) => void>()

const jsonData = ref<Record<string, string>>({})
const jsonString = ref<string>(props.modelValue)

interface KeyValuePair {
  key: string
  value: string
}

const inputWidth = (text: string, type: 'key' | 'value') => {
  const span = document.createElement('span')
  span.style.visibility = 'hidden'
  span.style.whiteSpace = 'nowrap'
  span.innerText = text || (type === 'key' ? '键' : '值')
  document.body.appendChild(span)
  const width = span.offsetWidth + 16
  document.body.removeChild(span)
  return Math.max(width, 100)
}

const currentPairs = ref<KeyValuePair[]>([])

const initializePairs = () => {
  currentPairs.value = Object.keys(jsonData.value).map((key) => ({
    key,
    value: jsonData.value[key],
  }))
  jsonString.value = JSON.stringify(jsonData.value)
}

const addData = () => {
  const newKey = `${i18n(I18nKey.param, getLang())}${Object.keys(jsonData.value).length + 1}`
  const newValue = `${i18n(I18nKey.paramValue, getLang())}`
  jsonData.value[newKey] = newValue
  initializePairs()
}

const delData = (index: number) => {
  const keyToDelete = currentPairs.value[index].key
  delete jsonData.value[keyToDelete]
  initializePairs()
}

// 实时更新 jsonData
const updateJsonData = (index: number) => {
  const { key, value } = currentPairs.value[index]
  // 删除旧的键值对
  const oldKey = Object.keys(jsonData.value)[index]
  delete jsonData.value[oldKey]
  // 添加新的键值对
  jsonData.value[key] = value
  jsonString.value = JSON.stringify(jsonData.value)
}
watch(jsonString, (newJson) => {
  emit('update:modelValue', newJson)
})
onMounted(() => {
  initializePairs()
})
</script>