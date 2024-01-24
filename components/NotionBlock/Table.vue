<script setup lang="ts">
import TableContents from './TableContents.vue';

interface Props {
  data: Object
}

const props = withDefaults(defineProps<Props>(), {
  data: Object,
})

const { data: tableData } = await useFetch(`/api/notion/post/${props.data.id}`)
</script>

<template>
  <TableContents :data="tableData" :table="data.table" />
</template>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

</style>
