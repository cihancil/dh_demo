import { createSlice } from '@reduxjs/toolkit'
import { TestType } from '../types/TestType'

export type TestState = {
  test: TestType | null
}

const initialState: TestState = {
  test: null,
}

const testSlice = createSlice({
  name: 'test',
  initialState: initialState,
  reducers: {
    setTestData(state, action) {
      const { testData } = action.payload
      state.test = testData
    },
  }
})

export default testSlice
export const testActions = testSlice.actions