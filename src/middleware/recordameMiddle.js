const fs = require("fs");
/* const path = require("path"); */
const { User } = require("../database/models");

let recordame = async (req, res, next) => {
  try {
    if (req.cookies.recordame && !req.session.usuarioLogueado) {
      const userFound = await User.findOne({
        where: { id: req.cookies.recordame },
      });
      req.session.usuarioLogueado = {
        id: userFound.id,
        name: userFound.username,
        email: userFound.email,
        admin_status: userFound.admin_status,
      };
      console.log("Recordame: ", req.session.usuarioLogueado);
      return next();
    } else {
      return next();
    }
  } catch (err) {
    res.send(err);
  }
};

module.exports = recordame;
