import React from "react";
import { NavLink } from "react-router-dom";
import { Box, AppBar, Toolbar, Typography, withStyles } from "@material-ui/core";

const styles = {
    grow: {
        flexGrow: 1
    },
    link: {
        textDecoration: "none",
        margin: "6px"
    }
};

const Nav = (props) => {
    const { classes } = props;
    return(
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5">Book Search</Typography>
                    <Box ml="auto">
                        <NavLink to="/saved" className={classes.link}>Saved</NavLink>
                        <NavLink to="/" className={classes.link}>Search</NavLink>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withStyles(styles)(Nav);