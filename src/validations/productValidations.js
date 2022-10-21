const { body } = require("express-validator");
const path = require("path");

module.exports = {
  createProductValidations: [
    body("name").notEmpty().withMessage("Campo de nombre incompleto"),
    body("year")
      .notEmpty()
      .withMessage("Campo de año incompleto")
      .bail()
      .isNumeric()
      .withMessage("Campo de año debe contener solo números"),
    body("rated").notEmpty().withMessage("Campo de clasificación incompleto"),
    body("length").notEmpty().withMessage("Campo de duración incompleto"),
    body("imdbScore")
      .notEmpty()
      .withMessage("Campo de puntaje de IMDb incompleto")
      .bail()
      .isDecimal()
      .withMessage("Campo de puntaje de IMDb debe contener solo números"),
    body("imdbTotalReviews")
      .notEmpty()
      .withMessage("Campo de reseñas totales de IMDb incompleto"),
    body("tomatoScore")
      .notEmpty()
      .withMessage("Campo de puntaje de Rotten Tomatoes incompleto")
      .bail()
      .isNumeric()
      .withMessage(
        "Campo de puntaje de Rotten Tomatoes debe contener solo números"
      ),
    body("trailerLink")
      .notEmpty()
      .withMessage("Campo de trailer incompleto")
      .bail()
      .isURL()
      .withMessage("Campo de trailer debe ser una URL"),
    body("purchasePrice")
      .notEmpty()
      .withMessage("Campo de precio de venta incompleto")
      .bail()
      .isDecimal()
      .withMessage("Campo de precio de venta debe contener solo números"),
    body("rentalPrice")
      .notEmpty()
      .withMessage("Campo de precio de alquiler incompleto")
      .bail()
      .isDecimal()
      .withMessage("Campo de precio de alquiler debe contener solo números"),
    body("synopsis").notEmpty().withMessage("Campo de sinopsis incompleto"),
    body("director").notEmpty().withMessage("Campo de director incompleto"),
    body("directorBiography")
      .notEmpty()
      .withMessage("Campo de link de biografía del director incompleto")
      .bail()
      .isURL()
      .withMessage("Campo de link de biografía del director debe ser una URL"),
    body("screenwriter")
      .notEmpty()
      .withMessage("Campo de guionista incompleto"),
    body("screenwriterBiography")
      .notEmpty()
      .withMessage("Campo de link de biografía del guionista incompleto")
      .bail()
      .isURL()
      .withMessage("Campo de link de biografía del guionista debe ser una URL"),
    body("productImage")
      .custom(function (value, { req }) {
        return req.file;
      })
      .withMessage("Campo de imagen de producto es obligatorio")
      .bail()
      .custom(function (value, { req }) {
        const allowedExtensions = [".jpg", ".png", ".jpeg"];
        const imageExtension = path.extname(req.file.originalname);
        return allowedExtensions.includes(imageExtension);
      })
      .withMessage("Imagen de producto inválida"),
    body("backgroundImage")
      .custom(function (value, { req }) {
        return req.file;
      })
      .withMessage("Campo de imagen de fondo es obligatorio")
      .bail()
      .custom(function (value, { req }) {
        const allowedExtensions = [".jpg", ".png", ".jpeg"];
        const imageExtension = path.extname(req.file.originalname);
        return allowedExtensions.includes(imageExtension);
      })
      .withMessage("Imagen de fondo inválida"),
  ],
  updateProductValidations: [],
};
