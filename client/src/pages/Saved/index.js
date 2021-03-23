import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import axios from "axios";
import ResultCard from "../../components/ResultCard";

const Saved = () => {

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
                    No Books Found, Please Try Another Search
                </Typography>
            );
        };
    };

    return(
        <h1>Saved Page</h1>
    );
};

export default Saved;