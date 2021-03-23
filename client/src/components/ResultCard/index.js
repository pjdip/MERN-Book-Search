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
    }
};

const ResultCard = (props) => {

    const { title, authors, description, image, link, classes } = props;
    
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

/*     const saveBook = () => {
        axios.post("/api/books", {
            title: title,
            authors: authors,
            description: description,
            image: image,
            link: link
        });
    }; */

    const deleteBook = (id) => {
        axios.delete(`/api/books/${id}`);
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
                <Button onClick={deleteBook(props.id)}>
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
                        {props.title}
                    </Typography>
                    <Typography>
                        Written By {multiAuthors(props.authors)}
                    </Typography>
                </Grid>
                <Grid item sm={6} align="right">
                    {SaveORdelete()}
                    <Button href={props.link} target="_blank" pl={5}>
                        More Info
                    </Button>
                </Grid>
            </Grid>
            <Grid container className={classes.imageDescription}>
                <Grid item>
                    <img src={props.image} alt="Book Cover" className={classes.gridImage} />
                    <Typography className={classes.gridDescription}>
                        {props.description}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default withStyles(styles)(ResultCard);