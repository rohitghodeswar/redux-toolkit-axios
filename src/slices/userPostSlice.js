import { createSlice } from "@reduxjs/toolkit";
import { getUserPost } from "../actions/userPostsAction";

const userPostsSlice = createSlice({
    name: "userPosts",
    initialState: {
        post: null
    },
    reducers: {
        resetPost: (state, _action) => {
            state.post = null;
        }
    },
    extraReducers: {
        [getUserPost.fulfilled]: (state, { payload }) => {
            state.post = payload.data;
        }
    }
});

export const userPostSelector = (state) => state.post;

export const { resetPost } = userPostsSlice.actions;

export default userPostsSlice.reducer;
