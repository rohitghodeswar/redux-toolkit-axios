import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api-service/http-methods";

export const getUserPost = createAsyncThunk("userPosts/getUserPost", async (id) => {
    const resposne = await API.get(`/posts/${id}`);
    return resposne;
});