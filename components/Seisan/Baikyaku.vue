<script lang="ts" setup>
  import { inject } from 'vue'
  const seisanStatus = inject('seisanStatus')
  
  const handleRowButton = (index: number, incdec: 'inc' | 'dec' = 'inc'): number[] | undefined => {
    const initialAmount = 0

    switch (incdec) {
      case 'inc':
        return seisanStatus.amounts.splice(index, 0, initialAmount)
      case 'dec':
        return seisanStatus.amounts.splice(index, 1)
    }
  }
</script>

<template>
  <section>
    <header class="mb-4">
      <h1 class="mb-2">2. 売却額を入力</h1>
      <p><small><font-awesome-icon class="icon mr-1" :icon="['fas', 'circle-plus']" />ボタンで入力枠が増やせます。分割で売却した時の計算にお使いください！</small></p>
    </header>
    <div class="flex items-center mb-6" v-for="(value, index) in seisanStatus.amounts" ref="amountRefs">
      <input type="number" class="w-60 border-2 rounded-lg p-2 border-primary" v-model="seisanStatus.amounts[index]">
      <button title="入力枠を増やす" class="rounded-md size-11 text-xl ml-2" v-on:click="handleRowButton(index)">
        <font-awesome-icon class="icon" :icon="['fas', 'circle-plus']" />
      </button>
      <button title="入力枠を減らす" class="rounded-md size-11 text-xl" v-if="(seisanStatus.amounts.length - 1) > 0" v-on:click="handleRowButton(index, 'dec')">
        <font-awesome-icon class="icon text-error" :icon="['fas', 'circle-minus']" />
      </button>
    </div>
  </section>
</template>
