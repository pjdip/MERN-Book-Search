const axios = require("axios");

const API = {
    search: (query) => {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    },
    savedBooks: () => {
        return axios.get("/api/books");
    }
};

module.exports = API;