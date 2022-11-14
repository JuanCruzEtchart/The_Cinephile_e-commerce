module.exports = (sequelize, dataTypes) => {
  let alias = "Actor";
  let cols = {
    id: {
      type: dataTypes.INTEGER(10),
      primarKey: true,
      autoIncrement: true,
    },
    full_name: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    biography_link: {
      type: dataTypes.STRING(500),
      allowNull: false,
    },
    product_image: {
      type: dataTypes.BLOB,
      allowNull: false,
    },
  };

  let config = {
    timestamps: false,
    tableName: "actors",
  };

  const Actor = sequelize.define(alias, cols, config);

  Actor.associate = (models) => {
    Movie.belongToMany(models.Movie, {
      as: "movies",
      through: "actor_movie",
      foreingKey: "actor_id",
      otherKey: "movie_id",
      timestamps: false,
    });

    Actor.belongToMany(models.Serie, {
      as: "series",
      through: "actor_serie",
      foreingKey: "actor_id",
      otherKey: "serie_id",
      timestamps: false,
    });
  };

  return Actor;
};
