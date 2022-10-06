const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");
const validation = require("../validations/userValidations");

/*Render del login*/

router.get("/login", userController.login);
router.post("/login", userController.check);

/*Render del register*/

router.get("/register", userController.register);
router.post("/register", validation.registerValidation, userController.store);

/*Render del login*/
router.get("/thankyou", userController.thankyou);

/*Render del profile/*/

router.get("/profile", userController.profile)

module.exports = router;
