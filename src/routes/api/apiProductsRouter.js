const express = require("express");
const router = express.Router();
const productsApiController = require("../../controllers/api/productsApiController");

//Rutas
//Listado de todos los productos
router.get("/", productsApiController.list);
//Detalle de producto
router.get("/detail/:id", productsApiController.detail);
//Último producto en DB
router.get("/lastItem", productsApiController.lastItem);
//Primeras 5 películas en DB
router.get("/firstMovies", productsApiController.firstMovies);
//Primeras 5 series en DB
router.get("/firstSeries", productsApiController.firstSeries);
//Search bar
router.get("/search", productsApiController.search);
//Listado de películas
router.get("/movies", productsApiController.movies);
//Listado de series
router.get("/series", productsApiController.series);

module.exports = router;
