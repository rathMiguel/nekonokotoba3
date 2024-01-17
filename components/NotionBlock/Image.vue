<script setup lang="ts">
interface Props {
  data: Object
}

const props = withDefaults(defineProps<Props>(), {
  data: Object,
});

const imageOptions = {
  path: '/images/notion/',
  ext: ['.jpg', '.jpeg', '.gif', '.png', '.webp']
}
let ext = ''
const dataUrl = props.data.image.file.url

for (const value of imageOptions.ext) {
  if(dataUrl.indexOf(ext) !== -1) {
    ext = value
    break
  }
}

</script>

<template>
  <div class="my-4 sm:my-8">
    <NuxtImg v-if="data" :src="imageOptions.path + data.id + ext" width="1920" />
  </div>
</template>

<style lang="scss" scoped>

</style>
