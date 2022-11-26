module.exports = (sequelize, dataTypes) => {
  let alias = "Character";
  let cols = {
    id: {
      type: dataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING(100),
      allowNull: true,
    },
  };

  let config = {
    timestamps: false,
    tableName: "characters",
  };

  const Character = sequelize.define(alias, cols, config);

  Character.associate = (models) => {
    Character.belongsToMany(models.Movie, {
      as: "movies",
      through: "movie_character",
      foreignKey: "character_id",
      otherKey: "movie_id",
      timestamps: false,
    });

    Character.belongsToMany(models.Serie, {
      as: "series",
      through: "serie_character",
      foreignKey: "character_id",
      otherKey: "serie_id",
      timestamps: false,
    });
  };

  return Character;
};
