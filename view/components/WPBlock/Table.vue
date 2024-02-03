<script lang="ts" setup>
  const config = useRuntimeConfig()

  interface Props {
    options: Object
  }

  const props = withDefaults(defineProps<Props>(), {
    options: Object,
  })
</script>

<template>
  <div class="table-wrap">
    <table class="wp-table my-8">
      <thead v-if="options.table.h">
        <tr>
          <th v-for="heading in options.table.h" v-html="heading.c"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="rows in options.table.b">
          <td v-for="cell in rows" v-html="cell.c"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss">
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

.table-wrap{
  width: 100%;
  overflow-x: auto;
  margin-top: 1.5em;
  margin-bottom: 2.5em;
}

.wp-table{
  width: 800px;
  table-layout: fixed;
  font-size: 0.86em;
  @include media(md){
    width: 100%;
  }

  th, td{
    padding: 1em;
    border: 1px solid #DDD;
  }

  thead{
    color: #FFF;
    background-color: #25374B;
    th{
      &:not(:last-child){
        border-right: 1px solid #FFF;
      }
    }
  }

  tbody{
    tr{
      &:nth-child(2n + 1){
        background-color: #EDEDED;
      }
    }
  }

  a{
    text-decoration: underline;
    &:hover{
      text-decoration: none;
    }
  }
}
</style>