<script lang="ts" setup>
  interface Props {
    options: {
      table: {
        h: {
          c: string
        }[]
        b: {
          c: string
        }[][]
      },
      options: {
        is_fixed: boolean
        is_th_vertical: boolean
      }
    } | undefined
  }

  const props = withDefaults(defineProps<Props>(), {
    options: undefined,
  })
</script>

<template>
  <div class="table-wrap mb-4" v-if="options">
    <table class="wp-table mb-4" :class="options.options.is_fixed && 'is-fixed'">
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
  margin-top: 1em;
  margin-bottom: 1em;
}

.wp-table{
  width: 800px;
  font-size: 0.86em;
  @include media(md){
    width: 100%;
  }

  th, td{
    padding: 1em;
    border: 1px solid #DDD;
    @include media(md){
      padding: 1em 1.5em;
    }
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

  &.is-fixed{
    table-layout: fixed;
  }
}
</style>