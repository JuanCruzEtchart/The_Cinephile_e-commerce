const path = require("path");

const productController = {
  detail: (req, res) => {
    res.render("productDetail");
  },
  cart: (req, res) => {
    res.render("productCart");
  },
};

module.exports = productController;
