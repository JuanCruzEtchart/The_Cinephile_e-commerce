const express = require("express");
const router = express.Router();
const usersApiController = require("../../controllers/api/usersApiController");

//Listado de todos los usuarios
router.get("/", usersApiController.list);

module.exports = router;
