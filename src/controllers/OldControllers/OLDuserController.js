const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");

function findAll() {
  const jsonData = fs.readFileSync(path.join(__dirname, "../data/users.json"))
  const data = JSON.parse(jsonData);
  return data
};

function stringAndCreate(data) {
  const dataString = JSON.stringify(data, null, 4)
  fs.writeFileSync(path.join(__dirname, "../data/users.json"), dataString);
}


const userController = {

  login: (req, res) => {
    const data = findAll();
    res.render("login", { users: data });

    //validations
  },

  processLogin: (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      console.log(errors.mapped());

      return res.render("login", { errors: errors.mapped(), old: req.body });
    }

    const users = findAll();


    const userFound = users.find(function (user) {
      return user.email == req.body.email && bcryptjs.compareSync(req.body.password, user.password)
    })

    if (!userFound) {
      console.log(userFound);
      return res.render("login", { errorLogin: 'Credenciales Invalidas' })
    }

    else {
      req.session.usuarioLogueado = {
        id: userFound.id,
        name: userFound.name,
        email: userFound.email,
        security: userFound.security
      };

      if (req.body.checkbox) {
        res.cookie("recordame", userFound.id)
      }

      res.redirect("profile")
    }

  },

  register: (req, res) => {

    const data = findAll();

    res.render("register", { users: data });

    
  },

  profile: (req, res) => {
    res.render("profile");
  },


  thankyou: (req, res) => {

    res.render("thankyou");
  },

  store: (req, res) => {

    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      console.log(errors.mapped());

      return res.render("register", { errors: errors.mapped(), old: req.body });
    }

    const data = findAll();

    const newUser = {
      id: data.length + 1,
      name: req.body.user,
      email: req.body.email,
      password: bcryptjs.hashSync(req.body.password, 10),
      security: "user"
    }
    console.log(newUser);
    data.push(newUser);

    stringAndCreate(data);

    res.redirect("/user/thankyou")
  },

  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie("recordame");
    res.redirect("/");
  }
};

module.exports = userController;
