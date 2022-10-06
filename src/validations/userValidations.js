const { body } = require('express-validator')

module.exports = { 

    registerValidation: [

        body("email").notEmpty().withMessage("Campo email incompleto").isEmail().withMessage("Debe ingresar un email valido"),
        body("user").notEmpty().withMessage("Campo de usuario incompleto"),
        body("password").notEmpty().withMessage("Campo password incompleto")]
        ,
    loginValidation : [
        body("email").notEmpty().withMessage("Campo email incompleto").isEmail().withMessage("Debe ingresar un email valido"),
        body("password").notEmpty().withMessage("Campo password incompleto")]
        }
    
