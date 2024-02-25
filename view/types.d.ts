export interface Seisan {
  member: number
  amounts: number[]
  items: {
    name: string
    amount: number
  }[]
}

export interface Sheet {
  range: string
  majorDimension: string
  values: string[]
}