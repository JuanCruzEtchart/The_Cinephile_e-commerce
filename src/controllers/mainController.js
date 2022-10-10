const path = require("path");

const mainController = {
  home: (req, res) => {
    res.render("index", {});
  },
};

module.exports = mainController;
