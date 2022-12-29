const path = require("path");
const db = require("../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const Genre = db.Genre;

const genresAPIController = {
  list: (req, res) => {
    Genre.findAll().then((genres) => {
      let response = {
        meta: {
          status: 200,
          total: genres.length,
          url: "api/genres",
        },
        data: genres,
      };
      res.json(response);
    });
  },
};

module.exports = genresAPIController;
