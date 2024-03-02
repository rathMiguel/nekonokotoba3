<script lang="ts" setup>
  interface Props {
    options: {
      table?: {
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
      },
      table_type: 'basic' | 'key_value',
      dl_group: {
        dt: string
        dd: string
      }[]
    } | undefined
  }

  const props = withDefaults(defineProps<Props>(), {
    options: undefined,
  })
</script>

<template>
  <div v-if="options">
    <!-- <pre>
      {{ options }}
    </pre> -->
    <div class="table-df mb-8 flex flex-wrap" v-if="options.table_type === 'key_value' && options.dl_group">
      <dl v-for="value in options.dl_group" class="dl-main">
        <dt>{{ value.dt }}</dt>
        <dd>{{ value.dd }}</dd>
      </dl>
    </div>
    <div class="table-wrap mb-4" v-if="options.table_type === 'basic' && options.table">
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
  </div>
</template>

<style lang="scss">
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

// DL
.dl-main{
  display: flex;
  width: 100%;
  font-size: 0.86em;
  margin-bottom: -1px;
  @include media(sm){
    width: 50%;
  }
  @include media(lg){
    width: 33.333%;
  }
  @include media(xl){
    width: 25%;
  }
  dt, dd{
    padding: 0.35em 0.8em;
  }
  dt{
    color: #FFF;
    background-color: $color-primary;
    white-space: nowrap;
    width: 50%;
    border: 1px solid $color-primary;
  }
  dd{
    width: 50%;
    border: 1px solid $color-primary;
  }
}

// Table
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
      white-space: nowrap;
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