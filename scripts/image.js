import env from 'dotenv/config'
import fs from 'fs'
import { Client } from "@notionhq/client"

const { NOTION_TOKEN, NOTION_DATABASE_ID } = process.env

/**
 * ヘッダー情報の定義
 */

const notionHeaders = new Headers({
  'accept': 'application/json',
  'Notion-Version': '2022-06-28',
  'Authorization': `Bearer ${NOTION_TOKEN}`
})

// /**
//  * 
//  * @param {string} url apiのurl
//  * @returns 
//  */

const notionDataList = (url) => {
  return fetch(url, {
    method: 'GET',
    headers: notionHeaders
  })
	.then((res) => {
    return res.json()
  })
	.then((json) => {
    return json
  })
}

/**
 * 画像ブロックの検索
 * 各ページの画像ブロックを検索。リストへ格納する
 */

(async () => {
  const notion = new Client({ auth: NOTION_TOKEN })

  // 1. データベースのidのみ抽出
  const dataList = await notion.databases.query({database_id: NOTION_DATABASE_ID})
  const dataListIds = await dataList.results.map((block) => {
    return block.id
  })

  // 2. 1.で生成された配列を元に各記事ブロックの画像を抽出
  dataListIds.map(async (id) => {
    let postBlocks = await notion.blocks.children.list({
      block_id: id
    })    
    const postBlocksHasImage = postBlocks.results.filter(block => block.type === 'image')
    
    if(postBlocksHasImage.length !== 0){
      postBlocksHasImage.map((block) => {
        createImageFile(block.id, block.image.file.url)
      })
    }
  })

})()

const createImageFile = async (imageId, imageUrl) => {
  const imageOptions = {
    path: 'public/images/notion/',
    ext: ['.jpg', '.jpeg', '.gif', '.png', '.webp']
  }
  const res = await fetch(imageUrl)
  let ext = ''
  
  for (const value of imageOptions.ext) {
    if(imageUrl.indexOf(ext) !== -1) {
      ext = value
      break
    }
  }
  
  // バイナリデータはarrayBufferメソッドを叩いて取り出す
  const arrayBuffer = await res.arrayBuffer()

  // Uint8ContentsのArrayBuffer型 -> Buffer型に変換
  const buffer = Buffer.from(arrayBuffer)
  fs.writeFileSync(imageOptions.path + imageId + ext, buffer)
}
