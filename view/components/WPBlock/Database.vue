<script lang="ts" setup>
import { ref, provide } from 'vue'

interface Props {
  options: {
    sheet_title: string
    header_titles: string
    is_todo: boolean
    is_search: boolean
  } | undefined
}

const props = withDefaults(defineProps<Props>(), {
  options: undefined
})
  
const { data: sheetData} = await useFetch(`/api/sheet/values/${props.options?.sheet_title}`)

provide('sheetData', sheetData)
provide('options', props.options)
</script>

<template>
  <div v-if="options">
    <WPBlockDatabaseBundle />
  </div>
</template>
