"use strict";

const express = require("express");
const items = express.Router();

const cart = [
    {
        id: 0,
        product: "Cat Food",
        price: 8,
        quantity: 1
    },
    {
        id: 2,
        product: "Cat Litter",
        price: 6,
        quantity: 2
    },
    {
        id: 3,
        product: "Catnip",
        price: 5,
        quantity: 1
    }
];

items.get("/items", (req, res) => {
    res.json(cart);
});



module.exports = items;