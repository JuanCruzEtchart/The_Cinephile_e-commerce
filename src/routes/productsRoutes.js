const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const productController = require("../controllers/productController.js");
const {
  createProductValidations,
} = require("../validations/productValidation.js");
const {
  updateProductValidations,
} = require("../validations/productValidation.js");

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(
      null,
      path.join(__dirname, "../../public/images/products/productsCreated")
    );
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

//Carga de imágenes de detalle producto
let uploadDetailImages = upload.fields([
  {
    name: "productImage",
    maxCount: 1,
  },
  { name: "backgroundImage", maxCount: 1 },
]);

//Carga de imágenes de reparto de actores
let uploadActorsPhoto = upload.any();

/*Render del detalle de productos*/

router.get("/detail/:id", productController.detail);

/*Render de la vista de creación de productos*/

router.get("/create", productController.create);
router.post(
  "/create",
  uploadDetailImages,
  createProductValidations,
  productController.store
);

/*Render de la vista de creación de repartos*/

router.get("/create/cast", productController.castCreate);
router.post("/create/cast", uploadActorsPhoto, productController.castUpolad);

/*Render de la vista de edición de productos*/

router.get("/edit/:id", productController.edit);
router.put(
  "/edit/:id",
  uploadDetailImages,
  updateProductValidations,
  productController.update
);
router.delete("/delete/:id", productController.destroy);

/*Render de la vista de lista de productos*/

router.get("/list", productController.list);
router.get("/movies", productController.movies);
router.get("/series", productController.series);

/*Render carrito de productos*/

router.get("/cart", productController.cart);

module.exports = router;
