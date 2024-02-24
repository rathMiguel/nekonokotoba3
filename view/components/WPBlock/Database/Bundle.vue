<script lang="ts" setup>
import { provide, inject } from 'vue'

const databaseValues = inject('sheetData')

const valuesWithKeys = () => {
  const outputData: string[] = []
  const { values } = databaseValues.value
  const headerKeys = values[0]
  
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
      headerKeysObject[values[0][index]] = value
    })

    outputData.push(headerKeysObject)
  }
  
  return outputData
}

const databaseData = ref(valuesWithKeys())
provide('database', databaseData)

</script>

<template>
  
</template>