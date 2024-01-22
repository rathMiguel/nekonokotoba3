<script lang="ts" setup>
  import { inject } from 'vue'

  const seisanStatus = inject(seisanKey, seisanDefaultStatus)
  
  const handleRowButton = (index: number) => {
    const initialAmount = 0

    return {
      increment(): number[]{
        return seisanStatus.amounts.splice(index, 0, initialAmount)
      },
      decrement(): number[] | false{
        const confirm = window.confirm('この行を削除しますか？')
        if(!confirm) return false
        return seisanStatus.amounts.splice(index, 1)
      }
    }
  }
</script>

<template>
  <section>
    <header class="mb-4">
      <h1 class="mb-2">2. 売却額を入力</h1>
      <p><small><font-awesome-icon class="icon mr-1" :icon="['fas', 'circle-plus']" />ボタンで入力枠が増やせます。分割で売却した時の計算にお使いください！</small></p>
    </header>
    <div class="flex items-center mb-2" v-for="(value, index) in seisanStatus.amounts" ref="amountRefs">
      <input type="number" class="w-60 border-2 rounded-lg p-2 border-primary" v-model="seisanStatus.amounts[index]">
      <button title="入力枠を増やす" class="rounded-md size-11 text-xl ml-2" v-on:click="handleRowButton(index).increment">
        <font-awesome-icon class="icon" :icon="['fas', 'circle-plus']" />
      </button>
      <button title="入力枠を減らす" class="rounded-md size-11 text-xl" v-if="seisanStatus !== undefined && (seisanStatus.amounts.length - 1) > 0" v-on:click="handleRowButton(index).decrement">
        <font-awesome-icon class="icon text-error" :icon="['fas', 'circle-minus']" />
      </button>
    </div>
  </section>
</template>
