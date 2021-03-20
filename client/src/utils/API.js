const axios = require("axios");

const API = {
    search: (query) => {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    }
};

module.exports = API;