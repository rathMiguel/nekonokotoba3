import { type H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {

  if(event.context.params === undefined) return
  
  const title = event.context.params.title
  const response: Response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${process.env.SHEET_ID}/values/${title}/?key=${process.env.GOOGLE_API_KEY}`)

  return await response.json()
})
