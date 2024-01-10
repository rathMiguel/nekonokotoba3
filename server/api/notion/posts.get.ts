import { Client } from "@notionhq/client"
import { type H3Event } from 'h3'

export default defineEventHandler((event: H3Event) => {
  const notion: Client = new Client({ auth: process.env.NOTION_TOKEN })
  const databaseId: string = process.env.NOTION_DATABASE_ID

  const response = notion.databases.query({
    database_id: databaseId,
  })

  return response
})
