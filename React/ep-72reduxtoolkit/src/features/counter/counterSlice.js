import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0, //if i need to take this value then use useselectorhook
  },
  reducers: {  //reducers function
    increment: (state) => {//this are action increment decrement incerement by amount 
      state.value += 1
    },
    reset: (state) => {
      state.value = 0
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += Number(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,reset } = counterSlice.actions

export default counterSlice.reducer//need to register it