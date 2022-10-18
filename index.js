const express = require("express");
const app = express();
const indexHTML = require("./index.html");

app.listen(3000, () => {
    console.log("App listening on port 3000");
});

app.get("/", (req, res) => {
    res.send(indexHTML);
});
