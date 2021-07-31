import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import UsersList from "./components/UsersList";
import Divider from "@material-ui/core/Divider";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useSelector } from "react-redux";
import { statusSelector } from "./slices/statusSlice";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    }
}));

const App = () => {
    const classes = useStyles();
    const { status } = useSelector(statusSelector);

    return (
        <div className={classes.root}>
            <Header />
            <Buttons />
            <Divider />
            {status === "loading" && <LinearProgress />}
            <UsersList />
        </div>
    );
};

export default App;
