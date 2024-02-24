<script lang="ts" setup>
import { provide, inject, ref } from 'vue'

const databaseValues = inject('sheetData')
const { values } = databaseValues.value
const headerKeys: string[] = values[0]

const valuesWithKeys = () => {
  const outputData: string[] = []
  const { values } = databaseValues.value
  const headerKeys: string[] = values[0]
  
  /**
   * 1. 0番目の配列からオブジェクトの生成
   */
  const headerKeysObject = headerKeys.reduce((target: any, key: any) => {
    target[key]  = null
    return target
  }, {})

  /** 
   * 2. 1.で生成したオブジェクトに値を入れ、オブジェクトをバンドルする
   * 0はキーに使用されるため1からループスタート
   */
  for(let i = 1; i < values.length; i++){
    values[i].map((value: string, index: number) => {

      if(values[0][index].indexOf('_number') !== -1) {
        return headerKeysObject[values[0][index]] = Number(value)
      }

      return headerKeysObject[values[0][index]] = value
    })

    const valuesOutput = { ...headerKeysObject }
    outputData.push(valuesOutput)
  }

  return outputData
}

const databaseData = ref(valuesWithKeys())
const filteredDatabaseData = ref([])

provide('database', databaseData)
provide('filteredDatabase', filteredDatabaseData)
provide('databaseKeys', headerKeys)

</script>

<template>
  <WPBlockDatabaseSearch />
  <WPBlockDatabaseMain />
</template>