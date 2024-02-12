<script lang="ts" setup>
  interface Props {
    data: Object
  }

  const props = withDefaults(defineProps<Props>(), {
    data: Object,
  })
</script>

<template>
  <article>
    <div v-for="block in data.acf.content">
      <WPBlockImage :img-id="block.photo" v-if="block.acf_fc_layout === 'image'" class="mb-8" />
      <WPBlockRichText :options="block" v-if="block.acf_fc_layout === 'rich_text'" />
      <WPBlockGallery :options="block" v-if="block.acf_fc_layout === 'gallery'" />
      <WPBlockTable :options="block" v-if="block.acf_fc_layout === 'table'" />
      <WPBlockMaplist :options="block" v-if="block.acf_fc_layout === 'maplist'" />
      <WPBlockMemo :options="block" v-if="block.acf_fc_layout === 'memo'" />
    </div>
  </article>
</template>
