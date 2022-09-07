const path = require("path");

/*const productController = {
    detail: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../views/productDetail.html"));
      },
};*/

const productController = {
  detail: (req, res) => {
    res.render("productDetail");
  },
  hola: (req, res) => {
    return res.send("hola");
  },
};

module.exports = productController;
