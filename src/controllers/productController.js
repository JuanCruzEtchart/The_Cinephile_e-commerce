const path = require("path");
const fs = require("fs");
const { resolveNaptr } = require("dns");

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

function findAllTemp() {
  const jsonData = fs.readFileSync(
    path.join(__dirname, "../data/productTemp.json")
  );
  const data = JSON.parse(jsonData);
  return data;
}

function writeFileTemp(data) {
  const dataString = JSON.stringify(data, null, 1);
  fs.writeFileSync(
    path.join(__dirname, "../data/productTemp.json"),
    dataString
  );
}

/* function findCast() {
  const jsonData = fs.readFileSync(path.join(__dirname, "../data/cast.json"));
  const data = JSON.parse(jsonData);
  return data;
}

function writeFileCast(data) {
  const dataString = JSON.stringify(data, null, 1);
  fs.writeFileSync(path.join(__dirname, "../data/cast.json"), dataString);
} */

const productController = {
  //Render de vista de detalle de productos
  detail: (req, res) => {
    const data = findAll();
    let productFound = data.find((product) => {
      return product.id == req.params.id;
    });
    res.render("productDetail", { product: productFound });
  },

  //Render de vista de creación de productos
  create: (req, res) => {
    const dataTemp = findAllTemp();
    res.render("productCreate", { old: dataTemp });
  },

  //Guardado de producto creado
  store: (req, res) => {
    const productImage = req.files.productImage.map(function (image) {
      return image.filename;
    });
    const backgroundImage = req.files.backgroundImage.map(function (image) {
      return image.filename;
    });
    console.log(req.files);

    /*     function productImage() {
      if (!req.files.productImage.isEmpty()) {
        req.files.productImage.map(function (image) {
          return image.filename;
        });
      }
    }; */
    /*
    const backgroundImage = function (req.files.backgroundImage) {
      if (req.files.productImage.isEmpty()) {
        req.files.backgroundImage.map(function (image) {
          return image.filename;
        });
      }
    };  */
    const data = findAllTemp();
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
      castLength: req.body.castLength,
      directedBy: req.body.directedBy,
      similar: req.body.similar,
    };
    /*  console.log(req.files); */
    /*  data.push(newProduct); */
    writeFileTemp(newProduct);
    /* res.render("productCastlength", { product: newProduct }); */
    res.redirect("/product/create/cast");
    console.log(newProduct);
  },

  //Render de vista de edición de productos
  edit: (req, res) => {
    const data = findAll();
    let productFound = data.find((product) => {
      return product.id == req.params.id;
    });
    res.render("productUpdate", { product: productFound });
  },

  //Guardado de edición de productos
  update: (req, res) => {
    const data = findAll();
    let productFound = data.find((product) => {
      return product.id == req.params.id;
    });

    const productImage = req.files.productImage.map(function (image) {
      return image.filename;
    });
    const backgroundImage = req.files.backgroundImage.map(function (image) {
      return image.filename;
    });

    productFound.name = req.body.name;
    productFound.type = req.body.type;
    productFound.year = req.body.year;
    productFound.rated = req.body.rated;
    productFound.length = req.body.length;
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
    productFound.backgroundImage = backgroundImage;
    productFound.castLength = req.body.castLength;
    productFound.directedBy = req.body.directedBy;
    productFound.similar = req.body.similar;

    writeFile(data);

    res.redirect("/product/list");
  },

  //Eliminación de productos
  destroy: (req, res) => {
    const data = findAll();
    let productFound = data.findIndex((product) => {
      return product.id == req.params.id;
    });
    data.splice(productFound, 1);
    writeFile(data);
    res.redirect("/product/list");
  },

  //Render de vista de creación de repartos
  castCreate: (req, res) => {
    const dataTemp = findAllTemp();

    res.render("productCast", { product: dataTemp });
  },

  //Guardado de repartos
  castUpolad: (req, res) => {
    const data = findAll();
    const dataTemp = findAllTemp();
    const productImage = dataTemp.productImage.map(function (image) {
      return image;
    });
    const backgroundImage = dataTemp.backgroundImage.map(function (image) {
      return image;
    });
    /*     const actorsPhoto = req.files.actorsPhoto.map(function (image) {
      return image.filename;
    }); */

    let actors = [];

    for (let i = 1; i <= req.body.castLength; i++) {
      actors.push({
        id: i,
        actorsName: req.body["actorsName" + i],
        character: req.body["character" + i],
        actorsBiography: req.body["actorsBiography" + i],
        actorsPhoto: req.files["actorsPhoto" + i],
      });
      console.log(req.files["actorsPhoto" + i]);
    }
    /*     const productIage = req.files.actorsPhoto.map(function (image) {
      return image.filename;
    }); */

    /* console.log(req.body); */

    const newCast = {
      /*       id: dataCast.length + 1,
      product: req.body.product, */
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
      castLength: req.body.castLength,
      cast: req.body.cast,
      directedBy: req.body.directedBy,
      similar: req.body.similar,
      cast: actors,
    };
    console.log(req.files);
    data.push(newCast);

    writeFile(data);
    writeFileTemp({});

    res.redirect("/product/list");
  },

  //Render de vista de lista general de productos
  list: (req, res) => {
    const data = findAll();
    res.render("productList", { product: data });
  },

  //Render de vista de lista de películas
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

  //Render de vista de lista de series
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

  //Render de vista de carrito
  cart: (req, res) => {
    res.render("productCart");
  },
};

module.exports = productController;
