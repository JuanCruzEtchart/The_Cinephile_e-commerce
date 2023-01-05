const path = require("path");
const db = require("../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const User = db.User;

const usersApiController = {
  list: (req, res) => {
    User.findAll({ attributes: { exclude: ["password"] } }).then((users) => {
      let response = {
        meta: {
          status: 200,
          total: users.length,
          url: "api/users",
        },
        data: users,
      };
      res.json(response);
    });
  },
};

module.exports = usersApiController;
