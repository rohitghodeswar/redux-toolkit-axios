import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { useSelector, useDispatch } from "react-redux";
import { userPostSelector } from "../slices/userPostSlice";
import { usersSelector } from "../slices/usersSlice";

import { getUserPost } from "../actions/userPostAction";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    btnStyle: {
        flexGrow: 1,
        textAlign: "center",
        marginTop: 15
    },
    cardStyle: {
        marginTop: 15
    }
}));

const UserPosts = () => {
    const classes = useStyles();
    const { users } = useSelector(usersSelector);
    const { post } = useSelector(userPostSelector);
    const dispatch = useDispatch();

    const getAllUserPostsBtnClick = () => {
        const id = 1;
        dispatch(getUserPost(id));
    };

    return (
        <>
            {users && users.length === 1 && users[0].id === 1 && (
                <>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.btnStyle}
                        onClick={getAllUserPostsBtnClick}
                    >
                        GET ALL POSTS OF USER ID - 1
                    </Button>
                    {post && (
                        <Card className={classes.cardStyle} variant="outlined">
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {users[0].name}
                                </Typography>
                                <Typography color="textPrimary" gutterBottom>
                                    {post.title}
                                </Typography>
                                <Divider />
                                <Typography color="textSecondary" gutterBottom>
                                    {post.body}
                                </Typography>
                            </CardContent>
                        </Card>
                    )}
                </>
            )}
        </>
    );
};

export default UserPosts;
