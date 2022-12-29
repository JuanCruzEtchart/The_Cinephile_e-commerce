const path = require("path");
const db = require("../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const Product = db.Product;

const productsApiController = {
  //Barra de búsqueda
  /*   search: async (req, res) => {
    try {
      const products = await Product.findAll({
        where: { name: { [Op.like]: "%" + req.query.product + "%" } },
      });
      res.render("searchResult", { products, query: req.query.product });
    } catch (err) {
      res.send(err);
    }
  }, */

  search: (req, res) => {
    Product.findAll({
      where: { name: { [Op.like]: "%" + req.query.product + "%" } },
    }).then((products) => {
      let response = {
        meta: {
          status: 200,
          total: products.length,
          url: "api/product/search/",
        },
        data: products,
      };
      res.json(response);
    });
  },

  list: (req, res) => {
    Product.findAll({
      include: [
        "director",
        "screenwriter",
        "genre1",
        "genre2",
        "actors",
        "characters",
      ],
    }).then((products) => {
      let response = {
        meta: {
          status: 200,
          total: products.length,
          url: "api/product/list",
        },
        data: products,
      };
      res.json(response);
    });
  },

  detail: (req, res) => {
    const id = req.params.id;
    Product.findByPk(id, {
      include: [
        "director",
        "screenwriter",
        "genre1",
        "genre2",
        "actors",
        "characters",
      ],
    }).then((product) => {
      let response = {
        meta: {
          status: 200,
          url: "/api/product/detail/",
        },
        data: product,
      };
      res.json(response);
    });
  },

  movies: (req, res) => {
    Product.findAll({
      where: { type: "Película" },
      include: [
        "director",
        "screenwriter",
        "genre1",
        "genre2",
        "actors",
        "characters",
      ],
    }).then((movies) => {
      let response = {
        meta: {
          status: 200,
          total: movies.length,
          url: "api/product/movies",
        },
        data: movies,
      };
      res.json(response);
    });
  },

  series: (req, res) => {
    Product.findAll({
      where: { type: "Serie de TV" },
      include: [
        "director",
        "screenwriter",
        "genre1",
        "genre2",
        "actors",
        "characters",
      ],
    }).then((series) => {
      let response = {
        meta: {
          status: 200,
          total: series.length,
          url: "api/product/series",
        },
        data: series,
      };
      res.json(response);
    });
  },

  lastItem: (req, res) => {
    Product.findAll({
      limit: 1,
      order: [["id", "DESC"]],
      include: [
        "director",
        "screenwriter",
        "genre1",
        "genre2",
        "actors",
        "characters",
      ],
    }).then((product) => {
      let response = {
        meta: {
          status: 200,
          url: "/api/product/lastItem/",
        },
        data: product,
      };
      res.json(response);
    });
  },

  firstMovies: (req, res) => {
    Product.findAll({
      where: { type: "Película" },
      limit: 5,
      order: [["id", "ASC"]],
      include: [
        "director",
        "screenwriter",
        "genre1",
        "genre2",
        "actors",
        "characters",
      ],
    }).then((movies) => {
      let response = {
        meta: {
          status: 200,
          url: "/api/product/firstMovies/",
        },
        data: movies,
      };
      res.json(response);
    });
  },

  firstSeries: (req, res) => {
    Product.findAll({
      where: { type: "Serie de TV" },
      limit: 5,
      order: [["id", "ASC"]],
      include: [
        "director",
        "screenwriter",
        "genre1",
        "genre2",
        "actors",
        "characters",
      ],
    }).then((series) => {
      let response = {
        meta: {
          status: 200,
          url: "/api/product/firstSeries/",
        },
        data: series,
      };
      res.json(response);
    });
  },
};

module.exports = productsApiController;
