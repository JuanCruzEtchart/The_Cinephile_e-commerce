module.exports = (sequelize, dataTypes) => {
  let alias = "Actor";
  let cols = {
    id: {
      type: dataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
    },
    full_name: {
      type: dataTypes.STRING(100),
      allowNull: true,
    },
    biography_link: {
      type: dataTypes.STRING(500),
      allowNull: true,
    },
    actors_photo: {
      type: dataTypes.STRING(100),
      allowNull: true,
    },
  };

  let config = {
    timestamps: false,
    tableName: "actors",
  };

  const Actor = sequelize.define(alias, cols, config);

  Actor.associate = (models) => {
    Actor.belongsToMany(models.Movie, {
      as: "movies",
      through: "actor_movie",
      foreingKey: "actor_id",
      otherKey: "movie_id",
      timestamps: false,
    });

    Actor.belongsToMany(models.Serie, {
      as: "series",
      through: "actor_serie",
      foreingKey: "actor_id",
      otherKey: "serie_id",
      timestamps: false,
    });

    Actor.belongsToMany(models.Character, {
      as: "characters",
      through: "actor_character",
      foreignKey: "actor_id",
      otherKey: "character_id",
      timestamps: false,
    });
  };

  return Actor;
};
