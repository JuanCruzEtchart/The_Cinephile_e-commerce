const express = require("express");
const router = express.Router();
const directorsApiController = require("../../controllers/api/directorsApiController");

//Listado de todos los usuarios
router.get("/", directorsApiController.list);

module.exports = router;
