<script lang="ts" setup>
interface Props {
  data: Object
}

const props = withDefaults(defineProps<Props>(), {
  data: Object,
})

</script>

<template>
  <NotionBlockH1 v-if="data.type === 'heading_1'" :data="data" />
  <NotionBlockH2 v-else-if="data.type === 'heading_2'" :data="data" />
  <NotionBlockH3 v-else-if="data.type === 'heading_3'" :data="data" />
  <NotionBlockP v-else-if="data.type === 'paragraph'" :data="data" />
  <NotionBlockList v-else-if="data.type === 'bulleted_list_item'" :data="data" />
  <NotionBlockTable v-else-if="data.type === 'table'" :data="data" />
  <NotionBlockImage v-else-if="data.type === 'image'" :data="data" />
  <NotionBlockColumnList v-else-if="data.type === 'column_list'" :data="data" />
</template>