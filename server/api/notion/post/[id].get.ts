import { Client } from "@notionhq/client"

export default defineEventHandler((event) => {
  const notion: Client = new Client({ auth: process.env.NOTION_TOKEN })

  const response = notion.blocks.children.list({
    block_id: event.context.params.id
  })

  return response
})