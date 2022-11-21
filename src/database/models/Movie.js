module.exports = (sequelize, dataTypes) => {
  let alias = "Movie";
  let cols = {
    id: {
      type: dataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: dataTypes.STRING(100),
      allowNull: true,
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
      type: dataTypes.BLOB("medium"),
      allowNull: true,
    },
    background_image: {
      type: dataTypes.BLOB("medium"),
      allowNull: true,
    },
    genre1_id: {
      type: dataTypes.INTEGER(10),
      allowNull: true,
    },
    genre2_id: {
      type: dataTypes.INTEGER(10),
      allowNull: true,
    },
  };

  let config = {
    timestamps: false,
    tableName: "movies",
  };

  const Movie = sequelize.define(alias, cols, config);

  Movie.associate = (models) => {
    Movie.belongsTo(models.Director, {
      as: "director",
      foreignKey: "director_id",
    });

    Movie.belongsTo(models.Screenwriter, {
      as: "screenwriter",
      foreignKey: "screenwriter_id",
    });

    Movie.belongsTo(models.Genre, {
      as: "genre1",
      foreignKey: "genre1_id",
    });

    Movie.belongsTo(models.Genre, {
      as: "genre2",
      foreignKey: "genre2_id",
    });

    Movie.belongsToMany(models.Actor, {
      as: "actors",
      through: "actor_movie",
      foreignKey: "movie_id",
      otherKey: "actor_id",
      timestamps: false,
    });
  };

  return Movie;
};
