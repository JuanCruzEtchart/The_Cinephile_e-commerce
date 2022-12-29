const path = require("path");
const db = require("../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const Actor = db.Actor;

const actorsApiController = {
  list: (req, res) => {
    Actor.findAll().then((actors) => {
      let response = {
        meta: {
          status: 200,
          total: actors.length,
          url: "api/actors",
        },
        data: actors,
      };
      res.json(response);
    });
  },
};

module.exports = actorsApiController;
