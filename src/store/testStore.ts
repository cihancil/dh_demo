import { createSlice } from '@reduxjs/toolkit'
import { TestType } from '../types/TestType'

export type TestState = {
  test: TestType | null
  activeIndex: number
}

const initialState: TestState = {
  test: null,
  activeIndex: 0,
}

const testSlice = createSlice({
  name: 'test',
  initialState: initialState,
  reducers: {
    setTestData(state, action) {
      const { testData } = action.payload
      state.test = testData
    },
    navigateNext(state) {
      if (!state.test) {
        return
      }
      if (state.activeIndex === state.test.questions.length - 1) {
        return
      }
      state.activeIndex = state.activeIndex + 1
    },
    navigatePrevious(state) {
      if (state.activeIndex === 0) {
        return
      }
      state.activeIndex = state.activeIndex - 1
    },
  }
})

export default testSlice
export const testActions = testSlice.actions