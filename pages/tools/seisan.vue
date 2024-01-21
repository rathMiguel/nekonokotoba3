<script lang="ts" setup>
  import { reactive, provide } from 'vue'

  interface Seisan {
    member: number
    amounts: number[]
    items: {
      name: string
      amount: number
    }[]
  }

  const seisanState = reactive<Seisan>({
    member: 1,
    amounts: [0],
    items: [
      {
        name: '',
        amount: 1
      }
    ]
  })

   provide('seisanStatus', seisanState)
</script>

<template>
  <Head>
    <Title>清算計算機 - 猫のことば研究所</Title>
    <Meta name="description" content="" />
  </Head>
  <article>
    <header>
      <BlockH1>清算計算機</BlockH1>
    </header>
    <SeisanMember />
    <SeisanBaikyaku />
    <SeisanBaikyakuTotal />
    <SeisanItems />
  </article>
</template>
