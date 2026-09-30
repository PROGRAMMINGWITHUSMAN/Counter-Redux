import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        }, 
        decrement: (state) => {
            if (state.count > 0) {
                state.count -= 1
            }
        },
        reset: (state) => {
            state.count = 0
        },
        customIncrement: (state, action) => {
            state.count += action.payload
        }
    }
})

export default counterSlice.reducer
export const { increment, decrement, reset, customIncrement } = counterSlice.actions