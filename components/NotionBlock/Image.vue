<script setup lang="ts">
interface Props {
  data: Object
}

const props = withDefaults(defineProps<Props>(), {
  data: Object,
});

</script>

<template>
  <div class="my-4 sm:my-8">
    <NuxtImg v-if="data" :src="data.image.file.url" width="1920" />
  </div>
</template>

<style lang="scss" scoped>

</style>
