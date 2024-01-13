<script setup lang="ts">
interface Props {
  data: Object
}

const props = withDefaults(defineProps<Props>(), {
  data: Object,
});

</script>

<template>
  <h2 class="text-primary" v-if="data">{{ data.heading_2.rich_text[0].text.content }}</h2>
</template>

<style lang="scss" scoped>
h2{
  font-size: 1.5em;
  border-bottom: 2px solid #A0C5B4;
  padding-bottom: 10px;
  margin-bottom: 1em;
  margin-top: 2em;
}
</style>
