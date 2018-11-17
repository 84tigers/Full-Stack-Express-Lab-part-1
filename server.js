"use strict";

const express = require("express");
const app = express();
const items = require("./cart-items");

app.use(express.static("./public"))
app.use(express.json());
app.use("/", items)

const port = 8484;
app.listen(port, () => {
    console.log(`Server is running on PORT: ${port}`);
});