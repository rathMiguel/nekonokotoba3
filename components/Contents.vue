<script setup lang="ts">
interface Props {
  postId: string;
}

interface BlocksData {
  results: Object[]
}

interface ListItems {
  type?: 'bulleted_list_item' | 'numbered_list_item'
  blocks?: Object[]
}

const props = withDefaults(defineProps<Props>(), {
  postId: "",
});

const { postId } = props
const { data } = await useFetch(`/api/notion/post/${postId}`)

/**
 * 記事ブロックデータを各ブロックに適用しやすいように加工。
 * ■主な機能
 * - 連続しているul（bulleted_list_item）のブロックを1つのグループにまとめる
 * 
 * @param data 取得した記事ブロックデータ
 */

const postBlocks = (data: BlocksData) => {
  const results: Object[] = data.results
  const resultsBlocks: Object[] = []
  const resultsCount: number = results.length
  let n: number = 0
  let bulletedListItems: ListItems = new Object()

  while (n < resultsCount) {

    /** リストブロックの一番最初の処理 */
    if(results[n - 1] !== undefined && results[n - 1].type !== 'bulleted_list_item' && results[n].type === 'bulleted_list_item'){
      bulletedListItems.type = 'bulleted_list_item'
      bulletedListItems.blocks = new Array()
    }

    /** リストブロックの最初から最後までの処理 */
    if(results[n].type === 'bulleted_list_item'){
      if(bulletedListItems.blocks === undefined) {
        console.log(bulletedListItems.blocks)
        break
      }
      bulletedListItems.blocks.push(results[n])
    }
    
    /** 最後のブロック且つ最後のリストブロックである場合 */
    if(n >= resultsCount - 1){
      if (results[n].type === 'bulleted_list_item' && bulletedListItems !== undefined) {
        let listBlocks: ListItems = { ...bulletedListItems }
        resultsBlocks.push(listBlocks)
      }
      break
    }

    /** グループ最後のリストブロックである場合 */
    else if (results[n].type === 'bulleted_list_item' && results[n + 1].type !== 'bulleted_list_item' && bulletedListItems !== undefined) {
      let listBlocks: ListItems = { ...bulletedListItems }
      resultsBlocks.push(listBlocks)
    }

    if(results[n].type !== 'bulleted_list_item'){
      resultsBlocks.push(results[n])
    }
    
    n++
  }

  return resultsBlocks
}
</script>

<template>
  <!-- <pre>{{ data }}</pre> -->
  <div v-for="value in postBlocks(data)" v-if="data" :key="value.id" class="block">
    <NotionBlockH1 v-if="value.type === 'heading_1'" :data="value" />
    <NotionBlockH2 v-else-if="value.type === 'heading_2'" :data="value" />
    <NotionBlockH3 v-else-if="value.type === 'heading_3'" :data="value" />
    <NotionBlockP v-else-if="value.type === 'paragraph'" :data="value" />
    <NotionBlockList v-else-if="value.type === 'bulleted_list_item'" :data="value" />
    <NotionBlockTable v-else-if="value.type === 'table'" :data="value" />
    <NotionBlockImage v-else-if="value.type === 'image'" :data="value" />
  </div>
</template>

<style lang="scss" scoped>

</style>
