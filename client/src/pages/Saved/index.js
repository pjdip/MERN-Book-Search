import React, { useState, useEffect } from "react";
import { Typography, Box, withStyles } from "@material-ui/core";
import ResultHead from "../../components/ResultHead";
import NotFound from "../../components/NotFound";
import axios from "axios";
import API from "../../utils/API";
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
        getSavedBooks();
    }, []);

    const getSavedBooks = async () => {
        const books = await axios.get("/api/books");
        setBooks(books.data);
    };

    const deleteBook = async (id) => {
        await axios.delete(`/api/books/${id}`);
        getSavedBooks();
    };

    const resultMap = () => {
        if (books.length) {
            return books.map(book => {
                return(<ResultCard
                    key={book._id}
                    id={book._id}
                    title={book.title}
                    authors={book.authors}
                    description={book.description}
                    image={book.image}
                    link={book.link}
                    deleteBook={deleteBook}
                />);
            });
        } else {
            return(
                <NotFound
                    missing="You have no saved books. Search for some books to save them"
                />
            );
        };
    };

    return(
        <div>
            <Box className={classes.bawx}>
                <ResultHead
                    page="Saved Books"
                />
                {resultMap()}
            </Box>
        </div>
    );
};

export default withStyles(styles)(Saved);