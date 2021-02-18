import { createSlice } from "@reduxjs/toolkit";
export const timerSlice = createSlice({
    name: "timer",
    initialState: {
        count: 90
    },
    reducers: {
        decrementByAmount: (state, action) => {
            state.count -= action.payload
        },
        decrement: (state) => {
            state.count --
        },
        resetTimer: (state, action) => action.payload
    }
})

export const decrementAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(decrementByAmount(1));
    }, 1000)
}

export const selectCount = state => state.timer.count
export const { decrementByAmount, decrement, resetTimer } = timerSlice.actions
export default timerSlice.reducer