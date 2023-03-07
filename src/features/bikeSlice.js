import { createSlice } from "@reduxjs/toolkit";

const bikeSlice = createSlice({
    name: "bike",
    initialState: {
        currentBikeDetail: null
    },
    reducers: {
        setCurrentBikeDetail: (state, action) => {
            const { currentBikeDetail } = action.payload;
            state.currentBikeDetail = currentBikeDetail;
        },
    },
    // extraReducers: {},
});

export const {
    setCurrentBikeDetail,
} = bikeSlice.actions;

export const selectCurrentBikeDetail = (state) =>
  state?.bike?.currentBikeDetail;
export default bikeSlice.reducer;