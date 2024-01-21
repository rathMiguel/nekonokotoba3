<script lang="ts" setup>
  import { inject, computed } from 'vue'
  const seisanStatus  = inject('seisanStatus')

  const handleRowButton = (index: number, incdec: 'inc' | 'dec' = 'inc'): number[] => {
    const initialAmount = {
      name: '',
      amount: 1
    }

    switch (incdec) {
      case 'inc':
        return seisanStatus.items.splice(index, 0, initialAmount)
      case 'dec':
        const confirm = window.confirm('このアイテムを削除しますか？')
        if(!confirm) return 
        return seisanStatus.items.splice(index, 1)
    }
  }

  const itemsPerNumber = computed(() => {
    return (index: number) => {
      return Math.floor((seisanStatus.items[index].amount / seisanStatus.member))
    }
  })

  const itemsPerRemainder = computed(() => {
    return (index: number) => {
      return Math.floor((seisanStatus.items[index].amount % seisanStatus.member))
    }
  })

  const copyToClipboard = (text: string) => {
    return navigator.clipboard.writeText(text)
      .then(() => { console.log(`copy to Clipboard "${text}"`) })
      .catch(e => { console.error(e) })
  }
</script>

<template>
  <section>
    <header>
      <h1 class="mb-2">option. アイテムの割り勘計算</h1>
    </header>
    <!-- <pre>
      {{ seisanStatus }}
    </pre> -->
    <div class="table-wrap">
      <table class="items-table">
        <thead>
          <tr>
            <th>アイテム名</th>
            <th>個数</th>
            <th class="cell-per-amount">一人<span class="hidden sm:inline-block">あたり</span></th>
            <th class="cell-per-remainder">余り</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value, index) in seisanStatus.items">
            <td><input type="text" v-model="value.name" class="border-2 rounded-md p-2 w-full" placeholder="壊れた魔法石"></td>
            <td>
              <div class="flex items-center">
                <input v-model="value.amount" type="number" min="1" step="1" class="border-2 rounded-md p-2 w-[5em]">
                <div class="whitespace-nowrap">
                  <button title="入力枠を増やす" class="rounded-md size-11 text-xl" v-on:click="handleRowButton(index)">
                    <font-awesome-icon class="icon" :icon="['fas', 'circle-plus']" />
                  </button>
                  <button title="入力枠を減らす" class="rounded-md size-11 text-xl" v-on:click="handleRowButton(index, 'dec')" v-if="(seisanStatus.items.length - 1) > 0">
                    <font-awesome-icon class="icon text-error" :icon="['fas', 'circle-minus']" />
                  </button>
                </div>
              </div>
            </td>
            <td class="cell-per-amount text-base">
              {{ itemsPerNumber(index) }}
              <button title="個数をクリップボードにコピー" class="rounded-md size-11 text-xl -mr-4" v-on:click="copyToClipboard(String(itemsPerNumber(index)))">
                <font-awesome-icon class="icon text-slate-400" :icon="['far', 'copy']" />
              </button>
            </td>
            <td class="cell-per-remainder text-base">
              {{ itemsPerRemainder(index) }}
              <button title="個数をクリップボードにコピー" class="rounded-md size-11 text-xl -mr-4" v-on:click="copyToClipboard(String(itemsPerRemainder(index)))">
                <font-awesome-icon class="icon text-slate-400" :icon="['far', 'copy']" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @use '~/assets/scss/settings' as *;
  @use '~/assets/scss/mixins' as *;

  .table-wrap{
    width: 100%;
    overflow-x: auto;
  }
  .items-table{
    font-size: 0.86em;
    width: 450px;
    @include media(sm){
      width: 100%;
    }
    th, td{
      padding: 0.5rem;
      text-align: left;
    }

    thead{
      th{
        &:not(:nth-last-child(-n+2)){
          border-bottom: 3px double $color-primary;
        }

        &:nth-child(1){
          width: 50%;
        }
        &:nth-child(2){
          width: 20%;
        }
        &:nth-child(3){
          width: 15%;
        }
        &:nth-child(4){
          width: 15%;
        }
      }
    }

    tbody{
      border-bottom: 1px solid $color-primary;
        & > tr {
        background-color: #FAFAFA;
        &:nth-child(odd){
          background-color: #EDF3F9;
        }
      }
    }

    .cell-per-amount{
      text-align: center;
      background-color: #DFE7F0 !important;
    }

    .cell-per-remainder{
      text-align: center;
      background-color: #EDF3F9 !important;
    }
  }
</style>
