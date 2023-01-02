import { configureStore } from '@reduxjs/toolkit'
import gameStateSlice from './gameStateSlice'

export const store = configureStore({
  reducer: { game:gameStateSlice },
})