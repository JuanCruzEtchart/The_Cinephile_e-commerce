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
    Character.belongsToMany(models.Product, {
      as: "products",
      through: "product_character",
      foreignKey: "character_id",
      otherKey: "product_id",
      timestamps: false,
    });
  };

  return Character;
};
