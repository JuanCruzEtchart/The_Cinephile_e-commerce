const express = require("express");
const router = express.Router();
const genresApiController = require("../../controllers/api/genresApiController");

//Listado de todos los generos
router.get("/", genresApiController.list);

module.exports = router;
