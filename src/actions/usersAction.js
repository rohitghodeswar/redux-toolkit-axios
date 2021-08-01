import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api-service/http-methods";

export const getUsers = createAsyncThunk("users/getUsers", async (_, { rejectWithValue }) => {
    try {
        const response = await API.get("/users");
        return response;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const getUsersById = createAsyncThunk("users/getUsersById", async (id, { rejectWithValue }) => {
    try {
        const response = await API.get(`/users/${id}`);
        return response;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const updateUser = createAsyncThunk("users/updateUser", async (data, { rejectWithValue }) => {
    try {
        const response = await API.put(`/users/${data.id}`, data);
        return response;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const createUser = createAsyncThunk("users/createUser", async (data, { rejectWithValue }) => {
    try {
        const response = await API.post(`/users`, data);
        return response;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const deleteUser = createAsyncThunk("users/deleteUser", async (id, { rejectWithValue }) => {
    try {
        const response = await API.delete(`/users/${id}`);
        //add id in payload.
        //as we are using mock api and it return empty object-{} as response with success
        return { response, id };
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
