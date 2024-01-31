<script lang="ts" setup>
  interface Props {
    data: Object
  }

  const props = withDefaults(defineProps<Props>(), {
    data: Object,
  })
</script>

<template>
  <!-- <pre>
    {{ data.acf.content }}
  </pre> -->
  <article>
    <div v-for="block in data.acf.content">
      <WPBlockImage :img-id="block.photo" v-if="block.acf_fc_layout === 'image'" />
      <WPBlockRichText :options="block" v-if="block.acf_fc_layout === 'rich_text'" />
      <WPBlockGallery :options="block" v-if="block.acf_fc_layout === 'gallery'" />
    </div>
  </article>
</template>
