const path = require("path");
const fs = require("fs");
const { validationResult } = require("express-validator");
const db = require("../database/models");
const { resolveNaptr } = require("dns");

const Movies = db.Movie;
const Series = db.Serie;
const Actors = db.Actor;
const Directors = db.Director;
const Screenwriters = db.Screenwriter;
const Genres = db.Genre;

/* function findAll() {
  const jsonData = fs.readFileSync(
    path.join(__dirname, "../data/products.json")
  );
  const data = JSON.parse(jsonData);
  return data;
} */

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
  detailMovie: (req, res) => {
    /*     const data = findAll();
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
    }); */
    const id = req.params.id;
    db.Movie.findByPk(id, {
      include: ["director", "screenwriter", "genre1", "genre2", "actors"],
    })
      .then((product) => {
        res.render("productDetail", { product });
      })
      .catch((error) => {
        res.send(error);
      });
  },

  detailSerie: (req, res) => {
    /*     const data = findAll();
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
        }); */
    const id = req.params.id;
    db.Serie.findByPk(id, {
      include: ["director", "screenwriter", "genre1", "genre2", "actors"],
    })
      .then((product) => {
        res.render("productDetail", { product });
      })
      .catch((error) => {
        res.send(error);
      });
  },

  //Render de vista de carga de directores y guionistas
  createProductionTeam: (req, res) => {
    const directors = Directors.findAll();
    const screenwriters = Screenwriters.findAll();
    Promise.all([directors, screenwriters])
      .then(([allDirectors, allScreenwriters]) => {
        res.render("createProductionTeam", {
          directors: allDirectors,
          screenwriters: allScreenwriters,
        });
      })
      .catch((error) => {
        res.send(error);
      });
  },

  //Guardado de directores y guionistas
  productionTeamUpload: (req, res) => {
    if (req.body.radio == "actor") {
      Actors.create({
        full_name: req.body.name,
        biography_link: req.body.biography_link,
        actors_photo: req.file.filename,
      })
        .then(() => {
          console.log("Actor creado!");
          res.redirect("/product/create/productionTeam");
        })
        .catch((error) => res.send(error));
    } else if (req.body.radio == "director") {
      Directors.create({
        full_name: req.body.name,
        biography_link: req.body.biography_link,
        directors_photo: req.file.filename,
      })
        .then(() => {
          console.log("Director creado!");
          res.redirect("/product/create/productionTeam");
        })
        .catch((error) => res.send(error));
    } else {
      Screenwriters.create({
        full_name: req.body.name,
        biography_link: req.body.biography_link,
        screenwriter_photo: req.file.filename,
      })
        .then(() => {
          console.log("Guionista creado!");
          res.redirect("/product/create/productionTeam");
        })
        .catch((error) => res.send(error));
    }
  },
  //Render de la vista de carga de actores
  createActor: (req, res) => {
    Actors.findAll().then((actors) => {
      res.render("createActor", { actors });
    });
  },

  //Guardado de actores
  uploadActor: (req, res) => {
    Actors.create({
      full_name: req.body.name,
      biography_link: req.body.biography_link,
      actors_photo: req.body.photo,
    })
      .then(() => {
        console.log("Actor creado!");
        res.redirect("/product/create/actor");
      })
      .catch((error) => {
        res.send(error);
      });
  },

  //Render de vista de creación de productos
  create: async (req, res) => {
    const dataTemp = await findAllTemp();
    const genres = await Genres.findAll();
    const actors = await Actors.findAll();
    const directors = await Directors.findAll();
    const screenwriter = await Screenwriters.findAll();
    res.render("productCreate", {
      old: dataTemp,
      genres,
      actors,
      directors,
      screenwriter,
    });
  },

  //Guardado de producto temporal
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

    /*     if (!validationErrors.isEmpty()) {
      res.render("productCreate", {
        errors: validationErrors.array(),
        errors2: validationErrors.mapped(),
        old: req.body,
      });
      console.log(validationErrors);
    } else {
      const newProduct = {
        type: req.body.type,
        name: req.body.name,
        release_year: req.body.release_year,
        rating: req.file.rating,
        length: req.body.length,
        imdb_score: req.body.imdbScore,
        imdb_total_reviews: req.body.imdbTotalReviews,
        tomato_score: req.body.tomatoScore,
        trailer_link: req.body.trailerLink,
        genre1_id: req.body.genre1,
        genre2_id: req.body.genre2,
        purchase_price: req.body.purchasePrice,
        rental_price: req.body.rentalPrice,
        synopsis: req.body.synopsis,
        director_id: req.body.director,
        screenwriter_id: req.body.screenwriter,
        product_image: productImage,
        background_image: backgroundImage,
      };

      writeFileTemp(newProduct);
      res.redirect("/product/create/cast");
      console.log(newProduct);
      console.log("Producto temporal creado!"); 
    } */
    const newProduct = {
      type: req.body.type,
      name: req.body.name,
      release_year: req.body.release_year,
      rating: req.body.rating,
      length: req.body.length,
      imdb_score: req.body.imdbScore,
      imdb_total_reviews: req.body.imdbTotalReviews,
      tomato_score: req.body.tomatoScore,
      trailer_link: req.body.trailerLink,
      genre1_id: req.body.genre1,
      genre2_id: req.body.genre2,
      purchase_price: req.body.purchasePrice,
      rental_price: req.body.rentalPrice,
      synopsis: req.body.synopsis,
      director_id: req.body.director,
      screenwriter_id: req.body.screenwriter,
      product_image: productImage,
      background_image: backgroundImage,
      castLength: req.body.castLength,
    };

    writeFileTemp(newProduct);
    res.redirect("/product/create/cast");
    console.log(newProduct);
    console.log("Producto temporal creado!");
    /*     if (req.body.type == "Película") {
      Movies.create({
        name: req.body.name,
        release_year: req.body.release_year,
        rating: req.file.rating,
        length: req.body.length,
        imdb_score: req.body.imdbScore,
        imdb_total_reviews: req.body.imdbTotalReviews,
        tomato_score: req.body.tomatoScore,
        trailer_link: req.body.trailerLink,
        purchase_price: req.body.purchasePrice,
        rental_price: req.body.rentalPrice,
        synopsis: req.body.synopsis,
        director_id: req.body.director,
        screenwriter_id: req.body.screenwriter,
        product_image: productImage,
        background_image: backgroundImage,
      })
        .then((movie) => {
          console.log("Película creada!");
          movie.set;
          //res.redirect("/product/create");
        })
        .catch((error) => res.send(error));
    } else {
    } */
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
    Actors.findAll().then((actors) => {
      res.render("productCast", { product: dataTemp, actors });
    });
  },

  //Guardado de repartos y producto final
  castUpload: (req, res) => {
    /*     const data = findAll();
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
    res.redirect("/product/list"); */

    if (req.body.type == "Película") {
      Movies.create({
        name: req.body.name,
        release_year: req.body.release_year,
        rating: req.body.rating,
        length: req.body.length,
        imdb_score: req.body.imdb_score,
        imdb_total_reviews: req.body.imdb_total_reviews,
        tomato_score: req.body.tomato_score,
        trailer_link: req.body.trailer_link,
        genre1_id: req.body.genre1_id,
        genre2_id: req.body.genre2_id,
        purchase_price: req.body.purchase_price,
        rental_price: req.body.rental_price,
        synopsis: req.body.synopsis,
        director_id: req.body.director_id,
        screenwriter_id: req.body.screenwriter_id,
        product_image: req.body.productImage,
        background_image: req.body.backgroundImage,
      })
        .then((movie) => {
          for (let i = 1; i <= req.body.castLength; i++) {
            movie.setActors(req.body["actor" + i]);
          }
          writeFileTemp({});
          console.log("Película creada!");
          res.redirect("/product/list");
        })
        .catch((error) => res.send(error));
    } else {
      Series.create({
        name: req.body.name,
        release_year: req.body.release_year,
        rating: req.body.rating,
        length: req.body.length,
        imdb_score: req.body.imdb_score,
        imdb_total_reviews: req.body.imdb_total_reviews,
        tomato_score: req.body.tomato_score,
        trailer_link: req.body.trailer_link,
        genre1_id: req.body.genre1_id,
        genre2_id: req.body.genre2_id,
        purchase_price: req.body.purchase_price,
        rental_price: req.body.rental_price,
        synopsis: req.body.synopsis,
        director_id: req.body.director_id,
        screenwriter_id: req.body.screenwriter_id,
        product_image: req.body.productImage,
        background_image: req.body.backgroundImage,
      })
        .then((serie) => {
          for (let i = 1; i <= req.body.castLength; i++) {
            serie.setActors(req.body["actor" + i]);
          }
          writeFileTemp({});
          console.log("Serie creada!");
          res.redirect("/product/list");
        })
        .catch((error) => res.send(error));
    }
  },

  //Render de vista de lista general de productos
  list: (req, res) => {
    /*     const data = findAll();
    res.render("productList", { product: data }); */
    const movies = Movies.findAll();
    const series = Series.findAll();
    Promise.all([movies, series])
      .then(([allMovies, allSeries]) => {
        res.render("productList", { movies: allMovies, series: allSeries });
      })
      .catch((error) => {
        res.send(error);
      });

    /*     Movies.findAll()
      .then((movies) => {
        res.render("productList", { movies });
      })
      .catch((error) => {
        res.send(error);
      }); */
  },

  //Render de vista de lista de películas
  movies: (req, res) => {
    /*     const data = findAll();
    let movies = [];
    data.forEach((product) => {
      if (product.type == "Película") {
        movies.push(product);
      }
    });
    res.render("moviesList", { product: movies }); */
    Movies.findAll()
      .then((movies) => {
        res.render("moviesList", { movies });
      })
      .catch((error) => {
        res.send(error);
      });
  },

  //Render de vista de lista de series
  series: (req, res) => {
    /*     const data = findAll();
    let series = [];
    data.forEach((product) => {
      if (product.type == "Serie de TV") {
        series.push(product);
      }
    });
    res.render("seriesList", { product: series }); */
    Series.findAll()
      .then((series) => {
        res.render("seriesList", { series });
      })
      .catch((error) => {
        res.send(error);
      });
  },

  //Render de vista de carrito
  cart: (req, res) => {
    res.render("productCart");
  },
};

module.exports = productController;
