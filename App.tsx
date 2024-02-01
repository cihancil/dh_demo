import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import { QueryClientProvider } from 'react-query'

import Navigator from './src/Navigator'
import store from './src/store'
import { queryClient } from './src/query/queryClient'

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient} contextSharing>
      <Provider store={store}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Navigator />
        </GestureHandlerRootView>
      </Provider>
    </QueryClientProvider>
  )

}

export default App
