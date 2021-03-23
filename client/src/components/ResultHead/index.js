import React from "react";
import {Typography} from "@material-ui/core";

const bigHead = (props) => {
    return(
        <Typography align="center" variant="h3">
            {props.page}
        </Typography>
    );
};

export default bigHead;