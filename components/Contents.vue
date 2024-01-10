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
  <pre>
    {{ data }}
  </pre>
</template>

<style lang="scss">

</style>
