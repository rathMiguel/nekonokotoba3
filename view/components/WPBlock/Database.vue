<script lang="ts" setup>
import { provide } from 'vue';
import type { DatabaseOptions } from '~/types.d';

interface Props {
  options:
    | {
        sheet_title: string;
        header_titles: string;
        is_todo: boolean;
        is_search: boolean;
      }
    | undefined;
}

const props = withDefaults(defineProps<Props>(), {
  options: undefined,
});

const { data } = await useFetch(`/api/sheet/values/${props.options?.sheet_title}`);

provide('sheetData', data.value);
provide<DatabaseOptions | undefined>('options', props.options);
</script>

<template>
  <div v-if="options">
    <WPBlockDatabaseBundle />
  </div>
</template>
