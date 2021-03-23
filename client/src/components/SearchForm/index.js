import React, { useState } from "react";
import { Box, TextField, Button, Typography, withStyles } from "@material-ui/core";
import SearchBar from "material-ui-search-bar";
import API from "../../utils/API";

const styles = {

};

const SearchForm = (props) => {
    const { classes } = props;

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const handleSearch = async (query) => {
        await API
            .search(query)
            .then(result => {
                setResults(result);
                console.log(results);
            })
            .catch(err => console.error(err));
    };

    const handleSubmit = event => {
        event.preventDefault();
        handleSearch(query);
    }

    return(
        <Box>
{/*             <SearchBar
                value={this.state.value}
                onChange={(newValue) => this.setState({ value: newValue })}
                onRequestSearch={handleSubmit(this.state.value)}
            /> */}
            <form onSubmit={handleSubmit}>
                <TextField
                    label="book"
                    onChange={({target}) => setQuery(target.value)}
                    value={query}
                />
            </form>
            <Button
                onClick={() => handleSearch(query)}
            >
                Search
            </Button>
        </Box>
    );
};

export default withStyles(styles)(SearchForm);