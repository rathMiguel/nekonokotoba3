<script lang="ts" setup>
  const config = useRuntimeConfig()

  interface Props {
    imgId: number,
    height: number | 'auto' | null
    width: number | 'auto' | null
    class: string[]
  }

  const props = withDefaults(defineProps<Props>(), {
    imgId: 0,
    height: null,
    width: null
  })

  const { data: media } = await useFetch(`${config.public.WP_API_URL}media/${props.imgId}`)
</script>

<template>
  <NuxtImg
    :src="media.media_details.sizes.full.source_url"
    :alt="media.alt_text"
    :class="class"
    :width="width"
    :height="height"
    fit="cover"
    loading="lazy"
    quality="70"
   />
</template>