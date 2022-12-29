const express = require("express");
const router = express.Router();
const actorsApiController = require("../../controllers/api/actorsApiController");

//Listado de todos los usuarios
router.get("/", actorsApiController.list);

module.exports = router;
