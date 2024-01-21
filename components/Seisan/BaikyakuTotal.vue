<script lang="ts" setup>
  import { inject, computed } from 'vue'
  const seisanState = inject('seisanStatus')

  const aomoutsTotal = computed(() => {
    const amlountsCopy: number[] = seisanState.amounts.concat()
    const nonEmptyAmounts: number[] = amlountsCopy.filter((value: number | '') => value !== '')

    return nonEmptyAmounts.reduce((x, y) => x + y, 0)
  })
</script>

<template>
  <section>
    <div class="mt-8 p-4 bg-slate-100 rounded-md">
      <dl class="flex mb-2">
        <dt>合計額：</dt>
        <dd>
          <span class="cursor-pointer border-b-2 px-1" title="クリップボードにコピー">{{ aomoutsTotal.toLocaleString() }}</span>
          <span> zeny</span>
        </dd>
      </dl>
      <dl class="flex">
        <dt>一人あたりの受取額：</dt>
        <dd>
          <span class="cursor-pointer border-b-2 px-1" title="クリップボードにコピー">{{ (Math.floor(aomoutsTotal / seisanState.member)).toLocaleString() }}</span>
          <span> zeny</span>
          <div class="-ml-2"><small class="ml-2 text-xs">※小数点以下は切り捨て</small></div>
        </dd>
      </dl>
    </div>
  </section>
</template>
