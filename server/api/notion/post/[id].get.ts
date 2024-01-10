import { Client } from "@notionhq/client"
import { type H3Event } from 'h3'

export default defineEventHandler((event: H3Event) => {
  const notion: Client = new Client({ auth: process.env.NOTION_TOKEN })

  if(event.context.params === undefined) return
  const response = notion.blocks.children.list({
    block_id: event.context.params.id
  })

  return response
})