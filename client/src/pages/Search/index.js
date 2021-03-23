import React, { useState } from "react";
/* import SearchForm from "../../components/SearchForm"; */
import { Box, TextField, Button, Typography, withStyles } from "@material-ui/core";
import ResultCard from "../../components/ResultCard";
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
                    title={result.volumeInfo.title}
                    authors={result.volumeInfo.authors}
                    description={result.volumeInfo.description}
                    image={result.volumeInfo.imageLinks.thumbnail}
                    link={result.volumeInfo.infoLink}
                />);
            });
        } else {
            return(
                <Typography>
                    No Books Found, Please Try Another Search
                </Typography>
            );
        };
    };

    return(
        <div>
            <h1>Search Page</h1>
{/*             <SearchForm /> */}
            <Box>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="book"
                        onChange={event => setQuery(event.target.value)}
                        value={query}
                    />
                </form>
                <Button onClick={() => handleSearch(query)}>
                    Search
                </Button>
            </Box>
            <Box>
                {resultMap()}
            </Box>
        </div>
    );
};

export default Search;