<script lang="ts" setup>
interface Props {
  imgId: number;
  height: number | 'auto';
  width: number | 'auto';
  className: string[];
}

const props = withDefaults(defineProps<Props>(), {
  imgId: 0,
  height: undefined,
  width: undefined,
});

const { data: media } = await useFetch(`/api/wp/media/${props.imgId}`);
</script>

<template>
  <NuxtImg
    :src="media.media_details.sizes.full.source_url"
    :alt="media.alt_text"
    :class="className"
    :width="width"
    :height="height"
    fit="cover"
    loading="lazy"
    quality="70"
  />
</template>
