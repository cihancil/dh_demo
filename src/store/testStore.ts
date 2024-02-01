import { createSlice } from '@reduxjs/toolkit'
import { TestType } from '../types/TestType'

export type TestState = {
  test: TestType | null
  activeIndex: number
  userAnswers: Record<string, string | null>
}

const initialState: TestState = {
  test: null,
  activeIndex: 0,
  userAnswers: {},
}

const testSlice = createSlice({
  name: 'test',
  initialState: initialState,
  reducers: {
    setTestData(state, action) {
      const { testData } = action.payload
      state.test = testData
      if (state.test) {
        state.test.questions.forEach(q => {
          state.userAnswers[q.id] = null
        })
      }
    },
    setAnswer(state, action) {
      const { questionId, choiceId } = action.payload
      if (state.test) {
        state.userAnswers[questionId] = choiceId
      }
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