const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController.js");

/*Render del detalle de productos*/

router.get("/detail/:id", productController.detail);

/*Render de la vista de edición de productos*/

router.get("/management", productController.management);

/*Render carrito de productos*/

router.get("/cart", productController.cart);

module.exports = router;
