"use strict";

const express = require("express");
const items = express.Router();

const cart = [
    {
        id: 1,
        product: "Skateboard Deck",
        price: 8,
        quantity: 1
    },
    {
        id: 2,
        product: "Trucks",
        price: 6,
        quantity: 2
    },
    {
        id: 3,
        product: "Wheels",
        price: 5,
        quantity: 1
    }
];

cartItems.get("/cart-items", (req, res) => {
    res.json(cart);
});



module.exports = cart;