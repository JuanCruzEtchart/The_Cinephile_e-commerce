const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require("../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");

//Modelos
const User = db.User;
const Genres = db.Genre;

const userController = {
  login: (req, res) => {
    const users = User.findAll();
    res.render("login", { users: users });
  },

  processLogin: async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        console.log(errors.mapped());

        return res.render("login", { errors: errors.array(), old: req.body });
      }

      let userFound = await User.findOne({ where: { email: req.body.email } });
      //bcrypt.compareSync(req.body.password, user.password

      if (!userFound) {
        return res.render("login", { errorLogin: "Credenciales Invalidas" });
      } else if (!bcrypt.compareSync(req.body.password, userFound.password)) {
        return res.render("login", { errorLogin: "Credenciales Invalidas" });
      } else {
        req.session.usuarioLogueado = {
          id: userFound.id,
          name: userFound.username,
          email: userFound.email,
          admin_status: userFound.admin_status,
        };

        if (req.body.checkbox) {
          res.cookie("recordame", userFound.id, { maxAge: 9999999 * 100 });
        }

        res.redirect("/");
      }
    } catch (err) {
      res.send(err);
    }
  },

  register: async function (req, res) {
    const users = await User.findAll();
    const genres = await Genres.findAll();

    res.render("register copy", { users, genres });
  },

  profile: async function (req, res) {
    const users = await User.findAll();

    res.render("profile", { users });
  },

  thankyou: (req, res) => {
    res.render("thankyou");
  },

  store: async (req, res) => {
    const errors = validationResult(req);
    console.log(errors);

    if (!errors.isEmpty()) {
      console.log(errors.mapped());

      return res.render("register copy", {
        errors: errors.mapped(),
        old: req.body,
      });
    }
    try {
      await User.create({
        username: req.body.user,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
      });
      res.redirect("/user/thankyou");
    } catch (err) {
      res.send(err);
    }
  },

  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie("recordame");
    res.redirect("/");
  },
};

module.exports = userController;
