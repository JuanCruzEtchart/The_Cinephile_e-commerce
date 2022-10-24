const path = require("path");
const fs = require("fs");
const { validationResult } = require("express-validator");

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

const productController = {
  //Render de vista de detalle de productos
  detail: (req, res) => {
    const data = findAll();
    const directorsFilter = [];
    const similarFilter = [];

    let productFound = data.find((product) => {
      return product.id == req.params.id;
    });

    data.forEach((filtered) => {
      if (filtered.director == productFound.director) {
        directorsFilter.push(filtered);
      }
    });

    data.forEach((filtered) => {
      if (filtered.genre1 == productFound.genre1) {
        similarFilter.push(filtered);
      }
    });

    res.render("productDetail", {
      product: productFound,
      list: data,
      director: directorsFilter,
      similar: similarFilter,
    });
  },

  //Render de vista de creación de productos
  create: (req, res) => {
    const dataTemp = findAllTemp();
    res.render("productCreate", { old: dataTemp });
  },

  //Guardado de producto creado
  store: (req, res) => {
    const dataTemp = findAllTemp();
    const validationErrors = validationResult(req);

    const productImage = req.files.productImage.map(function (image) {
      return image.filename;
    });
    const backgroundImage = req.files.backgroundImage.map(function (image) {
      return image.filename;
    });
    console.log(req.files);
    console.log(validationErrors);

    if (!validationErrors.isEmpty()) {
      res.render("productCreate", {
        errors: validationErrors.array(),
        errors2: validationErrors.mapped(),
        old: req.body,
      });
      console.log(validationErrors);
    } else {
      const newProduct = {
        name: req.body.name,
        type: req.body.type,
        year: req.body.year,
        rated: req.body.rated,
        length: req.body.length,
        imdbScore: Number(req.body.imdbScore),
        imdbTotalReviews: req.body.imdbTotalReviews,
        tomatoScore: req.body.tomatoScore,
        trailerLink: req.body.trailerLink,
        genre1: req.body.genre1,
        genre2: req.body.genre2,
        purchasePrice: Number(req.body.purchasePrice),
        rentalPrice: Number(req.body.rentalPrice),
        synopsis: req.body.synopsis,
        director: req.body.director,
        directorBiography: req.body.directorBiography,
        screenwriter: req.body.screenwriter,
        screenwriterBiography: req.body.screenwriterBiography,
        productImage: productImage,
        backgroundImage: backgroundImage,
        castLength: req.body.castLength,
      };

      writeFileTemp(newProduct);
      res.redirect("/product/create/cast");
      console.log(newProduct);
      console.log("Producto temporal creado");
    }
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
    const validationErrors = validationResult(req);

    let productFound = data.find((product) => {
      return product.id == req.params.id;
    });

    const productImage = req.files.productImage.map(function (image) {
      return image.filename;
    });
    const backgroundImage = req.files.backgroundImage.map(function (image) {
      return image.filename;
    });

    if (!validationErrors.isEmpty()) {
      res.render("productUpdate", {
        product: productFound,
        errors: validationErrors.array(),
        errors2: validationErrors.mapped(),
      });
      console.log(validationErrors);
    } else {
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
      productFound.directorBiography = req.body.directorBiography;
      productFound.screenwriter = req.body.screenwriter;
      productFound.screenwriterBiography = req.body.screenwriterBiography;
      productFound.productImage = productImage;
      productFound.backgroundImage = backgroundImage;
      productFound.castLength = req.body.castLength;

      writeFile(data);
      res.redirect("/product/list");
    }
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

    const actors = [];

    for (let i = 1; i <= req.body.castLength; i++) {
      const actorsPhoto = req.files.filter(function (file) {
        return file.fieldname == "actorsPhoto" + i;
      });
      const actorsPhotoFile = actorsPhoto.map(function (file) {
        return file.filename;
      });

      actors.push({
        id: i,
        actorsName: req.body["actorsName" + i],
        character: req.body["character" + i],
        actorsBiography: req.body["actorsBiography" + i],
        actorsPhoto: actorsPhotoFile,
      });
    }

    const newCast = {
      id: data.length + 1,
      name: req.body.name,
      type: req.body.type,
      year: req.body.year,
      rated: req.body.rated,
      length: req.body.length,
      imdbScore: Number(req.body.imdbScore),
      imdbTotalReviews: req.body.imdbTotalReviews,
      tomatoScore: req.body.tomatoScore,
      trailerLink: req.body.trailerLink,
      genre1: req.body.genre1,
      genre2: req.body.genre2,
      purchasePrice: Number(req.body.purchasePrice),
      rentalPrice: Number(req.body.rentalPrice),
      synopsis: req.body.synopsis,
      director: req.body.director,
      directorBiography: req.body.directorBiography,
      screenwriter: req.body.screenwriter,
      screenwriterBiography: req.body.screenwriterBiography,
      productImage: productImage,
      backgroundImage: backgroundImage,
      castLength: req.body.castLength,
      cast: actors,
    };

    data.push(newCast);
    writeFileTemp({});
    writeFile(data);
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
