const express = require("express");
const router = express.Router();
const multer = require("multer");
const userController = require("../controllers/userController.js");
const {
  registerValidations,
  loginValidations,
} = require("../validations/userValidations.js");
const { normalLogin, loggedIn } = require("../middleware/loginMiddle.js");
const path = require("path");

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/images/users"));
  },

  filename: (req, file, cb) => {
    const newFilename =
      file.fieldname + Date.now() + "-" + path.extname(file.originalname);
    cb(null, newFilename);
  },
});

let upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    //Validación de archivos
    const allowedExtensions = [".jpg", ".png", ".jpeg"];

    const imageExtension = path.extname(file.originalname);

    const result = allowedExtensions.includes(imageExtension);

    cb(null, result);
  },
});

let uploadPhoto = upload.single("userPhoto");

/*Render del login*/

router.get("/login", loggedIn, userController.login);
router.post("/login", loginValidations, userController.processLogin);
router.post("/logout", userController.logout);

/*Render del register*/

router.get("/register", loggedIn, userController.register);
router.post(
  "/register",
  uploadPhoto,
  registerValidations,
  userController.registerUpload
);

/*Render del login*/
router.get("/thankyou", userController.thankyou);

/*Render del profile/*/

router.get("/profile", normalLogin, userController.profile);

module.exports = router;
