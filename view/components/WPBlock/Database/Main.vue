<script lang="ts" setup>
import { inject, ref, onMounted } from 'vue'

const options = inject('options')
const database = inject('databaseMaster')
const databaseKeys = inject('databaseKeys')
const filteredDatabase = inject('filteredDatabase')

filteredDatabase.value = database.value

const getTableHeadings = (text: string) => {
  if(!text || !database) return

  const headingTitles = text.replace(/\s+/g, "").split(',')
  return headingTitles
}

const todoChecks = ref(new Set())

onMounted(() => {
  const savedItems = localStorage.getItem(`todo_${options.sheet_title}`)
  if(savedItems) todoChecks.value = new Set(JSON.parse(savedItems))
})

const cellValue = (value: string | number | void) => {
  if(typeof value === 'number') return value.toLocaleString()
  return value
}

const saveTodo = () => {
  const todoChecksArr = [...todoChecks.value]
  const serializedTodoData = JSON.stringify(todoChecksArr)
  localStorage.setItem(`todo_${options.sheet_title}`, serializedTodoData)
}
</script>

<template>
  <div class="sheet-database-wrap mb-8">
    <table class="sheet-database-table">
      <thead v-if="getTableHeadings(options?.header_titles)">
        <tr>
          <th v-if="options.is_todo">ToDo</th>
          <th v-for="title in getTableHeadings(options?.header_titles)">{{ title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, index) in filteredDatabase" :class="todoChecks.has(`${options.sheet_title}_todo_${index}`) ? 'is-checked' : ''">
          <td v-if="options.is_todo" class="text-center">
            <label class="todo-label">
              <input type="checkbox" v-model="todoChecks" :value="`${options.sheet_title}_todo_${index}`" class="check-todo" v-on:change="saveTodo()">
              <font-awesome-icon class="icon icon-checkbox text-lg" :icon="['fas', 'square-check']" v-if="todoChecks.has(`${options.sheet_title}_todo_${index}`)" />
              <font-awesome-icon class="icon icon-checkbox text-lg" :icon="['far', 'square']" v-else />
            </label>
          </td>
          <td v-for="key in databaseKeys">
            {{ cellValue(value[key]) }}
          </td>
        </tr>
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
        
        &.is-checked{
          background-color: $color-caution;
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

  .todo-label{
    cursor: pointer;
  }
  .check-todo{
    appearance: none;
  }
  .icon-checkbox{
    color: $color-primary;
  }
</style>
