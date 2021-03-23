const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const BookSchema = new Schema({
    title: String,
    authors: [String],
    description: String,
    image: String,
    link: String
});

const Book = model("Book", BookSchema);

module.exports = Book;