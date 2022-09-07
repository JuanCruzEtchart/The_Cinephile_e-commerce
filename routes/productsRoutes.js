const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController.js");

/*Render del detalle de productos*/

router.get("/detalle", productController.hola);

module.exports = router;