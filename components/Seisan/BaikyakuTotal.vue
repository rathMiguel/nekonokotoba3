<script lang="ts" setup>
  import { inject, computed } from 'vue'
  
  const seisanState = inject(seisanKey, seisanDefaultStatus)

  const aomoutsTotal = computed(() => {
    
    const amlountsCopy = seisanState.amounts.concat()
    const nonEmptyAmounts = amlountsCopy.filter((value: number | '') => value !== '')

    return nonEmptyAmounts.reduce((x, y) => x + y, 0)
  })

  const copyToClipboard = (text: string) => {
    return navigator.clipboard.writeText(text)
      .then(() => { console.log(`copy to Clipboard "${text}"`) })
      .catch(e => { console.error(e) })
  }

  seisanState
</script>

<template>
  <section>
    <div class="mt-8 p-4 bg-slate-100 rounded-md mb-6">
      <dl class="flex items-center">
        <dt>合計額：</dt>
        <dd class="flex items-center">
          <span class="border-b-2 px-1" title="クリップボードにコピー">{{ aomoutsTotal.toLocaleString() }}</span>
          <span class="ml-1">zeny</span>
          <button title="金額をクリップボードにコピー" class="rounded-md size-11 text-base" v-on:click="copyToClipboard(String(aomoutsTotal))">
            <font-awesome-icon class="icon text-primary" :icon="['far', 'copy']" />
          </button>
        </dd>
      </dl>
      <dl class="flex items-center" v-if="seisanState !== undefined">
        <dt>一人あたりの受取額：</dt>
        <dd class="flex items-center">
          <span class="border-b-2 px-1" title="クリップボードにコピー">
            {{ (Math.floor(aomoutsTotal / seisanState.member)).toLocaleString() }}
          </span>
          <span class="ml-1">zeny</span>
          <button title="金額をクリップボードにコピー" class="rounded-md size-11 text-base" v-on:click="copyToClipboard(String(Math.floor(aomoutsTotal / seisanState.member)))">
            <font-awesome-icon class="icon text-primary" :icon="['far', 'copy']" />
          </button>
        </dd>
      </dl>
    </div>
  </section>
</template>
