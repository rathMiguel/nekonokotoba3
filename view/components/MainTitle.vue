<script lang="ts" setup>
interface Props {
  title: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: 'タイトルが入ります',
});
</script>

<template>
  <div class="maintitle bg-primary text-white text-center rounded-b-2xl p-4 md:p-6 md:mt-[-30px] mb-4">
    <h1 class="font-bold text-xl md:text-2xl">{{ title }}</h1>
  </div>
</template>
