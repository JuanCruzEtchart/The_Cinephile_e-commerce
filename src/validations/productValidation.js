const { body } = require("express-validator");
const path = require("path");
/* const productImage = req.files.productImage.map(function (image) {
  return image.filename;
});
const backgroundImage = req.files.backgroundImage.map(function (image) {
  return image.filename;
}); */

module.exports = {
  createProductionTeamValidations: [
    body("type").notEmpty().withMessage("El selector de está tipo incompleto!"),
    body("name").notEmpty().withMessage("El campo de nombre está incompleto!"),
    body("biography_link")
      .notEmpty()
      .withMessage("El campo de link de biografía está incompleto!")
      .bail()
      .isURL()
      .withMessage("El campo de link de biografía debe ser una URL!"),
    body("photo")
      .custom(function (value, { req }) {
        return req.file;
      })
      .withMessage("La carga de fotografía es obligatoria!")
      .bail()
      .custom(function (value, { req }) {
        const validExtensions = [".png", ".jpg", ".jpeg"];
        const extension = path.extname(req.file.originalname);
        return validExtensions.includes(extension);
      })
      .withMessage("Extensión de archivo inválida!"),
  ],
  createCharacterValidations: [
    body("name").notEmpty().withMessage("El campo de nombre está incompleto!"),
  ],
  createProductValidations: [
    body("type").notEmpty().withMessage("El selector de tipo está incompleto!"),
    body("name").notEmpty().withMessage("El campo de nombre está incompleto!"),
    body("release_year")
      .notEmpty()
      .withMessage("El campo de año de salida está incompleto!"),
    body("rating")
      .notEmpty()
      .withMessage("El campo de clasificación está incompleto!"),
    body("length")
      .notEmpty()
      .withMessage("El campo de duración está incompleto!"),
    body("imdbScore")
      .notEmpty()
      .withMessage("El campo de puntaje de IMDb está incompleto!")
      .bail()
      .isDecimal()
      .withMessage("El campo de puntaje de IMDb debe contener solo números!"),
    body("imdbTotalReviews")
      .notEmpty()
      .withMessage("El campo de reseñas totales de IMDb está incompleto!"),
    body("tomatoScore")
      .notEmpty()
      .withMessage("El campo de puntaje de Rotten Tomatoes está incompleto!")
      .bail()
      .isNumeric()
      .withMessage(
        "El campo de puntaje de Rotten Tomatoes debe contener solo números!"
      ),
    body("trailerLink")
      .notEmpty()
      .withMessage("El campo de trailer está incompleto!")
      .bail()
      .isURL()
      .withMessage("El campo de trailer debe ser una URL!"),
    body("purchasePrice")
      .notEmpty()
      .withMessage("El campo de precio de venta está incompleto!")
      .bail()
      .isDecimal()
      .withMessage("El campo de precio de venta debe contener solo números!"),
    body("rentalPrice")
      .notEmpty()
      .withMessage("El campo de precio de alquiler está incompleto!")
      .bail()
      .isDecimal()
      .withMessage(
        "El campo de precio de alquiler debe contener solo números!"
      ),
    body("synopsis")
      .notEmpty()
      .withMessage("El campo de sinopsis está incompleto!"),
    body("director")
      .notEmpty()
      .withMessage("El selector de director está incompleto!"),
    body("screenwriter")
      .notEmpty()
      .withMessage("El selector de guionista está incompleto!"),
    body("productImage")
      .custom(function (value, { req }) {
        return req.file;
      })
      .withMessage("La carga de imagen de producto es obligatoria!")
      .bail()
      .custom((value, { req }) => {
        const validExtensions = [".png", ".jpg", ".jpeg"];
        const extension = path.extname(req.file.originalname);
        return validExtensions.includes(extension);
      })
      .withMessage("La extensión de archivo de imagen de producto es inválida"),
    body("backgroundImage")
      .custom(function (value, { req }) {
        return req.file;
      })
      .withMessage("La carga de imagen de fondo es obligatoria")
      .bail()
      .custom(function (value, { req }) {
        const validExtensions = [".png", ".jpg", ".jpeg"];
        const extension = path.extname(req.file.originalname);
        return validExtensions.includes(extension);
      })
      .withMessage("La extensión de archivo de imagen de fondo es inválida"),
  ],
  createProductCast: [
    /* 
    (req, res) => {
      for (let i = 1; i <= req.body.castLength; i++) {
        body("actorsName"+i).notEmpty().withMessage("Campo de actor " + i + " incompleto"),
        body("character"+i).notEmpty().withMessage("Campo de personaje " + i + " incompleto"),
        body("actorsBiography"+i)
        .notEmpty()
        .withMessage("Campo de link de biografía del actor " + i + " incompleto")
        .bail()
        .isURL()
        .withMessage("Campo de link de biografía del actor debe ser una URL"),
      }
    }, */
  ],
  updateProductValidations: [
    body("type").notEmpty().withMessage("El selector de tipo está incompleto!"),
    body("name").notEmpty().withMessage("El campo de nombre está incompleto!"),
    body("release_year")
      .notEmpty()
      .withMessage("El campo de año de salida está incompleto!"),
    body("rating")
      .notEmpty()
      .withMessage("El campo de clasificación está incompleto!"),
    body("length")
      .notEmpty()
      .withMessage("El campo de duración está incompleto!"),
    body("imdbScore")
      .notEmpty()
      .withMessage("El campo de puntaje de IMDb está incompleto!")
      .bail()
      .isDecimal()
      .withMessage("El campo de puntaje de IMDb debe contener solo números!"),
    body("imdbTotalReviews")
      .notEmpty()
      .withMessage("El campo de reseñas totales de IMDb está incompleto!"),
    body("tomatoScore")
      .notEmpty()
      .withMessage("El campo de puntaje de Rotten Tomatoes está incompleto!")
      .bail()
      .isNumeric()
      .withMessage(
        "El campo de puntaje de Rotten Tomatoes debe contener solo números!"
      ),
    body("trailerLink")
      .notEmpty()
      .withMessage("El campo de trailer está incompleto!")
      .bail()
      .isURL()
      .withMessage("El campo de trailer debe ser una URL!"),
    body("purchasePrice")
      .notEmpty()
      .withMessage("El campo de precio de venta está incompleto!")
      .bail()
      .isDecimal()
      .withMessage("El campo de precio de venta debe contener solo números!"),
    body("rentalPrice")
      .notEmpty()
      .withMessage("El campo de precio de alquiler está incompleto!")
      .bail()
      .isDecimal()
      .withMessage(
        "El campo de precio de alquiler debe contener solo números!"
      ),
    body("synopsis")
      .notEmpty()
      .withMessage("El campo de sinopsis está incompleto!"),
    body("director")
      .notEmpty()
      .withMessage("El selector de director está incompleto!"),
    body("screenwriter")
      .notEmpty()
      .withMessage("El selector de guionista está incompleto!"),
    body("productImage")
      .custom((value, { req }) => {
        const validExtensions = [".png", ".jpg", ".jpeg"];
        const extension = path.extname(req.file.originalname);
        return validExtensions.includes(extension);
      })
      .withMessage("La extensión de archivo de imagen de producto es inválida"),
    body("backgroundImage")
      .custom(function (value, { req }) {
        const validExtensions = [".png", ".jpg", ".jpeg"];
        const extension = path.extname(req.file.originalname);
        return validExtensions.includes(extension);
      })
      .withMessage("La extensión de archivo de imagen de fondo es inválida"),
  ],
};
