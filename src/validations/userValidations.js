const { body } = require('express-validator');
const fs = require("fs");
const path = require("path");
const userController = require('../controllers/userController');
const db = require("../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const { BADFAMILY } = require('dns');



module.exports = { 

    registerValidation : [
        body("email")
        .notEmpty()
        .withMessage("Campo email incompleto")
        .bail()
        .isEmail()
        .withMessage("Debe ingresar un email valido")
        .bail()
        .custom((value, { req }) => {
                    return db.User.findOne({
                      where: {
                        email: value,
                      },

                    }).then((email) => {
                        
                      if (email) {
                        return Promise.reject("El email que ingresó se encuentra tomado");
                      }
                    });

                  }),
        
        body("user")
        .notEmpty()
        .withMessage("Campo de usuario incompleto")
        .bail()
        .custom((value, { req }) => {
            return db.User.findOne({
              where: {
                username: value,
              },
            }).then((username) => {
              if (username) {
                return Promise.reject("El nombre de usuario ya se encuentra tomado");
              }
            });
          }),
        body("password")
        .notEmpty()
        .withMessage("Campo password incompleto"),
        ]
        ,
    loginValidation : [
        body("email").notEmpty().withMessage("Campo email incompleto").isEmail().withMessage("Debe ingresar un email valido"),
        body("password").notEmpty().withMessage("Campo password incompleto")]
        }
    
