const fs = require("fs");
const path = require("path");
const db = require("../database/models");
const User = db.User;

let recordame =  async (req, res, next) => {

    try {

        if (req.cookies.recordame && !req.session.usuarioLogueado) {

            const userFound = await User.findOne({ where: { id: req.cookies.recordame } });
            req.session.usuarioLogueado = {
                id: userFound.id,
                name: userFound.username,
                email: userFound.email,
              };
            console.log(req.session.usuarioLogueado);
            return next();
        }
        else {
            return next();
        }

    }

    catch (err) {
        res.send(err);
    }

}

module.exports = recordame;

