import { createSlice } from "@reduxjs/toolkit";
export const scoreSlice = createSlice({
    name: "score",
    initialState:  0,
    reducers: {
        clearScore: (state) => 0,
        addScore : (state) => {
            return state++
        }
    },

})


export const currentScore = (state) => state.score
export const { addScore, clearScore} = scoreSlice.actions
export default scoreSlice.reducer