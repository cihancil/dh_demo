import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import { QueryClientProvider } from 'react-query'
import { LogBox } from 'react-native'

import Navigator from './src/Navigator'
import store from './src/store'
import { queryClient } from './src/query/queryClient'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'

// will be fixed in next RN update  https://github.com/facebook/react-native/issues/42728
LogBox.ignoreLogs(['RCTBridge required dispatch_sync to load'])

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
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

export default App
