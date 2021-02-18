import { createSlice } from "@reduxjs/toolkit";
export const scoreSlice = createSlice({
    name: "score",
    initialState:  {
        value: 0
    },
    reducers: {
        clearScore: (state) =>  {
            state.value  = 0
        },
        addScore : (state) => {
            state.value += 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
          }
    },
})
export const incrementAsync = amount => dispatch => {
    setTimeout(() => {
      dispatch(incrementByAmount(amount));
    }, 1000);
  };
  export const selectCount = state => state.score.value;
export const currentScore = (state) => state.score
export const { addScore, clearScore, incrementByAmount} = scoreSlice.actions
export default scoreSlice.reducer