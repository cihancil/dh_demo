import React from 'react'
import {
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import TestScreen from './screens/TestScreen'
import ResultScreen from './screens/ResultScreen'

const Stack = createNativeStackNavigator()

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        presentation: 'fullScreenModal'
      }}>
        <Stack.Screen
          name="Test"
          component={TestScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export type RootStackParamList = {
  Test: undefined
  Result: undefined
}