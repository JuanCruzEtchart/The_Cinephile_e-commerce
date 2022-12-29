const path = require("path");
const db = require("../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const Director = db.Director;

const directorsApiController = {
  list: (req, res) => {
    Director.findAll().then((director) => {
      let response = {
        meta: {
          status: 200,
          total: director.length,
          url: "api/directors",
        },
        data: director,
      };
      res.json(response);
    });
  },
};

module.exports = directorsApiController;
