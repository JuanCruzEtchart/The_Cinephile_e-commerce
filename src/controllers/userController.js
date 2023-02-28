const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require("../database/models");

//Modelos
const Users = db.User;
const Genres = db.Genre;

const userController = {
  login: async (req, res) => {
    const users = await Users.findAll();
    res.render("login", { users: users });
  },

  processLogin: async (req, res) => {
    const validationErrors = validationResult(req);
    try {
      console.log(validationErrors);
      if (!validationErrors.isEmpty()) {
        return res.render("login", {
          errors: validationErrors.mapped(),
          errors2: validationErrors.array(),
        });
      }
      let userFound = await Users.findOne({ where: { email: req.body.email } });
      req.session.usuarioLogueado = {
        id: userFound.id,
        name: userFound.name,
        email: userFound.email,
        photo: userFound.user_photo,
        admin_status: userFound.admin_status,
      };
      if (req.body.remember) {
        res.cookie("recordame", userFound.id, { maxAge: 9999999 * 100 });
      }
      res.redirect("/");
    } catch (err) {
      res.send(err);
    }
  },

  register: async function (req, res) {
    const genres = await Genres.findAll();
    res.render("register", { genres });
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
      res.render("register", {
        errors: validationErrors.mapped(),
        errors2: validationErrors.array(),
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
