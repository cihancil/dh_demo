import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import { QueryClientProvider } from 'react-query'
import { LogBox, StyleSheet } from 'react-native'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'

import Navigator from './src/Navigator'
import store from './src/store'
import { queryClient } from './src/query/queryClient'

// will be fixed in next RN update  https://github.com/facebook/react-native/issues/42728
LogBox.ignoreLogs(['RCTBridge required dispatch_sync to load'])

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheetModalProvider>
        <QueryClientProvider client={queryClient} contextSharing>
          <Provider store={store}>
            <Navigator />
          </Provider>
        </QueryClientProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App
