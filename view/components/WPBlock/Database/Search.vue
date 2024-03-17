<script lang="ts" setup>
import { inject, ref, watch } from 'vue';
import type { DatabaseOptions } from '~/types.d';

const options = inject<DatabaseOptions>('options');
const database = inject<{ [key: string]: string | number }[]>('databaseMaster', []);
const filteredDatabase = inject<{ [key: string]: string | number }[]>('filteredDatabase', []);
const searchWord = ref<string>('');

watch(
  () => searchWord.value,
  () => {
    const reg = new RegExp(searchWord.value);
    filteredDatabase.value = [];

    database.value.map((elements: Object) => {
      const dataRowValues = Object.values(elements);
      const filteredWords = dataRowValues.filter((text) => reg.test(text));

      if (filteredWords.length) {
        filteredDatabase.value.push(elements);
      }
    });
  },
);
</script>

<template>
  <div class="mb-4" v-if="options.is_search">
    <input type="text" class="border-2 rounded-md p-2 w-full" v-model="searchWord" placeholder="キーワードで絞り込み" />
  </div>
</template>
