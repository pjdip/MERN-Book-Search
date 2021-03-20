const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(require("./routes/api-routes"));

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/books",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }
);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});