import React from "react";
import {Typography} from "@material-ui/core";

const notFound = (props) => {
    return(
        <Typography align="center">
            {props.missing}
        </Typography>
    );
};

export default notFound;