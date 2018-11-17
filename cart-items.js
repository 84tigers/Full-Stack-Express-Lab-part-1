"use strict";

const express = require("express");
const cartItems = express.Router();

const cart = [
    {
        id: 1,
        product: "Natas Kaupus - Santa Monica Airlines Pro-model Deck",
        price: 56.00,
        quantity: 1
    },
    {
        id: 2,
        product: "Independent Trucks",
        price: 22.99,
        quantity: 2
    },
    {
        id: 3,
        product: "Slimeball Wheels",
        price: 8.99,
        quantity: 4
    }
];

cartItems.get("/cart-items", (req, res) => {
    res.json(cart);
});



module.exports = cartItems;