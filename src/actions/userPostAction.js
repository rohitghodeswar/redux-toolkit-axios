import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api-service/http-methods";

export const getUserPost = createAsyncThunk("userPosts/getUserPost", async (id, { rejectWithValue }) => {
    try {
        const response = await API.get(`/posts/${id}`);
        return response;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
