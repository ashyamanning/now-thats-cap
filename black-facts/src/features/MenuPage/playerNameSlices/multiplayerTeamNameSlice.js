import { createSlice } from "@reduxjs/toolkit";
export const multiplayerTeamNameSlice = createSlice({
    name: "multiplayerTeamName",
    initialState: [],
    reducers: {
        addName: (state, action) => {
            state.push(action.payload)
        },
        clearName: (state) => []
    }
})

export const currentMultiplayerPlayerNames = (state) => state.multiplayerTeamName
export const {addName, clearName} = multiplayerTeamNameSlice.actions 
export default multiplayerTeamNameSlice.reducer