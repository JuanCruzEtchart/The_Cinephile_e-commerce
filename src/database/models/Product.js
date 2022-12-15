module.exports = (sequelize, dataTypes) => {
  let alias = "Product";
  let cols = {
    id: {
      type: dataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    type: {
      type: dataTypes.STRING(100),
      allowNull: true,
    },
    name: {
      type: dataTypes.STRING(100),
      allowNull: true,
      unique: { args: true, msg: "El producto ya fue creado!" },
    },
    release_year: {
      type: dataTypes.TINYINT(4),
      allowNull: true,
    },
    rating: {
      type: dataTypes.STRING(30),
      allowNull: true,
    },
    length: {
      type: dataTypes.STRING(30),
      allowNull: true,
    },
    imdb_score: {
      type: dataTypes.DECIMAL(3, 1),
      allowNull: true,
    },
    imdb_total_reviews: {
      type: dataTypes.STRING(30),
      allowNull: true,
    },
    tomato_score: {
      type: dataTypes.INTEGER(3),
    },
    trailer_link: {
      type: dataTypes.STRING(500),
      allowNull: true,
    },
    purchase_price: {
      type: dataTypes.DECIMAL(6, 2),
      allowNull: true,
    },
    rental_price: {
      type: dataTypes.DECIMAL(6, 2),
      allowNull: true,
    },
    synopsis: {
      type: dataTypes.TEXT,
      allowNull: true,
    },
    director_id: {
      type: dataTypes.INTEGER(10),
      allowNull: true,
    },
    screenwriter_id: {
      type: dataTypes.INTEGER(10),
      allowNull: true,
    },
    product_image: {
      type: dataTypes.STRING(100),
      allowNull: true,
    },
    background_image: {
      type: dataTypes.STRING(100),
      allowNull: true,
    },
    genre1_id: {
      type: dataTypes.INTEGER(10),
      allowNull: true,
      foreignKey: true,
    },
    genre2_id: {
      type: dataTypes.INTEGER(10),
      allowNull: true,
      foreignKey: true,
    },
  };

  let config = {
    timestamps: false,
    tableName: "products",
  };

  const Product = sequelize.define(alias, cols, config);

  Product.associate = (models) => {
    Product.belongsTo(models.Director, {
      as: "director",
      foreignKey: "director_id",
    });

    Product.belongsTo(models.Screenwriter, {
      as: "screenwriter",
      foreignKey: "screenwriter_id",
    });

    Product.belongsTo(models.Genre, {
      as: "genre1",
      foreignKey: "genre1_id",
    });

    Product.belongsTo(models.Genre, {
      as: "genre2",
      foreignKey: "genre2_id",
    });

    Product.belongsToMany(models.Actor, {
      as: "actors",
      through: "actor_product",
      foreignKey: "product_id",
      otherKey: "actor_id",
      timestamps: false,
    });

    Product.belongsToMany(models.Character, {
      as: "characters",
      through: "product_character",
      foreignKey: "product_id",
      otherKey: "character_id",
      timestamps: false,
    });

    /*  Product.belongsToMany(models.User, {
      as: "product_cart",
      through: "user_cart",
      foreingKey: "id_product",
      otherKey: "id_user",
      timestamps: false,
    }); */

  /*   Product.belongsToMany(models.User, {
      as: "product_favorite",
      through: "user_favorites",
      foreingKey: "id_product",
      otherKey: "id_user",
      timestamps: false,
    }); */
    

    //PRUEBA DE TABLA DE PRODUCTO COMPLETO
    Product.belongsToMany(models.Character, {
      as: "character",
      through: "product_actor_character",
      foreignKey: "product_id",
      otherKey: "character_id",
      timestamps: false,
    });

    Product.belongsToMany(models.Actor, {
      as: "actor",
      through: "product_actor_character",
      foreignKey: "product_id",
      otherKey: "actor_id",
      timestamps: false,
    });
  };

  return Product;
};
