<script setup lang="ts">
interface Props {
  data: Object
}

const props = withDefaults(defineProps<Props>(), {
  data: Object,
})

</script>

<template>
  <p v-if="data">{{ data.paragraph.rich_text[0].text.content }}</p>
</template>

<style lang="scss" scoped>
p{
  margin-bottom: 1.5em;
}
</style>
