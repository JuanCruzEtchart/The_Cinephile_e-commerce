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
      unique: { args: true, msg: "El actor ya fue creado!" },
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
    Actor.belongsToMany(models.Product, {
      as: "products",
      through: "actor_product",
      foreingKey: "actor_id",
      otherKey: "product_id",
      timestamps: false,
    });

    Actor.belongsToMany(models.Character, {
      as: "characters",
      through: "actor_character",
      foreignKey: "actor_id",
      otherKey: "character_id",
      timestamps: false,
    });

   /*  Actor.hasMany(models.ProductActorCharacter, {
      as: "productActor",
      foreignKey: "actor_id",
    }); */

    Actor.belongsToMany(models.Product, {
      as: "product",
      through: "product_actor_character",
      foreignKey: "actor_id",
      otherKey: "product_id",
      timestamps: false,
    });

    Actor.belongsToMany(models.Character, {
      as: "character",
      through: "product_actor_character",
      foreignKey: "actor_id",
      otherKey: "character_id",
      timestamps: false,
    });
  };

  return Actor;
};
