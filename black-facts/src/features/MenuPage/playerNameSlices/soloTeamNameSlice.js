import { createSlice } from "@reduxjs/toolkit";
export const soloTeamNameSlice = createSlice({
    name: "soloTeamName",
    initialState: "",
    reducers: {
        addName: (state, action) => {
            return action.payload
        },
        clearName: (state) => null
    }
})

export const currentPlayerName = (state) => state.soloTeamName
export const {addName, clearName} = soloTeamNameSlice.actions 
export default soloTeamNameSlice.reducer