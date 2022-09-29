const path = require("path");
const fs = require("fs");

function findAll() {
  const jsonData = fs.readFileSync(
    path.join(__dirname, "../data/products.json")
  );
  const data = JSON.parse(jsonData);
  return data;
}

function writeFile(data) {
  const dataString = JSON.stringify(data, null, 1);
  fs.writeFileSync(path.join(__dirname, "../data/products.json"), dataString);
}

const productController = {
  detail: (req, res) => {
    const data = findAll();
    let productFound = data.find((product) => {
      return product.id == req.params.id;
    });
    res.render("productDetail", { product: productFound });
  },
  create: (req, res) => {
    res.render("productCreate");
  },
  store: (req, res) => {
    const productImage = req.files.productImage.map(function (image) {
      return image.filename;
    });
    const backgroundImage = req.files.backgroundImage.map(function (image) {
      return image.filename;
    });

    const data = findAll();
    const newProduct = {
      id: data.length + 1,
      name: req.body.name,
      type: req.body.type,
      year: req.body.year,
      rated: req.body.rated,
      length: req.body.length,
      imdbScore: req.body.imdbScore,
      imdbTotalReviews: req.body.imdbTotalReviews,
      tomatoScore: req.body.tomatoScore,
      trailerLink: req.body.trailerLink,
      genre1: req.body.genre1,
      genre2: req.body.genre2,
      purchasePrice: req.body.purchasePrice,
      rentalPrice: req.body.rentalPrice,
      synopsis: req.body.synopsis,
      director: req.body.director,
      script: req.body.script,
      productImage: productImage,
      backgroundImage: backgroundImage,
      cast: req.body.cast,
      directedBy: req.body.directedBy,
      similar: req.body.similar,
    };
    console.log(req.files);
    data.push(newProduct);

    writeFile(data);

    res.redirect("/product/create");
  },
  edit: (req, res) => {
    const data = findAll();

    let productFound = data.find((product) => {
      return product.id == req.params.id;
    });
    res.render("productUpdate", { product: productFound });
  },
  update: (req, res) => {
    const data = findAll();
    let productFound = data.find((product) => {
      return product.id == req.params.id;
    });

    productFound.name = req.body.name;
    productFound.description = req.body.description;
    productFound.imdbScore = req.body.imdbScore;
    productFound.imdbTotalReviews = req.body.imdbTotalReviews;
    productFound.tomatoScore = req.body.tomatoScore;
    productFound.trailerLink = req.body.trailerLink;
    productFound.genre1 = req.body.genre1;
    productFound.genre2 = req.body.genre2;
    productFound.purchasePrice = req.body.purchasePrice;
    productFound.rentalPrice = req.body.rentalPrice;
    productFound.synopsis = req.body.synopsis;
    productFound.director = req.body.director;
    productFound.script = req.body.script;
    productFound.productImage = productImage;
    productFound.backgroundImage = backgroundImages;
    productFound.cast = req.body.cast;
    productFound.directedBy = req.body.directedBy;
    productFound.similar = req.body.similar;

    writeFile(data);

    res.redirect("/product/create");
  },
  destroy: (req, res) => {
    const data = findAll();
    let productFound = data.findIndex((product) => {
      return product.id == req.params.id;
    });
    data.splice(productFound, 1);
    writeFile(data);
    res.redirect("/product/create");
  },

  list: (req, res) => {
    const data = findAll();
    res.render("productList", { product: data });
  },

  movies: (req, res) => {
    const data = findAll();
    let movies = [];
    data.forEach((product) => {
      if (product.type == "Película") {
        movies.push(product);
      }
    });
    res.render("moviesList", { product: movies });
  },

  series: (req, res) => {
    const data = findAll();
    let series = [];
    data.forEach((product) => {
      if (product.type == "Serie de TV") {
        series.push(product);
      }
    });
    res.render("seriesList", { product: series });
  },

  cart: (req, res) => {
    res.render("productCart");
  },
};

module.exports = productController;
