const Book = require("../models/book");
const express = require("express");
const router = express.Router();

// Get Books
router.get("/api/books", (req, res) => {
    Book
        .find({})
        .then(books => res.json(books))
        .catch(err => res.status(400).json(err));
});

// Post Book
router.post("/api/books", ({ body }, res) => {
    Book
        .create(body)
        .then(newBook => res.json(newBook))
        .catch(err => res.status(500).json(err));
});

// Delete Book
router.delete("/api/books/:_id", ({ params }, res) => {
    Book
        .findByIdAndDelete(params._id)
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err));
});

module.exports = router;