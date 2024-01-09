import { Client } from "@notionhq/client"

const notion: Client = new Client({ auth: process.env.NOTION_TOKEN })
const image_database_id: string = process.env.NOTION_DATABASE_ID

let payload: any[] = []

async function getPosts() {
  const data = await notion.databases.query({
    database_id: image_database_id,
  })
  return data
}

getPosts().then((data) => {
  payload = data.results
})

export default defineEventHandler(() => payload)
