import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AppState } from '../pages/types/app'

const initialState: AppState = {
  category: '',
  amount: 0,
  difficulty: '',
  type: '',
  score: 0
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload
    },
    setAmount: (state, action: PayloadAction<number>) => {
      state.amount = action.payload
    },
    setDifficulty: (state, action: PayloadAction<string>) => {
      state.difficulty = action.payload
    },
    setType: (state, action: PayloadAction<string>) => {
      state.type = action.payload
    },
    setScore: (state, action: PayloadAction<number>) => {
      state.score = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCategory, setAmount, setDifficulty, setType, setScore } = appSlice.actions

export default appSlice.reducer