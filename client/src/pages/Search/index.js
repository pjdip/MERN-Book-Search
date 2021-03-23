import React, { useState } from "react";
import { Box, TextField, Button, Typography, withStyles } from "@material-ui/core";
import ResultCard from "../../components/ResultCard";
import ResultHead from "../../components/ResultHead";
import NotFound from "../../components/NotFound";
import API from "../../utils/API";

const Search = () => {

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const handleSearch = async (query) => {
        await API
            .search(query)
            .then(result => {
                setResults(result.data.items);
                console.log(results);
            })
            .catch(err => console.error(err));
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        await handleSearch(query);
    };

    const resultMap = () => {
        if (results.length) {
            return results.map(result => {
                return(<ResultCard
                    key={result.id}
                    id={result.id}
                    title={result.volumeInfo.title}
                    authors={result.volumeInfo.authors}
                    description={result.volumeInfo.description}
                    image={result.volumeInfo.imageLinks.thumbnail}
                    link={result.volumeInfo.infoLink}
                />);
            });
        } else {
            return(
                <NotFound
                    missing="No Books Found, Please Try Another Search"
                />
            );
        };
    };

    return(
        <div>
            <Box>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="search a book"
                        onChange={event => setQuery(event.target.value)}
                        value={query}
                    />
                </form>
                <Button onClick={() => handleSearch(query)}>
                    Search
                </Button>
            </Box>
            <Box>
                <ResultHead
                    page="Results"
                />
                {resultMap()}
            </Box>
        </div>
    );
};

export default Search;