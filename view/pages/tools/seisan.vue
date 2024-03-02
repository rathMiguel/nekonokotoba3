<script lang="ts" setup>
import { reactive, provide } from 'vue';
import { type Seisan } from '~/types.d';

const seisanState = reactive<Seisan>(seisanDefaultStatus);

provide(seisanKey, seisanState);
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
