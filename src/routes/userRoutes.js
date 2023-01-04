const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");
const validation = require("../validations/userValidations");
const { normalLogin } = require("../middleware/loginMiddle.js");

/*Render del login*/

router.get("/login", userController.login);
router.post("/login", validation.loginValidation, userController.processLogin);
router.post("/logout", userController.logout);

/*Render del register*/

router.get("/register", userController.register);
router.post("/register", validation.registerValidation, userController.store);

/*Render del login*/
router.get("/thankyou", userController.thankyou);

/*Render del profile/*/

router.get("/profile", normalLogin, userController.profile);

module.exports = router;
