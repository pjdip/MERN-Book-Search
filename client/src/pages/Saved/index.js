import React, { useState, useEffect } from "react";
import { Typography, Box, withStyles } from "@material-ui/core";
import axios from "axios";
import ResultCard from "../../components/ResultCard";

const styles = {
    bawx: {
        marginTop: 20
    }
};

const Saved = (props) => {

    const { classes } = props;

    const [books, setBooks] = useState({});

    useEffect(() => {
        retrieveSavedBooks();
    }, []);

    const retrieveSavedBooks = async () => {
        const books = await axios.get("/api/books");
        setBooks(books);
    };

    const resultMap = () => {
        if (books.length) {
            return books.map(book => {
                return(<ResultCard
                    key={book.id}
                    title={book.title}
                    authors={book.authors}
                    description={book.description}
                    image={book.thumbnail}
                    link={book.infoLink}
                />);
            });
        } else {
            return(
                <Typography align="center">
                    No Books Found, Search for some books and save them
                </Typography>
            );
        };
    };

    return(
        <div>
            <Box className={classes.bawx}>
                <Typography align="center" variant="h3">
                    Saved Books
                </Typography>
                {resultMap()}
            </Box>
        </div>
    );
};

export default withStyles(styles)(Saved);