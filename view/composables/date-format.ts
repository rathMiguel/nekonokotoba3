import { cdate } from "cdate"

export const formattedDate = (time: string, format: string = 'YYYY.MM.DD'): string => {
  const date: cdate.CDate = cdate(time)
  const dateFormatted: string = date.format(format)

  return dateFormatted
}
