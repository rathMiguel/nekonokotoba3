import env from 'dotenv/config'
import fs from 'fs'
import { Client } from "@notionhq/client"

const { NOTION_TOKEN, NOTION_DATABASE_ID } = process.env

/**
 * データベースのidのみ抽出
 * @returns { Array } データベース内の各ブロックのidが格納された配列
 */

const createDataList = async () => {
  const notion = new Client({ auth: NOTION_TOKEN })
  const dataList = await notion.databases.query({database_id: NOTION_DATABASE_ID})

  return await dataList.results.map((block) => {
    return block.id
  })
}

/**
 * @param { string } imageId Notion apiから取得した画像ブロックのid
 * @param { string } imageUrl Notion apiから取得した画像のパス
 * @returns 画像ファイルの書き込み。public/images/notion/[imageId].[拡張子]ファイル名で生成される
 */

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
  const filename = imageOptions.path + imageId + ext
  fs.writeFileSync(filename, buffer)
  return console.log(`create image \x1b[32m${filename}`)
}

/**
 * 画像ブロックの検索
 * 各ページの画像ブロックを検索。リストへ格納する
 */

(async () => {
  // 1. データベースの各ブロックのidを配列
  const databaseBlocksId = await createDataList()
  
  // 2. 1.で生成された配列を元に各記事ブロックの画像を抽出
  const notion = new Client({ auth: NOTION_TOKEN })
  databaseBlocksId.map(async (id) => {
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
