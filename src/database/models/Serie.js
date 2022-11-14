module.exports = (sequelize, dataTypes) => {
  let alias = "Serie";
  let cols = {
    id: {
      type: dataTypes.INTEGER(10),
      primarKey: true,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    release_year: {
      type: dataTypes.TINYINT(4),
      allowNull: false,
    },
    rating: {
      type: dataTypes.STRING(30),
      allowNull: false,
    },
    length: {
      type: dataTypes.STRING(30),
      allowNull: false,
    },
    imdb_score: {
      type: dataTypes.DECIMAL(3, 1),
      allowNull: false,
    },
    imdb_total_reviews: {
      type: dataTypes.STRING(30),
      allowNull: false,
    },
    tomato_score: {
      type: dataTypes.INTEGER(3),
    },
    trailer_link: {
      type: dataTypes.STRING(500),
      allowNull: false,
    },
    purchase_price: {
      type: dataTypes.DECIMAL(6, 2),
      allowNull: false,
    },
    rental_price: {
      type: dataTypes.DECIMAL(6, 2),
      allowNull: false,
    },
    synopsis: {
      type: dataTypes.TEXT,
      allowNull: false,
    },
    director_id: {
      type: dataTypes.INTEGER(10),
      allowNull: false,
    },
    screenwriter_id: {
      type: dataTypes.INTEGER(10),
      allowNull: false,
    },
    product_image: {
      type: dataTypes.BLOB,
      allowNull: false,
    },
    background_image: {
      type: dataTypes.BLOB,
      allowNull: false,
    },
    genre1_id: {
      type: dataTypes.INTEGER(10),
      allowNull: false,
    },
    genre2_id: {
      type: dataTypes.INTEGER(10),
      allowNull: false,
    },
  };

  let config = {
    timestamps: false,
    tableName: "series",
  };

  const Serie = sequelize.define(alias, cols, config);

  Serie.associate = (models) => {
    Serie.belongsTo(models.Director, {
      as: "director",
      foreingKey: "director_id",
    });

    Serie.belongsTo(models.Screenwriter, {
      as: "screenwriter",
      foreingKey: "screenwriter_id",
    });

    Serie.belongsTo(models.Genre, {
      as: "genre1",
      foreingKey: "genre1_id",
    });

    Serie.belongsTo(models.Genre, {
      as: "genre2",
      foreingKey: "genre2_id",
    });

    Serie.belongToMany(models.Actor, {
      as: "actors",
      through: "actor_serie",
      foreingKey: "movie_id",
      otherKey: "actor_id",
      timestamps: false,
    });
  };

  return Serie;
};
