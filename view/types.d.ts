export interface ApiResponse<T> {
  data: T;
  error: any[];
  result: boolean;
}

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
  values: string[
    string[]
  ]
}

export interface DatabaseOptions {
  sheet_title: string;
  header_titles: string;
  is_todo: boolean;
  is_search: boolean;
}