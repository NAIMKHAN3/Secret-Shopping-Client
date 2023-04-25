import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    card: []
}

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        addToCard: (state, action) => {
            state.card.push(action.payload)
        }
    }
})
export const { addToCard } = cardSlice.actions;

export default cardSlice.reducer;