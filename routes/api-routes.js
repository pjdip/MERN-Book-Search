const Book = require("../models/book");
const express = require("express");
const router = express.Router();

// Get Books
router.get("/api/books", (req, res) => {
    Book
        .find({})
        .then(books => res.json(books))
        .catch(err => {
            if (err) {
                res.sendStatus(400);
                console.error(err);
            }
        });
});