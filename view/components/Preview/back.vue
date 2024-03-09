<script lang="ts" setup>
interface Props {
  backLink: string;
}

withDefaults(defineProps<Props>(), {
  backLink: '',
});
</script>

<template>
  <div class="preview">
    <div class="preview-panel md:flex items-center w-full md:w-[700px] bg-white rounded-xl p-4">
      <NuxtLink class="button" :href="backLink">
        編集にもどる
      </NuxtLink>
      <div class="md:ml-4 hidden md:block">
        <p class="mb-0 text-sm">編集を続ける場合は「編集にもどる」ボタンを押し、編集画面に進みます</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

.preview{
  position: fixed;
  width: 100%;
  bottom: 15px;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  padding-left: 15px;
  padding-right: 15px;
}

.preview-panel{
  box-shadow: 0 0 10px rgba(#000, 0.15)
}

.button{
  @include button-basic;
  background-color: $color-primary;
  color: #FFF;
  border-radius: 0.5em;
}
</style>