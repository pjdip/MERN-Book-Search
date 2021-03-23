const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/production-route");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
} else {
    app.use(express.static("public"));
}

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