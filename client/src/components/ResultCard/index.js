import React from "react";
import { Box, Grid, Button, Typography, withStyles } from "@material-ui/core";
import axios from "axios";
import { useLocation } from "react-router-dom";

const styles = {
    imageDescription: {
        marginTop: 15
    },
    gridImage: {
        float: "left",
        marginRight: 15
    },
    gridDescription: {
        flex: 1
    },
    infoButton: {
        padding: "50px"
    }
};

const ResultCard = (props) => {

    const { id, title, authors, description, image, link, deleteBook, classes } = props;
    
    const saveBook = () => {
        axios.post("/api/books", { title, authors, description, image, link })
        .catch(function (error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }
            console.log(error.config);
        });
    };

    const multiAuthors = (authors) => {
        if (authors.length > 1) return authors.join(", ");
        return authors;
    };

    const SaveORdelete = () => {
        if (useLocation().pathname === "/") {
            return(
                <Button onClick={saveBook}>
                    Save
                </Button>
            );
        } else {
            return(
                <Button onClick={() => deleteBook(id)}>
                    Delete
                </Button>
            );
        };
    };

    return(
        <Box m={5}>
            <Grid container>
                <Grid item sm={6} align="left">
                    <Typography>
                        {title}
                    </Typography>
                    <Typography>
                        Written By {multiAuthors(authors)}
                    </Typography>
                </Grid>
                <Grid item sm={6} align="right">
                    {SaveORdelete()}
                    <Button href={link} target="_blank" className={classes.infoButton}>
                        More Info
                    </Button>
                </Grid>
            </Grid>
            <Grid container className={classes.imageDescription}>
                <Grid item>
                    <img src={image} alt="Book Cover" className={classes.gridImage} />
                    <Typography className={classes.gridDescription}>
                        {description}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default withStyles(styles)(ResultCard);