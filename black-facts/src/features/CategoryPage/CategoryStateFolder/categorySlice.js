import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
    name: "category",
    initialState: null,
    reducers: {
        addCategory: (state, action) => {
            return action.payload
        },
        clearCategory: (state) => null
    }
})

export const {addCategory, clearCategory} = categorySlice.actions
export default categorySlice.reducer