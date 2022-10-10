const fs = require("fs");
const path = require("path");

function findAll() {
    const jsonData = fs.readFileSync(path.join(__dirname, "../data/users.json"))
    const data = JSON.parse(jsonData);
    return data
};


function recordame(req, res, next) {

    if (req.cookies.recordame && req.session.usuarioLogueado == undefined) {
        const users = findAll();
        const userFound = users.find(function (user) {
            return user.id == req.cookies.recordame
        })

        req.session.usuarioLogueado = {
            id: userFound.id,
            name: userFound.name,
            email: userFound.email,
            security: userFound.security
        };
    }

    next();


}

module.exports = recordame;