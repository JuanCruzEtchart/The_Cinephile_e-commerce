const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");

/*Render del login*/

router.get("/login", userController.login);

/*Render del register*/

router.get("/register", userController.register);
router.post("/register", userController.store);
router.get("/thankyou", userController.thankyou);

/*Render del profile/*/

router.get("/profile", userController.profile)

module.exports = router;
