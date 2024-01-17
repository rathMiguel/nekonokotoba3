<script setup lang="ts">
interface Props {
  data: {
    results: {
      object: string
      id: string
      parent: {
        type: string
        block_id: string
      }
      created_time: string
      table_row: {
        cells: {
          type: string
        }[]
      }
    }[]
  }

  table: {
    table_width: number
    has_column_header: boolean
    has_row_header: boolean
  }
}

const props = withDefaults(defineProps<Props>(), {
  data: Object,
  table: Object,
});

</script>

<template>
  <!-- <pre>
    {{ data.results }}
    {{ table }}
  </pre> -->
  <div class="table-wrap">
    <table>
      <thead v-if="table && table.has_column_header">
        <tr>
          <th v-for="value in data.results[0].table_row.cells" v-if="data">
            {{ value[0].plain_text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="table" v-for="(value, index) in data.results">
          <td
            v-for="value2 in value.table_row.cells"
            v-if="table.has_column_header !== false && index !== 0"
          >
            <template v-for="value3 in value2" v-if="value2.length">
              {{ value3.text.content }}<br>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

.table-wrap{
  width: 100%;
  overflow-x: auto;
  margin-top: 1.5em;
  margin-bottom: 2.5em;
}

table{
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
  
}
</style>
