const { body } = require('express-validator');
const fs = require("fs");
const path = require("path");
const userController = require('../controllers/userController');

function findAll(){
    const jsonData = fs.readFileSync(path.join(__dirname, "../data/users.json"))
     const data = JSON.parse(jsonData);
     return data
   };

module.exports = { 

    registerValidation: [

        body("email")
        .notEmpty().withMessage("Campo email incompleto")
        .isEmail()
        .withMessage("Debe ingresar un email valido")
        .custom(function(value, {req}){
           const users = findAll();
           const usuarioEncontrado = users.find(function(user){
            return user.email == value;
            });

            if (usuarioEncontrado){ 
                return false;
            }
            else {
                return true;
            }
         }).withMessage("El email que ingresó se encuentra tomado"),
        
        body("user").
        notEmpty().withMessage("Campo de usuario incompleto")
        .custom(function(value, {req}){
            const users = findAll();
            const usuarioEncontrado = users.find(function(user){
             return user.name == value;
             });
 
             if (usuarioEncontrado){ 
                 return false;
             }
             else {
                 return true;
             }
          }).withMessage("El usuario que ingresó se encuentra tomado"),
        body("password").notEmpty().withMessage("Campo password incompleto")
        ]
        ,
    loginValidation : [
        body("email").notEmpty().withMessage("Campo email incompleto").isEmail().withMessage("Debe ingresar un email valido"),
        body("password").notEmpty().withMessage("Campo password incompleto")]
        }
    
