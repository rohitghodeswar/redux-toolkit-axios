import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
        textAlign: "center",
        margin: 5
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Typography variant="h4" className={classes.title}>
                Redux ToolKit Demo - with Axios
            </Typography>
        </AppBar>
    );
};

export default Header;
