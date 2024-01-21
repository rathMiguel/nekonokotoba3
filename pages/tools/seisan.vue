<script lang="ts" setup>
  import { reactive, provide } from 'vue'

  interface Seisan {
    member: number
    amounts: number[]
  }

  const seisanState = reactive<Seisan>({
    member: 1,
    amounts: [0]
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
    <!-- {{ seisanState }} -->
    <SeisanMember />
    <SeisanBaikyaku />
    <SeisanBaikyakuTotal />
  </article>
</template>

<style lang="scss" scoped>

</style>
