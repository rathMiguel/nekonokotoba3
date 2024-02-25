<script lang="ts" setup>
import { inject, ref, watch } from 'vue'

const options = inject('options')
const database = inject('databaseMaster')
const filteredDatabase = inject('filteredDatabase')
const searchWord = ref<string>('')

watch(
  () => searchWord.value,
  () => {
    const reg = new RegExp(searchWord.value)
    filteredDatabase.value = []

    const filteredData = database.value.map((elements) => {

      const dataRowValues = Object.values(elements)
      const filteredWords = dataRowValues.filter(text => ( reg.test(text) ))

      if (filteredWords.length) {
        filteredDatabase.value.push(elements)
      } 
    })
  }
)
</script>

<template>
  <div class="mb-4" v-if="options.is_search">
    <input type="text" class="border-2 rounded-md p-2 w-full" v-model="searchWord" placeholder="キーワードで絞り込み">
  </div>
</template>
