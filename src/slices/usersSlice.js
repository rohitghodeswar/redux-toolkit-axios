import { createSlice } from "@reduxjs/toolkit";
import { getUsers, getUsersById, createUser, updateUser, deleteUser } from "../actions/usersAction";

const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: []
    },
    extraReducers: {
        [getUsers.fulfilled]: (state, { payload }) => {
            state.users = payload.data;
        },
        [getUsersById.fulfilled]: (state, { payload }) => {
            state.users = [payload.data]; // data is returning in single object
        },
        [createUser.fulfilled]: (state, { payload }) => {
            // added new user in users list
            state.users = [...state.users, payload.data];
        },
        [updateUser.fulfilled]: (state, { payload }) => {
            state.users = state.users.map((user) =>
                user.id === payload.data.id ? { ...user, ...payload.data } : user
            );
        },
        [deleteUser.fulfilled]: (state, { payload }) => {
            state.users = state.users.filter((users) => users.id !== payload.id);
        }
    }
});

export const usersSelector = (state) => state.users;

export default usersSlice.reducer;

// commented code in extraReducers for status which is handeled in statusSclice.js of Promise state

// extraReducers: {
//     [getUsers.pending]: (state, _action) => {
//         state.status = "loading";
//     },
//     [getUsers.fulfilled]: (state, { payload }) => {
//         state.users = payload.data;
//         state.status = "success";
//     },
//     [getUsers.rejected]: (state, _action) => {
//         state.status = "rejected";
//     }
// }
