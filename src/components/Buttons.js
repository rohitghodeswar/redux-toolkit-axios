import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { useDispatch } from "react-redux";
import { getUsers, getUsersById, createUser, updateUser, deleteUser } from "../actions/usersAction";
import { resetPost } from '../slices/userPostSlice';

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1)
        },
        textAlign: "center",
        marginTop: 20
    },
    putStyle: {
        backgroundColor: "#ff9800"
    }
}));

const Buttons = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const getAllUsersBtnClick = () => {
        dispatch(getUsers());
    };

    const getUserByIdBtnClick = () => {
        const id = 1;
        dispatch(getUsersById(id));
        dispatch(resetPost()); // reset post to null
    };

    const createUserBtnClick = () => {
        const data = {
            id: 11,
            name: "John Wick",
            address: {
                street: "Waterloo Aveneue",
                city: "London",
                zipcode: "92998-3874"
            }
        };
        dispatch(createUser(data));
    };

    const updateUserBtnClick = () => {
        const data = {
            id: 1,
            name: "Bat-Man"
        };
        dispatch(updateUser(data));
    };

    const deleteUserBtnClick = () => {
        const id = 1;
        dispatch(deleteUser(id))
    };

    return (
        <Grid container>
            <Grid item xs={12}>
                <div className={classes.root}>
                    <Button color="primary" variant="contained" onClick={getAllUsersBtnClick}>
                        GET ALL - USERS
                    </Button>
                    <Button color="primary" variant="contained" onClick={getUserByIdBtnClick}>
                        GET USER BY - ID
                    </Button>
                    <Button variant="contained" onClick={createUserBtnClick}>
                        CREATE OR POST - USER DATA
                    </Button>
                    <Button variant="contained" className={classes.putStyle} onClick={updateUserBtnClick}>
                        UPDATE OR PUT / PATCH - USER DATA
                    </Button>
                    <Button color="secondary" variant="contained" onClick={deleteUserBtnClick}>
                        DELETE - USER BY ID
                    </Button>
                </div>
            </Grid>
        </Grid>
    );
};

export default Buttons;
