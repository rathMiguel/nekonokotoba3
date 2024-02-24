<script lang="ts" setup>
  interface Props {
    options: {
      sheet_title: string
      header_titles: string
      is_todo: boolean
      is_search: boolean
    } | undefined
  }

  interface PropsData extends Props {
    data: string[][] | undefined
  }

  const props = withDefaults(defineProps<PropsData>(), {
    options: undefined,
    data: undefined
  })

  const getTableHeadings = (text) => {
    if(!text && !props.data) return
    if(!text) {
      return props.data[0]
    }

    const headingTitles = text.split(',')
    return headingTitles
  }
</script>

<template>
  <div class="sheet-database-wrap mb-4">
    <table class="sheet-database-table">
      <!-- <thead v-if="getTableHeadings(options?.header_titles)">
        <tr>
          <th v-for="title in getTableHeadings(options?.header_titles)">{{ title }}</th>
        </tr>
      </thead> -->
      <tbody>
        <tr></tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

  .sheet-database-wrap{
    width: 100%;
    overflow-x: auto;
  }

  .sheet-database-table{
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