<script lang="ts" setup>
interface Props {
  id: string
}

const props = withDefaults(defineProps<Props>(), {
  id: '',
})

const { data } = await useFetch(`/api/notion/post/${props.id}`)

</script>

<template>
  <!-- <pre>
    {{ data }}
  </pre> -->
  <div v-for="value in data.results">
    <NotionBlockAppearances :data="value" />
  </div>
</template>
