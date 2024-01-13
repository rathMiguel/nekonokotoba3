<script setup lang="ts">
interface Props {
  data: Object;
}

const props = withDefaults(defineProps<Props>(), {
  data: Object,
});

</script>

<template>
  <h1 class="mb-8 md:mb-12 rounded-xl">{{ data.heading_1.rich_text[0].text.content }}</h1>
</template>

<style lang="scss" scoped>
h1{
  font-size: 1.5em;
  color: #FFF;
  padding: 1em;
}
</style>
