<script setup lang="ts">
interface Props {
  data: {
    blocks: Object
  }
}

const props = withDefaults(defineProps<Props>(), {
  data: Object,
});

</script>

<template>
  <ul>
    <li v-for="value in data.blocks" v-if="data">{{ value.bulleted_list_item.rich_text[0].text.content }}</li>
  </ul>
</template>

<style lang="scss" scoped>
ul,
ol{
  margin-bottom: 1.5em;
  list-style-type: disc;
  margin-left: 1em;
  li{
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    &::marker{
      color: #A0C5B4;
    }
  }
}

ol{
  list-style-type: decimal;
}
</style>
