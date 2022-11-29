module.exports = (sequelize, dataTypes) => {
  let alias = "ActorCharacter";
  let cols = {
    id: {
      type: dataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },
    actor_id: {
      type: dataTypes.INTEGER(11),
      allowNull: true,
    },
    character_id: {
      type: dataTypes.INTEGER(11),
      allowNull: true,
    },
  };

  let config = {
    timestamps: false,
    tableName: "actor_character",
  };

  const ActorCharacter = sequelize.define(alias, cols, config);

  return ActorCharacter;
};
