import { type H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {

  if(event.context.params === undefined) return
  const { posttype } = event.context.params
  const { id } = getQuery(event)

  console.log(`${process.env.WP_API_URL}${posttype}/${id}?_embed&status=draft`)

  const response: Response = await fetch(`${process.env.WP_API_URL}${posttype}/${id}?_embed&status=draft`, {
    headers: {
      Authorization: `Basic ${process.env.WP_PREVIEW_KEY}`
    }
  })
  return await response.json()
})
