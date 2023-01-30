const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require("../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");

//Modelos
const Users = db.User;
const Genres = db.Genre;

const userController = {
  login: (req, res) => {
    const users = Users.findAll();
    res.render("login", { users: users });
  },

  processLogin: async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        console.log(errors.mapped());

        return res.render("login", { errors: errors.array(), old: req.body });
      }

      let userFound = await Users.findOne({ where: { email: req.body.email } });
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
    const users = await Users.findAll();
    const genres = await Genres.findAll();

    res.render("register", { users, genres });
  },

  profile: async function (req, res) {
    const users = await Users.findAll();

    res.render("profile", { users });
  },

  thankyou: (req, res) => {
    res.render("thankyou");
  },

  registerUpload: async (req, res) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      const genres = await Genres.findAll();
      /* console.log(validationErrors.mapped()); */
      res.render("register", {
        errors: validationErrors.mapped(),
        errors2: validationErrors.array(),
        old: req.body,
        genres,
      });
    } else {
      try {
        const userPhoto = req.file ? req.file.filename : "defaultUserImage.png";
        await Users.create({
          name: req.body.name,
          surname: req.body.surname,
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password, 10),
          phone_number: req.body.phone,
          birthdate: req.body.birthdate,
          genre1_id: req.body.genre1,
          genre2_id: req.body.genre2,
          user_photo: userPhoto,
        });
        res.redirect("/user/thankyou");
      } catch (err) {
        res.send(err);
      }
    }
  },

  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie("recordame");
    res.redirect("/");
  },
};

module.exports = userController;
