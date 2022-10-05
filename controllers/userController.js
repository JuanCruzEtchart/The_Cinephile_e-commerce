const fs = require("fs");
const { platform } = require("os");
const path = require("path");
const bcryptjs = require("bcryptjs");
const {validationResult} = require("express-validator");

function findAll(){
 const jsonData = fs.readFileSync(path.join(__dirname, "../data/users.json"))
  const data = JSON.parse(jsonData);
  return data
};

function stringAndCreate(data){
  const dataString = JSON.stringify(data, null, 4)
  fs.writeFileSync(path.join(__dirname, "../data/users.json"), dataString);
}


const userController = {

  login: (req, res) => {
    const data = findAll();
    res.render("login", {users: data});

    //validations
    },

    register: (req, res) => {

    const data = findAll();

    res.render("register", {users: data} );

    //Validations
  },
    
    thankyou: (req, res) => {

    res.render("thankyou");
    },

    store: (req, res) => {
      
     const errors = validationResult(req);
     if(!errors.isEmpty())
     {
      console.log(errors.mapped());

      return res.render("register", {errors: errors.mapped(), old: req.body});
     }
      
      const data = findAll();
      
      const newUser = {
      id: data.length + 1,
      name: req.body.user,
      email: req.body.email,
      password: bcryptjs.hashSync(req.body.password, 10),
      security:"user"
      }
      console.log(newUser);
      data.push (newUser);
      
      stringAndCreate(data);

      res.redirect("/user/thankyou")
    },

    check: (req, res) => {
      console.log(req.body);
      const data = findAll();
      const userEncontrado = data.filter(function(user){
        return (user.email == req.body.email && user.password == req.body.password) ;
      })

      if (userEncontrado!=undefined){
        res.redirect("/index/id")
      }  

      else {
        //validation errors
      }
  
     
    }

};

module.exports = userController;
