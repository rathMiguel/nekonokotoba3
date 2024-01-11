<script setup lang="ts">
interface Props {
  postId: string;
}

const props = withDefaults(defineProps<Props>(), {
  postId: "",
});

const { postId } = props
const { data } = await useFetch(`/api/notion/post/${postId}`)

</script>

<template>
  <div v-for="(value, index) in data.results" v-if="data" :key="value.id" class="block">
    <BlockH2 v-if="value.type === 'heading_2'">{{ value.heading_2.rich_text[0].text.content }}</BlockH2>
    
  </div>
</template>

<style lang="scss" scoped>

</style>
