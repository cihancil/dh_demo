import React from 'react'
import type { PropsWithChildren } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native'

import jsonData from './mock/data.json'

console.log(jsonData)

function App(): React.JSX.Element {
  // const data = JSON.parse(jsonData)
  return (
    <SafeAreaView>
      {jsonData.questions.map(data => {
        return (
          <Text>{data.question}</Text>
        )
      })}
    </SafeAreaView>
  )
}

export default App
