const { body } = require("express-validator");
const path = require("path");
const db = require("../database/models");
const bcrypt = require("bcryptjs");

module.exports = {
  registerValidations: [
    body("email")
      .notEmpty()
      .withMessage("Debe ingresar un email válido.")
      .bail()
      .isEmail()
      .withMessage("Debe ingresar un email válido.")
      .bail()
      .custom((value, { req }) => {
        return db.User.findOne({
          where: {
            email: value,
          },
        }).then((email) => {
          if (email) {
            return Promise.reject(
              "El email que ingresó ya se encuentra en uso."
            );
          }
        });
      }),
    body("password")
      .notEmpty()
      .withMessage("La contraseña debe tener entre 4 y 50 caracteres.")
      .bail()
      .isLength({ min: 4, max: 50 })
      .withMessage("La contraseña debe tener entre 4 y 50 caracteres."),
    body("confirmPassword")
      .notEmpty()
      .withMessage("Debe ser igual a la contraseña.")
      .bail()
      .custom((value, { req }) => {
        return req.body.password == value;
      })
      .withMessage("Las contraseñas no coinciden."),
    body("name")
      .notEmpty()
      .withMessage("Debe ingresar un nombre.")
      .bail()
      .isLength({ max: 25 })
      .withMessage("El nombre puede tener máximo 25 caracteres."),
    body("surname")
      .notEmpty()
      .withMessage("Debe ingresar un apellido.")
      .bail()
      .isLength({ max: 25 })
      .withMessage("El apellido puede tener máximo 25 caracteres."),
    body("phone")
      .notEmpty()
      .withMessage("Debe ingresar un número de teléfono.")
      .bail()
      .isLength({ max: 30 })
      .withMessage("El número puede tener máximo 30 caracteres."),
    body("birthdate")
      .notEmpty()
      .withMessage("Debe ingresar una fecha de nacimiento."),
    body("genre1" && "genre2")
      .notEmpty()
      .withMessage("Debe elegír 2 géneros favoritos.")
      .bail()
      .custom((value, { req }) => {
        return req.body.genre1 != req.body.genre2;
      })
      .withMessage("Los géneros favoritos deben ser diferentes."),
    body("userPhoto")
      .custom((value, { req }) => {
        const validExtensions = [".png", ".jpg", ".jpeg"];
        if (req.file) {
          const extension = path.extname(req.file.originalname);
          return validExtensions.includes(extension);
        } else {
          return true;
        }
      })
      .withMessage("Solo se aceptan archivos con extensión png, jpg o jpeg."),
  ],
  loginValidations: [
    body("email")
      .notEmpty()
      .withMessage("Debe ingresar un email válido.")
      .bail()
      .isEmail()
      .withMessage("Debe ingresar un email válido.")
      .bail()
      .custom((value, { req }) => {
        return db.User.findOne({
          where: {
            email: value,
          },
        }).then((email) => {
          if (!email) {
            return Promise.reject("El email que ingresó no existe.");
          }
          if (!bcrypt.compareSync(req.body.password, email.password)) {
            return Promise.reject("Usuario o contraseña inválidos.");
          }
        });
      }),
    body("password").notEmpty().withMessage("Debe ingresar una contraseña."),
  ],
};
