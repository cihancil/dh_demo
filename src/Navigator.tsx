import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import TestScreen from './screens/TestScreen'
import ResultScreen from './screens/ResultScreen'

const Stack = createNativeStackNavigator()
const screenOptions = { headerShown: false }

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        presentation: 'fullScreenModal'
      }}>
        <Stack.Screen
          name="Test"
          component={TestScreen}
          options={screenOptions}
        />
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={screenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export type RootStackParamList = {
  Test: undefined
  Result: undefined
}