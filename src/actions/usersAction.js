import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api-service/http-methods";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
    const resposne = await API.get("/users");
    return resposne;
});

export const getUsersById = createAsyncThunk("users/getUsersById", async (id) => {
    const resposne = await API.get(`/users/${id}`);
    return resposne;
});

export const updateUser = createAsyncThunk("users/updateUser", async (data) => {
    const resposne = await API.put(`/users/${data.id}`, data);
    return resposne;
});

export const createUser = createAsyncThunk("users/createUser", async (data) => {
    const resposne = await API.post(`/users`, data);
    return resposne;
});

export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
    const resposne = await API.delete(`/users/${id}`);
    //add id in payload, as we are using mock api and it return empty object {} as response with success
    return {resposne, id};
});
