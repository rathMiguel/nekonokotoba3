<script lang="ts" setup>
import { inject, watchEffect } from 'vue';

const seisanState = inject(seisanKey, seisanDefaultStatus);

/**
 * 割るメンバーの人数が1未満、または空値の場合、1にする
 * @returns PT人数を1にする
 */

watchEffect(() => {
  if (seisanState.member < 1) return (seisanState.member = 1);
});
</script>

<template>
  <section class="mb-6">
    <header>
      <h1 class="mb-2">1. PT人数を入力</h1>
    </header>
    <div class="w-40 flex items-center">
      <input
        type="number"
        min="1"
        max="12"
        step="1"
        class="w-full border-2 rounded-lg p-2 border-primary"
        v-model="seisanState.member"
      />
      <span class="inline-flex ml-3">人</span>
    </div>
  </section>
</template>
