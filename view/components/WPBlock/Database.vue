<script lang="ts" setup>
import { provide } from 'vue'
import { type Sheet } from '~/types.d'

interface Props {
  options: {
    sheet_title: string
    header_titles: string
    is_todo: boolean
    is_search: boolean
  } | undefined
}

interface Options {
  sheet_title: string
  header_titles: string
  is_todo: boolean
  is_search: boolean
}

const props = withDefaults(defineProps<Props>(), {
  options: undefined
})
  
const { data: sheetData} = await useFetch(`/api/sheet/values/${props.options?.sheet_title}`)

provide<Sheet | Error>('sheetData', sheetData)
provide<Options | undefined>('options', props.options)
</script>

<template>
  <div v-if="options">
    <WPBlockDatabaseBundle />
  </div>
</template>
