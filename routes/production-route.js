const apiRoutes = require("./api-routes");
const express = require("express");
const router = express.Router();
const path = require("path");

router.use("/api", apiRoutes);
router.use((req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;