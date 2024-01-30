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
    {{ data }}
  </pre> -->
</template>
