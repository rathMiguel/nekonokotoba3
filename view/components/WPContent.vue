<script lang="ts" setup>
interface Props {
  data: Object;
}

const props = withDefaults(defineProps<Props>(), {
  data: Object,
});
</script>

<template>
  <article>
    <div v-for="block in data.acf.content">
      <WPBlockImage
        :img-id="block.photo"
        v-if="block.acf_fc_layout === 'image'"
        class="mb-8"
        :img-class="block.is_w_full ? 'w-full' : ''"
      />
      <WPBlockHeading :options="block" v-if="block.acf_fc_layout === 'heading'" />
      <WPBlockRichText :options="block" v-if="block.acf_fc_layout === 'rich_text'" />
      <WPBlockLink :options="block" v-if="block.acf_fc_layout === 'link'" />
      <WPBlockGallery :options="block" v-if="block.acf_fc_layout === 'gallery'" />
      <WPBlockTable :options="block" v-if="block.acf_fc_layout === 'table'" />
      <WPBlockMaplist :options="block" v-if="block.acf_fc_layout === 'maplist'" />
      <WPBlockMemo :options="block" v-if="block.acf_fc_layout === 'memo'" />
      <WPBlockPhotoText :options="block" v-if="block.acf_fc_layout === 'photo_text'" />
      <WPBlockItemDetail :options="block" v-if="block.acf_fc_layout === 'item_detail'" />
      <WPBlockDatabase :options="block" v-if="block.acf_fc_layout === 'database'" />
    </div>
  </article>
</template>
