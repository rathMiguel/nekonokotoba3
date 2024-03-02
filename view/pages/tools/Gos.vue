<script lang="ts" setup>
import { reactive } from 'vue';

interface GosState {
  status: {
    str: number;
    agi: number;
    vit: number;
    dex: number;
    int: number;
    luk: number;
  };
}

const gosState = reactive<GosState>({
  status: {
    str: 1,
    agi: 1,
    vit: 1,
    dex: 1,
    int: 1,
    luk: 1,
  },
});

const attrCalc = computed(() => {
  const attRatio = 18;

  return (att1: number, att2: number, step: number = 7): number => {
    return Math.floor((att1 + att2) / attRatio) * step;
  };
});
</script>

<template>
  <Head>
    <Title>GOS耐性計算 - 猫のことば研究所</Title>
    <Meta name="description" content="" />
  </Head>
  <article>
    <header class="mb-10">
      <BlockH1>GOS耐性計算機</BlockH1>
      <p>
        <a href="https://rotool.gungho.jp/item/480045/0/" target="_blank" class="underline">ガーディアンオブソウル</a
        >の耐性やステータスアップの計算ができます
      </p>
    </header>
    <div class="flex [&>*]:w-full gap-5">
      <div class="p-4 mb-4 bg-slate-100 rounded-md">
        <table>
          <tbody class="[&>tr>*]:py-1">
            <tr>
              <th class="pr-1">Str</th>
              <td>
                <input
                  type="number"
                  class="border-2 p-1 rounded-md"
                  min="1"
                  max="130"
                  step="1"
                  v-model="gosState.status.str"
                />
              </td>
            </tr>
            <tr>
              <th class="pr-1">Agi</th>
              <td>
                <input
                  type="number"
                  class="border-2 p-1 rounded-md"
                  min="1"
                  max="130"
                  step="1"
                  v-model="gosState.status.agi"
                />
              </td>
            </tr>
            <tr>
              <th class="pr-1">Vit</th>
              <td>
                <input
                  type="number"
                  class="border-2 p-1 rounded-md"
                  min="1"
                  max="130"
                  step="1"
                  v-model="gosState.status.vit"
                />
              </td>
            </tr>
            <tr>
              <th class="pr-1">Int</th>
              <td>
                <input
                  type="number"
                  class="border-2 p-1 rounded-md"
                  min="1"
                  max="130"
                  step="1"
                  v-model="gosState.status.dex"
                />
              </td>
            </tr>
            <tr>
              <th class="pr-1">Dex</th>
              <td>
                <input
                  type="number"
                  class="border-2 p-1 rounded-md"
                  min="1"
                  max="130"
                  step="1"
                  v-model="gosState.status.int"
                />
              </td>
            </tr>
            <tr>
              <th class="pr-1">Luk</th>
              <td>
                <input
                  type="number"
                  class="border-2 p-1 rounded-md"
                  min="1"
                  max="130"
                  step="1"
                  v-model="gosState.status.luk"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <section class="mb-4">
        <h3 class="font-700 mb-3 border-b-2 pb-2">属性耐性</h3>
        <ul class="[&>*]:py-1">
          <li>闇：{{ attrCalc(gosState.status.str, gosState.status.luk) }}%</li>
          <li>不死：{{ attrCalc(gosState.status.str, gosState.status.luk) }}%</li>
          <li>水：{{ attrCalc(gosState.status.agi, gosState.status.vit) }}%</li>
          <li>火：{{ attrCalc(gosState.status.agi, gosState.status.vit) }}%</li>
          <li>水：{{ attrCalc(gosState.status.int, gosState.status.dex) }}%</li>
          <li>風：{{ attrCalc(gosState.status.int, gosState.status.dex) }}%</li>
          <li>聖：-7%</li>
          <li>念：-7%</li>
        </ul>
      </section>
      <section class="mb-4">
        <h3 class="font-700 mb-3 border-b-2 pb-2">ステータスUP</h3>
        <ul class="[&>*]:py-1">
          <li>Atk + {{ attrCalc(gosState.status.str, gosState.status.luk, 15) }}</li>
          <li>
            スキルディレイ -
            {{ attrCalc(gosState.status.str, gosState.status.luk, 1) }}%
          </li>
          <li>
            攻撃速度 +
            {{ attrCalc(gosState.status.agi, gosState.status.vit, 2) }}%
          </li>
          <li>MaxHP + {{ attrCalc(gosState.status.agi, gosState.status.vit, 2) }}%</li>
          <li>Matk + {{ attrCalc(gosState.status.int, gosState.status.dex, 15) }}</li>
          <li>
            詠唱時間 -
            {{ attrCalc(gosState.status.int, gosState.status.dex, 1) }}%
          </li>
        </ul>
      </section>
    </div>
  </article>
</template>
