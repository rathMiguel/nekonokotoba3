import env from 'dotenv/config'
import fs from 'fs'
import { Client } from "@notionhq/client"

const { NOTION_TOKEN, NOTION_DATABASE_ID } = process.env

/**
 * データベースのidのみ抽出
 * @returns { Array } データベース内の各ブロックのidが格納された配列
 */

const pages = async () => {
  const notion = new Client({ auth: NOTION_TOKEN })
  const dataList = await notion.databases.query({database_id: NOTION_DATABASE_ID})

  return await dataList.results.map((block) => {
    return block.id
  })
}

const pageBlocks = async (pageId) => {
  const notion = new Client({ auth: NOTION_TOKEN })

  const blocks = await notion.blocks.children.list({
    block_id: pageId
  })

  return blocks.results
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
  return console.log(`create image \x1b[32m${filename}\u001b[0m`)
}

/**
 * ログファイルの出力
 */

const writeLogFile = (text) => {
  return fs.writeFileSync('logs/images.log', text)
}

/**
 * 画像ブロックの検索
 * 各ページの画像ブロックを検索。リストへ格納する
 */

(async () => {
  const notion = new Client({ auth: NOTION_TOKEN })

  // データベースの各ブロックのidを配列
  const databaseBlocksId = await pages()

  let arr = new Array()    // データベースのidリスト
  let arrImg = new Array() // 画像リスト
  let arr2 = new Array()   // 記事のブロック（第1階層）
  let arr3 = new Array()   // 記事のブロック（第2階層）
  
  // データベースのidを抽出
  for(let i = 0; i < databaseBlocksId.length; i++){
    const blockIds = await pageBlocks(databaseBlocksId[i])
    arr.push(blockIds)
  }

  // 第1階層ブロックから画像ブロックを抽出
  // 第2階層があるブロックの抽出
  for(let i = 0; i < databaseBlocksId.length; i++){
    const result = arr[i].filter((block) => block.has_children == true)
    arr2.push(result)

    const resultImages = arr[i].filter((block) => block.type === 'image')
    if(resultImages.length) arrImg.push(resultImages)
  }

  // 第2階層ブロックから画像ブロックを抽出
  // 第3階層があるブロックの抽出
  for(let i = 0; i < arr2.length; i++){
    for(let j = 0; j < arr2[i].length; j++){
      const bl = await notion.blocks.children.list({
        block_id: arr2[i][j].id
      })

      const result = bl.results.filter((block) => block.has_children == true)
      if(result.length) arr3.push(result)

      const resultImages = bl.results.filter((block) => block.type === 'image')
      if(resultImages.length) arrImg.push(resultImages)
    }
  }

  // 第3階層ブロックから画像ブロックを抽出
  for(let i = 0; i < arr3.length; i++){
    for(let j = 0; j < arr3[i].length; j++){
      const bl = await notion.blocks.children.list({
        block_id: arr3[i][j].id
      })

      const resultImages = bl.results.filter((block) => block.type === 'image')
      if(resultImages.length) arrImg.push(resultImages)
    }
  }

  // writeLogFile(JSON.stringify(arrImg, null, "\t"))

  // 生成された配列を元に各記事ブロックの画像を抽出
  for(let i = 0; i < arrImg.length; i++){
    for(let j = 0; j < arrImg[i].length; j++){
      const block = arrImg[i][j]
      createImageFile(block.id, block.image.file.url)
    }
  }

})()
