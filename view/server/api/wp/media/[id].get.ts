import { type H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {

  if(event.context.params === undefined) return
  const imgId = event.context.params.id
  const response: Response = await fetch(`${process.env.WP_API_URL}media/${imgId}`)
  
  return await response.json()
})
