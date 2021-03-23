import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, withStyles } from "@material-ui/core";

const styles = {
    grow: {
        flexGrow: 1
    }
};

const Nav = () => {
    return(
        <AppBar position="static">
            <Toolbar>
                <Typography>Google Book Search</Typography>
                <NavLink to="/saved">Saved Books</NavLink>
                <NavLink to="/search">Search</NavLink>
            </Toolbar>
        </AppBar>
    );
};

export default withStyles(styles)(Nav);