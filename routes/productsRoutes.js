const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController.js");

/*Render del detalle de productos*/

router.get("/detail", productController.detail);

/*Render carrito de productos*/

router.get("/cart", productController.cart);

module.exports = router;
