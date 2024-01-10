import { Client } from "@notionhq/client"
import type { H3Event } from 'h3'

interface postsQueryList {
  slug: string
  tags: string
}

export default defineEventHandler((event: H3Event) => {
  const notion: Client = new Client({ auth: process.env.NOTION_TOKEN })
  const databaseId: string = process.env.NOTION_DATABASE_ID

  const initQuery: postsQueryList = {
    slug: '',
    tags: ''
  }

  const queryEventParams: Object = getQuery(event)
  const allQueryParams: postsQueryList = Object.assign(initQuery, queryEventParams)

  const { slug, tags } = allQueryParams

  const response = notion.databases.query({
    database_id: databaseId,
    filter: {
      and: [
        {
          property: "Slug",
          rich_text: {
            equals: slug
          }
        },
        {
          property: "Tags",
          multi_select: {
            contains: tags
          }
        }
      ]
    }
  })

  return response
})
