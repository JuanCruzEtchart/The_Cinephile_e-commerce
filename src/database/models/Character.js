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
      unique: { args: true, msg: "El personaje ya fue creado!" },
    },
  };

  let config = {
    timestamps: false,
    tableName: "characters",
  };

  const Character = sequelize.define(alias, cols, config);

  Character.associate = (models) => {
    Character.belongsToMany(models.Product, {
      as: "products",
      through: "product_character",
      foreignKey: "character_id",
      otherKey: "product_id",
      timestamps: false,
    });

 /*    Character.hasMany(models.ProductActorCharacter, {
      as: "productCharacter",
      foreignKey: "character_id",
    }); */

    Character.belongsToMany(models.Product, {
      as: "product",
      through: "product_actor_character",
      foreignKey: "character_id",
      otherKey: "product_id",
      timestamps: false,
    });

    Character.belongsToMany(models.Actor, {
      as: "actor",
      through: "product_actor_character",
      foreignKey: "character_id",
      otherKey: "actor_id",
      timestamps: false,
    });

  };

  return Character;
};
