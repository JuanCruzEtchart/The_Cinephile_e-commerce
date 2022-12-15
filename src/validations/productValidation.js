const { body } = require("express-validator");
const path = require("path");
const db = require("../database/models");

module.exports = {
  createProductionTeamValidations: [
    body("type").notEmpty().withMessage("El selector de tipo está incompleto!"),
    body("name")
      .notEmpty()
      .withMessage("El campo de nombre está incompleto!")
      .bail()
      .custom((value, { req }) => {
        if (req.body.type == "actor") {
          return db.Actor.findOne({
            where: {
              full_name: value,
            },
          }).then((actor) => {
            if (actor) {
              return Promise.reject("Este actor ya fue creado!");
            }
          });
        } else if (req.body.type == "director") {
          return db.Director.findOne({
            where: {
              full_name: value,
            },
          }).then((director) => {
            if (director) {
              return Promise.reject("Este director ya fue creado!");
            }
          });
        } else if (req.body.type == "screenwriter") {
          return db.Screenwriter.findOne({
            where: {
              full_name: value,
            },
          }).then((screenwriter) => {
            if (screenwriter) {
              return Promise.reject("Este guionista ya fue creado!");
            }
          });
        }
      }),
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
      .custom((value, { req }) => {
        const validExtensions = [".png", ".jpg", ".jpeg"];
        const extension = path.extname(req.file.originalname);
        return validExtensions.includes(extension);
      })
      .withMessage("La extensión de archivo de fotografía es inválida!"),
  ],
  createCharacterValidations: [
    body("name")
      .notEmpty()
      .withMessage("El campo de nombre está incompleto!")
      .bail()
      .custom((value, { req }) => {
        return db.Character.findOne({
          where: {
            name: value,
          },
        }).then((character) => {
          if (character) {
            return Promise.reject("Este personaje ya fue creado!");
          }
        });
      }),
  ],
  createProductValidations: [
    body("type").notEmpty().withMessage("El selector de tipo está incompleto!"),
    body("name")
      .notEmpty()
      .withMessage("El campo de nombre está incompleto!")
      .bail()
      .custom((value, { req }) => {
        return db.Product.findOne({
          where: {
            name: value,
          },
        }).then((product) => {
          if (product) {
            return Promise.reject("Este producto ya fue creado!");
          }
        });
      }),
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
        return req.files.productImage;
      })
      .withMessage("La carga de imagen de producto es obligatoria!")
      .bail()
      .custom((value, { req }) => {
        const validExtensions = [".png", ".jpg", ".jpeg"];
        console.log(req.files);
        if (req.files.productImage) {
          const extension = path.extname(
            req.files.productImage[0].originalname
          );
          return validExtensions.includes(extension);
        } else {
          return true;
        }
      })
      .withMessage("La extensión de archivo de imagen de producto es inválida"),
    body("backgroundImage")
      .custom((value, { req }) => {
        return req.files.backgroundImage;
      })
      .withMessage("La carga de imagen de fondo es obligatoria")
      .bail()
      .custom((value, { req }) => {
        const validExtensions = [".png", ".jpg", ".jpeg"];
        console.log(req.files);
        if (req.files.backgroundImage) {
          const extension = path.extname(
            req.files.backgroundImage[0].originalname
          );
          return validExtensions.includes(extension);
        } else {
          return true;
        }
      })
      .withMessage("La extensión de archivo de imagen de fondo es inválida"),
  ],
  createProductCast: [
    /*     body().custom((value, { req }) => {
      console.log(value); 
      console.log("hola");
      for (let i = 1; i <= req.body.castLength; i++) {
        console.log(req.body["actor" + i]);
        if (!req.body["actor" + i]) {
          throw new Error("Campo de actor " + i + " incompleto");
        }
      }
    }), */
    /*     (req, res) => {
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
    },  */
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
        console.log(req.files);
        if (req.files.productImage) {
          const extension = path.extname(
            req.files.productImage[0].originalname
          );
          return validExtensions.includes(extension);
        } else {
          return true;
        }
      })
      .withMessage("La extensión de archivo de imagen de producto es inválida"),
    body("backgroundImage")
      .custom((value, { req }) => {
        const validExtensions = [".png", ".jpg", ".jpeg"];
        console.log(req.files);
        if (req.files.backgroundImage) {
          const extension = path.extname(
            req.files.backgroundImage[0].originalname
          );
          return validExtensions.includes(extension);
        } else {
          return true;
        }
      })
      .withMessage("La extensión de archivo de imagen de fondo es inválida"),
  ],
};
