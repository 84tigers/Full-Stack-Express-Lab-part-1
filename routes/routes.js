"use strict";
const express = require("express");
const routes = express.Router();
const pool = require("../connection/pg-connection-pool.js");

routes.get("/cart-items", (req, res) => {
    pool.query("SELECT * FROM shoppingcart ORDER BY id").then((result) => {
        res.json(result.rows);
    });
});

routes.post("/cart-items", (req, res) => {
    pool.query("INSERT INTO shoppingcart(product, price, quantity) values($1::text, $2::real, $3::int)",
    [req.body.product, req.body.price, req.body.quantity]).then((result) => {
        res.json(result.rows);
    });
});

routes.delete("/cart-items/:id", (req, res) => {
    pool.query("DELETE FROM shoppingcart WHERE id=$1::int", [req.params.id]).then(() => {
        pool.query("SELECT * FROM shoppingcart ORDER BY id").then((result) => {
            res.json(result.rows);
        });
    });
});

routes.put("/cart-items/:id", (req, res) => {
    pool.query("UPDATE shoppingcart SET product=$1::text, price=$2::text, quantity=$3::text WHERE id=$4::int", [req.body.product, req.body.price, req.body.quantity, req.params.id])
    .then(() => {
        pool.query("SELECT * FROM shoppingcart ORDER BY id").then((result) => {
            res.json(result.rows);
        });
    });
});




module.exports = routes;