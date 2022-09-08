const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");

/*Render del login*/

router.get("/login", userController.login);

/*Render del register/*/

router.get("/register", userController.register);

module.exports = router;
