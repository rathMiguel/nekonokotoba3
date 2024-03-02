import { type InjectionKey } from 'vue'
import { type Seisan } from '~/types.d'

export const seisanKey: InjectionKey<Seisan> = Symbol()

export const seisanDefaultStatus: Seisan = {
  member: 1,
  amounts: [0],
  items: [
    {
      name: '',
      amount: 1
    }
  ]
}
