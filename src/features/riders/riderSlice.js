import { createSlice } from "@reduxjs/toolkit";

const riderSlice = createSlice({
    name: "rider",
    initialState: {
        currentRiderDetail: null
    },
    reducers: {
        setCurrentRiderDetail: (state, action) => {
            const { currentRiderDetail } = action.payload;
            state.currentRiderDetail = currentRiderDetail;
        },
    },
    // extraReducers: {},
});

export const {
    setCurrentRiderDetail,
} = riderSlice.actions;

export const selectCurrentRiderDetail = (state) =>
  state?.rider?.currentRiderDetail;
export default riderSlice.reducer;