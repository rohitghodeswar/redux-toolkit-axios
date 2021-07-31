import { createSlice } from "@reduxjs/toolkit";

const isPendingAction = (action) => action.type.endsWith("pending");

const isFulfilledAction = (action) => action.type.endsWith("fulfilled");

const isRejectedAction = (action) => action.type.endsWith("rejected");

// common loader or status slice handelled for all async actions for Promise state
const statusSlice = createSlice({
    name: "status",
    initialState: {
        status: null
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(isPendingAction, (state, action) => {
                state.status = "loading";
            })
            .addMatcher(isFulfilledAction, (state, action) => {
                state.status = "success";
            })
            .addMatcher(isRejectedAction, (state, action) => {
                state.status = "rejected";
            });
    }
});

export const statusSelector = (state) => state.status;

export default statusSlice.reducer;
