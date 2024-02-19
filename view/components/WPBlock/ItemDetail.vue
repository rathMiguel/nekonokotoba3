<script lang="ts" setup>
  interface Props {
    options: {
      photo: number
      description: string
      title: string
      item_id: string
    } | undefined
  }

  const props = withDefaults(defineProps<Props>(), {
    options: Object
  })
</script>

<template>
  <blockquote class="text-sm leading-[1.85] border-2 border-secondary p-4 lg:p-6 mb-8">
    <div class="photo float-left pr-[15px] pb-[15px]">
      <WPBlockImage :img-id="options?.photo" />
    </div>
    <p>{{ options?.description }}</p>
    <p class="text-right mt-8">ー引用元：<cite><NuxtLink :href="`https://rotool.gungho.jp/item/${options?.item_id}`" target="_blank">{{ options?.title }}</NuxtLink></cite></p>
  </blockquote>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

p{
  white-space: pre-line;
}
</style>