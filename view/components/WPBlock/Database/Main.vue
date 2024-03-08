<script lang="ts" setup>
import { inject, ref, onMounted } from 'vue';

const options = inject('options');
const database = inject('databaseMaster');
const databaseKeys = inject('databaseKeys');
const filteredDatabase = inject('filteredDatabase');

filteredDatabase.value = database.value;

/**
 * テーブルのヘッダーの表示処理 
 * カンマ区切りにした文字をテーブルヘッダー用の配列に変換
 * 
 * @param text テーブルヘッダー用のフィールドの文字列
 * @return ヘッダーの各セルの文字
 */

const getTableHeadings = (text: string): string[] | void => {
  if (!text || !database) return;

  const headingTitles = text.replace(/\s+/g, '').split(',');
  return headingTitles;
};

/** ToDo判定用のデータセットの初期化 */
const todoChecks = ref(new Set<string>());

/**
 * ロード時、ストレージにセットされたToDoデータをセット
 */
onMounted(() => {
  const savedItems = localStorage.getItem(`todo_${options.sheet_title}`);
  if (savedItems) todoChecks.value = new Set(JSON.parse(savedItems));
});

/**
 * ToDoチェックのセーブ  
 * チェックされたToDoをローカルストレージに保存する
 */

const saveTodo = () => {
  const todoChecksArr = [...todoChecks.value];
  const serializedTodoData: string = JSON.stringify(todoChecksArr);
  return localStorage.setItem(`todo_${options.sheet_title}`, serializedTodoData);
};

/**
 * セル内の文字を加工して返す
 * 
 * @param value セル内の文字列
 * @return numberの場合、カンマ区切りの数字
 * @return stringの場合、文字列を返す
 */
const cellValue = (value: string | number | void) => {
  if (typeof value === 'number') return value.toLocaleString();
  return value;
};

</script>

<template>
  <div class="sheet-database-wrap mb-8">
    <table class="sheet-database-table">
      <thead v-if="getTableHeadings(options.header_titles)">
        <tr>
          <th v-if="options.is_todo">ToDo</th>
          <th v-for="title in getTableHeadings(options?.header_titles)">
            {{ title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(value, index) in filteredDatabase"
          :class="todoChecks.has(`${options.sheet_title }_${value.key}`) ? 'is-checked' : ''"
          :key="`${value.key}_${index}`"
        >
          <td v-if="options.is_todo" class="text-center">
            <label class="todo-label">
              <input
                type="checkbox"
                v-model="todoChecks"
                :value="`${options.sheet_title }_${value.key}`"
                class="check-todo"
                v-on:change="saveTodo()"
              />
              <font-awesome-icon
                class="icon icon-checkbox text-lg"
                :icon="['fas', 'square-check']"
                v-if="todoChecks.has(`${options.sheet_title }_${value.key}`)"
              />
              <font-awesome-icon class="icon icon-checkbox text-lg" :icon="['far', 'square']" v-else />
            </label>
          </td>
          <template v-for="(key, indexCell) in databaseKeys">
            <td v-if="key !== 'key'" :key="`${value['key']}_${indexCell}`">
              {{ cellValue(value[key]) }}
            </td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

.sheet-database-wrap {
  width: 100%;
  overflow-x: auto;
}

.sheet-database-table {
  width: 800px;
  font-size: 0.86em;
  @include media(md) {
    width: 100%;
  }

  th,
  td {
    padding: 1em;
    border: 1px solid #ddd;
    @include media(md) {
      padding: 1em 1.5em;
    }
  }

  thead {
    color: #fff;
    background-color: #25374b;
    th {
      white-space: nowrap;
      &:not(:last-child) {
        border-right: 1px solid #fff;
      }
    }
  }

  tbody {
    tr {
      &:nth-child(2n + 1) {
        background-color: #ededed;
      }

      &.is-checked {
        background-color: $color-caution;
      }
    }
  }

  a {
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }

  &.is-fixed {
    table-layout: fixed;
  }
}

.todo-label {
  cursor: pointer;
}
.check-todo {
  appearance: none;
}
.icon-checkbox {
  color: $color-primary;
}
</style>
