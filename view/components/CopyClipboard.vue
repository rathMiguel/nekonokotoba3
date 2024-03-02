<script lang="ts" setup>
interface Props {
  text: string;
}

const props = withDefaults(defineProps<Props>(), {
  text: '',
});

const copyToClipboard = (text: string) => {
  return navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log(`copy to Clipboard "${text}"`);
    })
    .catch((e) => {
      console.error(e);
    });
};
</script>

<template>
  <button title="クリップボードにコピー" class="rounded-md size-11 text-base" v-on:click="copyToClipboard(text)">
    <font-awesome-icon class="icon text-primary" :icon="['far', 'copy']" />
  </button>
</template>
