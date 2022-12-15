module.exports = (sequelize, dataTypes) => {
  let alias = "ProductActorCharacter";
  let cols = {
    id: {
      type: dataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: dataTypes.INTEGER(11),
      allowNull: true,
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
    tableName: "product_actor_character",
  };

  const ProductActorCharacter = sequelize.define(alias, cols, config);

/*   ProductActorCharacter.associate = (models) => {
    ProductActorCharacter.belongsTo(models.Product, {
      as: "product",
      foreignKey: "product_id",
    });

    ProductActorCharacter.belongsTo(models.Actor, {
      as: "actors",
      foreignKey: "actor_id",
    });

    ProductActorCharacter.belongsTo(models.Character, {
      as: "characters",
      foreignKey: "character_id",
    });
  }; */

  return ProductActorCharacter;
};
