const db = require("../database/models");

const Product = db.Product;

const mainController = {
  home: async (req, res) => {
    try {
      const movies = await Product.findAll({ where: { type: "Película" } });
      const series = await Product.findAll({ where: { type: "Serie de TV" } });
      const lastProduct = await Product.findAll({
        limit: 1,
        order: [["id", "DESC"]],
      });
      const lastProducts = await Product.findAll({
        order: [["id", "DESC"]],
      });
      const bestRated = await Product.findAll({
        order: [["imdb_score", "DESC"]],
      });
      res.render("index", {
        movies,
        series,
        lastProduct: lastProduct[0],
        lastProducts,
        bestRated,
      });
    } catch (err) {
      res.send(err);
    }
  },
};

module.exports = mainController;
