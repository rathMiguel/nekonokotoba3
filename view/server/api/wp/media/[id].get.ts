import { type H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  const { preview } = getQuery(event)
  const headers = preview ? {
    Authorization : `Basic ${process.env.WP_PREVIEW_KEY}`
  } : undefined
  if(event.context.params === undefined) return

  const imgId = event.context.params.id
  const response: Response = await fetch(`${process.env.WP_API_URL}media/${imgId}`, {
    headers
  })
  
  return await response.json()
})
