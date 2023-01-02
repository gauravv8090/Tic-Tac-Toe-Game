import { createSlice } from '@reduxjs/toolkit'

// const initialState = ["","","","","","","","","" ];
const initialState = {
    list: ["","","","","","","","","" ]
}

export const gameStateSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    changeGameState: (state, action) => {
      state.list = action.payload;
      console.log("inside redux", action.payload);
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeGameState } = gameStateSlice.actions

export default gameStateSlice.reducer 