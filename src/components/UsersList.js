import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import { useSelector } from "react-redux";
import { usersSelector } from "../slices/usersSlice";
import { statusSelector } from "../slices/statusSlice";

import UserPost from "./UserPost";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: "70%",
        margin: "15px auto"
    },
    usersStyle: {
        backgroundColor: theme.palette.background.paper
    },
    title: {
        margin: theme.spacing(4, 0, 2)
    }
}));

const UsersListItem = ({ user }) => {
    return (
        <>
            <ListItem key={user.id}>
                <ListItemAvatar>
                    <Avatar>{user.id}</Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={user.name}
                    secondary={`${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}
                />
            </ListItem>
            <Divider />
            <UserPost />
        </>
    );
};

const UsersList = () => {
    const classes = useStyles();
    const { users } = useSelector(usersSelector);
    const { status } = useSelector(statusSelector);
    return (
        <div className={classes.root}>
            <Grid container>
                {status === null && (
                    <Grid item xs={12}>
                        <Typography gutterBottom variant="h6" component="h3">
                            Please click on GET User button
                        </Typography>
                    </Grid>
                )}
                {users && users.length > 0 && (
                    <Grid item xs={12}>
                        <div className={classes.usersStyle}>
                            <List>
                                {users.map((user) => (
                                    <UsersListItem user={user} />
                                ))}
                            </List>
                        </div>
                    </Grid>
                )}
            </Grid>
        </div>
    );
};

export default UsersList;
