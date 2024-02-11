import { type H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {

  if(event.context.params === undefined) return
  const { posttype, slug } = event.context.params

  const response: Response = await fetch(`${process.env.WP_API_URL}${posttype}/?slug=${slug}` )
  return await response.json()
})
