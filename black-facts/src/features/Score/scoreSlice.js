import { createSlice } from "@reduxjs/toolkit";
export const scoreSlice = createSlice({
    name: "score",
    initialState: 0,
    reducers: {
        addScore: (state) => state++,
        clearScore: (state) => 0
    }
})

export const currentScore = (state) => state.score
export const {addScore, clearScore} = scoreSlice.actions
export default scoreSlice.reducer