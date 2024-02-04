export default defineEventHandler(async () => {
  const response: Response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${process.env.SHEET_ID}/?key=${process.env.GOOGLE_API_KEY}`)
  return await response.json()
})
