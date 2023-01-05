const path = require("path");
const fs = require("fs");
const { validationResult } = require("express-validator");
const db = require("../database/models");
const Op = db.Sequelize.Op;

const Product = db.Product;
const Actors = db.Actor;
const Directors = db.Director;
const Screenwriters = db.Screenwriter;
const Genres = db.Genre;
const Characters = db.Character;
const ActorCharacter = db.ActorCharacter;
const ProductActorCharacter = db.ProductActorCharacter;

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
  //Barra de búsqueda
  search: async (req, res) => {
    try {
      console.log(req.query);
      const products = await Product.findAll({
        where: { name: { [Op.like]: "%" + req.query.product + "%" } },
      });
      res.render("searchResult", { products, query: req.query.product });
    } catch (err) {
      res.send(err);
    }
  },

  //Render de vista de detalle de productos
  detailProduct: async (req, res) => {
    const id = req.params.id;
    try {
      let product = await Product.findByPk(id, {
        include: [
          "director",
          "screenwriter",
          "genre1",
          "genre2",
          "actors",
          "characters",
        ],
      });

      let actor = await Actors.findByPk(id, {
        include: ["characters"],
      });

      let productsByGenre = await Product.findAll({
        where: { genre1_id: product.genre1_id },
        include: [
          "director",
          "screenwriter",
          "genre1",
          "genre2",
          "actors",
          "characters",
        ],
        limit: 10,
      });

      let productsByDirector = await Product.findAll({
        where: { director_id: product.director_id },
        include: [
          "director",
          "screenwriter",
          "genre1",
          "genre2",
          "actors",
          "characters",
        ],
        limit: 10,
      });

      let completeProduct = await ProductActorCharacter.findAll({
        where: { product_id: id },
        include: ["product", "actor", "character"],
      });

      res.render("productDetail", {
        product,
        actor,
        productsByGenre,
        productsByDirector,
        completeProduct,
      });
    } catch (err) {
      res.send(err);
    }
  },

  //Render de vista de carga de directores, guionistas y actores
  createProductionTeam: async (req, res) => {
    try {
      const directors = Directors.findAll();
      const screenwriters = Screenwriters.findAll();
      const actors = Actors.findAll();
      res.render("createProductionTeam", {
        directors,
        screenwriters,
        actors,
      });
    } catch (err) {
      res.send(err);
    }
  },

  //Guardado de directores, guionistas y actores
  productionTeamUpload: async (req, res) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      res.render("createProductionTeam", {
        errors: validationErrors.array(),
        errors2: validationErrors.mapped(),
        old: req.body,
      });
      console.log(validationErrors);
    } else {
      try {
        if (req.body.type == "actor") {
          await Actors.create({
            full_name: req.body.name,
            biography_link: req.body.biography_link,
            actors_photo: req.file.filename,
          });
          console.log("Actor creado!");
          res.redirect("/product/create/productionTeam");
        } else if (req.body.type == "director") {
          await Directors.create({
            full_name: req.body.name,
            biography_link: req.body.biography_link,
            directors_photo: req.file.filename,
          });
          console.log("Director creado!");
          res.redirect("/product/create/productionTeam");
        } else if (req.body.type == "screenwriter") {
          await Screenwriters.create({
            full_name: req.body.name,
            biography_link: req.body.biography_link,
            screenwriter_photo: req.file.filename,
          });
          console.log("Guionista creado!");
          res.redirect("/product/create/productionTeam");
        }
      } catch (err) {
        res.send(err);
      }
    }
  },

  //Render de la vista de carga de personajes
  createCharacter: async (req, res) => {
    try {
      const characters = await Characters.findAll();
      res.render("createCharacter", { characters });
    } catch (err) {
      res.send(err);
    }
  },

  //Guardado de personajes
  uploadCharacter: async (req, res) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      res.render("createCharacter", {
        errors: validationErrors.array(),
        errors2: validationErrors.mapped(),
        old: req.body,
      });
      console.log(validationErrors);
    } else {
      try {
        await Characters.create({
          name: req.body.name,
        });
        console.log("Personaje creado!");
        res.redirect("/product/create/character");
      } catch (err) {
        res.send(err);
      }
    }
  },

  //Render de vista de creación de productos
  create: async (req, res) => {
    try {
      const dataTemp = await findAllTemp();
      const genres = await Genres.findAll({
        order: [["name", "ASC"]],
      });
      const directors = await Directors.findAll({
        order: [["full_name", "ASC"]],
      });
      const screenwriter = await Screenwriters.findAll({
        order: [["full_name", "ASC"]],
      });
      res.render("productCreate", {
        old: dataTemp,
        genres,
        directors,
        screenwriter,
      });
    } catch (err) {
      res.send(err);
    }
  },

  //Guardado de producto temporal
  store: async (req, res) => {
    const dataTemp = findAllTemp();
    const validationErrors = validationResult(req);

    const productImage = req.files.productImage
      ? req.files.productImage[0].filename
      : "";

    const backgroundImage = req.files.backgroundImage
      ? req.files.backgroundImage[0].filename
      : "";

    if (!validationErrors.isEmpty()) {
      try {
        const genres = await Genres.findAll({
          order: [["name", "ASC"]],
        });
        const directors = await Directors.findAll({
          order: [["full_name", "ASC"]],
        });
        const screenwriter = await Screenwriters.findAll({
          order: [["full_name", "ASC"]],
        });
        res.render("productCreate", {
          errors: validationErrors.array(),
          errors2: validationErrors.mapped(),
          old: dataTemp,
          genres,
          directors,
          screenwriter,
        });
        console.log(validationErrors);
      } catch (err) {
        res.send(err);
      }
    } else {
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
    }
  },

  //Render de vista de edición de productos
  edit: async (req, res) => {
    const id = req.params.id;
    try {
      const product = await Product.findByPk(id, {
        include: [
          "director",
          "screenwriter",
          "genre1",
          "genre2",
          "actors",
          "characters",
        ],
      });
      const genres = await Genres.findAll({
        order: [["name", "ASC"]],
      });
      const directors = await Directors.findAll({
        order: [["full_name", "ASC"]],
      });
      const screenwriter = await Screenwriters.findAll({
        order: [["full_name", "ASC"]],
      });
      res.render("productUpdate", {
        product,
        genres,
        directors,
        screenwriter,
      });
    } catch (err) {
      res.send(err);
    }
  },

  //Guardado de edición de productos
  update: async (req, res) => {
    const productId = req.params.id;
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      const product = await Product.findByPk(productId, {
        include: [
          "director",
          "screenwriter",
          "genre1",
          "genre2",
          "actors",
          "characters",
        ],
      });
      const genres = await Genres.findAll({
        order: [["name", "ASC"]],
      });
      const directors = await Directors.findAll({
        order: [["full_name", "ASC"]],
      });
      const screenwriter = await Screenwriters.findAll({
        order: [["full_name", "ASC"]],
      });
      res.render("productUpdate", {
        product,
        genres,
        directors,
        screenwriter,
        errors: validationErrors.array(),
        errors2: validationErrors.mapped(), //mapped convierte array a objeto literal
        old: req.body,
      });
      console.log(validationErrors);
    } else {
      try {
        let product = await Product.findByPk(productId);

        const productImage = req.files.productImage
          ? req.files.productImage
              .map(function (image) {
                return image.filename;
              })
              .toString()
          : product.product_image;

        const backgroundImage = req.files.backgroundImage
          ? req.files.backgroundImage
              .map(function (image) {
                return image.filename;
              })
              .toString()
          : product.background_image;

        //Eliminación de archivo de imagen de producto vieja
        if (req.files.productImage) {
          await fs.unlink(
            path.join(
              __dirname,
              "../../public/images/products/productsCreated/" +
                product.product_image
            ),
            (error) => {
              if (error) throw error;
              console.log("Imagen de producto anterior borrada!");
            }
          );
        }

        //Eliminación de archivo de imagen de fondo vieja
        if (req.files.backgroundImage) {
          await fs.unlink(
            path.join(
              __dirname,
              "../../public/images/products/productsCreated/" +
                product.background_image
            ),
            (error) => {
              if (error) throw error;
              console.log("Imagen de fondo anterior borrada!");
            }
          );
        }
        await Product.update(
          {
            type: req.body.type,
            name: req.body.name,
            release_year: req.body.release_year,
            rating: req.body.rating,
            length: req.body.length,
            imdb_score: req.body.imdbScore.replace(".", ","),
            imdb_total_reviews: req.body.imdbTotalReviews,
            tomato_score: req.body.tomatoScore,
            trailer_link: req.body.trailerLink,
            genre1_id: req.body.genre1,
            genre2_id: req.body.genre2,
            purchase_price: req.body.purchasePrice.replace(".", ","),
            rental_price: req.body.rentalPrice.replace(".", ","),
            synopsis: req.body.synopsis,
            director_id: req.body.director,
            screenwriter_id: req.body.screenwriter,
            product_image: productImage,
            background_image: backgroundImage,
          },
          {
            where: { id: productId },
          }
        );
        console.log("Producto editado!");
        res.redirect("/product/list");
      } catch (err) {
        res.send(err);
      }
    }
  },

  //Eliminación de productos
  destroy: async (req, res) => {
    const productId = req.params.id;
    try {
      let product = await Product.findByPk(productId);
      //Eliminación de relaciones de tablas de producto
      await product.setCharacters([]);
      await product.setActors([]);
      await product.setActor([]);
      await product.setCharacter([]);
      await Product.destroy({ where: { id: productId } });
      await ProductActorCharacter.destroy({ where: { product_id: productId } });
      //Eliminación de archivo de imagen de producto
      await fs.unlink(
        path.join(
          __dirname,
          "../../public/images/products/productsCreated/" +
            product.product_image
        ),
        (error) => {
          if (error) throw error;
          console.log("Imagen de producto borrada!");
        }
      );
      //Eliminación de archivo de imagen de fondo
      await fs.unlink(
        path.join(
          __dirname,
          "../../public/images/products/productsCreated/" +
            product.background_image
        ),
        (error) => {
          if (error) throw error;
          console.log("Imagen de fondo borrada!");
        }
      );
      console.log("Producto borrado!");
      res.redirect("/product/list");
    } catch (err) {
      res.send(err);
    }
  },

  //Render de vista de creación de repartos
  castCreate: async (req, res) => {
    try {
      const dataTemp = await findAllTemp();
      const characters = await Characters.findAll({
        order: [["name", "ASC"]],
      });
      const actors = await Actors.findAll({
        order: [["full_name", "ASC"]],
      });

      res.render("productCast", { product: dataTemp, actors, characters });
    } catch (err) {
      res.send(err);
    }
  },

  //Guardado de repartos y producto final
  castUpload: async (req, res) => {
    /* const validationErrors = validationResult(req); 
    if (!validationErrors.isEmpty()) {*/
    try {
      const product = await Product.create({
        type: req.body.type,
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
      });
      const actors = [];
      const characters = [];
      for (let i = 1; i <= req.body.castLength; i++) {
        actors.push(req.body["actor" + i]);
        characters.push(req.body["character" + i]);
        ActorCharacter.create({
          actor_id: req.body["actor" + i],
          character_id: req.body["character" + i],
        });
        ProductActorCharacter.create({
          product_id: product.id,
          actor_id: req.body["actor" + i],
          character_id: req.body["character" + i],
        });
      }
      product.setActors(actors);
      product.setCharacters(characters);
      writeFileTemp({});
      console.log("Producto creado!");
      res.redirect("/product/list");
    } catch (err) {
      res.send(err);
    }
    /*  } */
  },

  //Render de vista de lista general de productos
  list: async (req, res) => {
    try {
      const products = await Product.findAll({
        include: [
          "director",
          "screenwriter",
          "genre1",
          "genre2",
          "actors",
          "characters",
        ],
      });
      res.render("productList", { products });
    } catch (err) {
      res.send(err);
    }
  },

  //Render de vista de lista de películas
  movies: async (req, res) => {
    try {
      const movies = await Product.findAll({ where: { type: "Película" } });
      res.render("moviesList", { movies });
    } catch (err) {
      res.send(err);
    }
  },

  //Render de vista de lista de series
  series: async (req, res) => {
    try {
      const series = await Product.findAll({ where: { type: "Serie de TV" } });
      res.render("seriesList", { series });
    } catch (err) {
      res.send(err);
    }
  },

  //Render de vista de carrito
  cart: (req, res) => {
    res.render("productCart");
  },
};

module.exports = productController;
