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
      }
    } | undefined
  }

  const props = withDefaults(defineProps<Props>(), {
    options: undefined,
  })
</script>

<template>
  <div class="table-wrap" v-if="options">
    <table class="wp-table mb-4">
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
  margin-bottom: 1.5em;
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