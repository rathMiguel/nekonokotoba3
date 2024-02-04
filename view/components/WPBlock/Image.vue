<script lang="ts" setup>
  const config = useRuntimeConfig()

  interface Props {
    imgId: number
  }

  const props = withDefaults(defineProps<Props>(), {
    imgId: 0,
  })

  const { data: media } = await useFetch(`${config.public.WP_API_URL}media/${props.imgId}`)
</script>

<template>
  <figure class="mb-8">
    <NuxtImg :src="media.media_details.sizes.full.source_url" :alt="media.alt_text" class="w-full" :width="media.media_details.width" :height="media.media_details.height" fit="cover" loading="lazy" quality="70" />
    <figcaption v-if="media.caption.rendered" v-html="media.caption.rendered " class="mt-2"></figcaption>
  </figure>
</template>

<style lang="scss" scoped>
  figcaption{
    font-size: 0.86em;
  }
</style>
