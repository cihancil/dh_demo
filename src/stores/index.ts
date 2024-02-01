import { configureStore } from '@reduxjs/toolkit'

import testSlice from "./testStore"

const store = configureStore({
  reducer: { test: testSlice.reducer },
})

export type RootState = ReturnType<typeof store.getState>
export default store