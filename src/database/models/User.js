module.exports = (sequelize, dataTypes) => {
  let alias = "User";
  let cols = {
    id: {
      type: dataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: dataTypes.STRING(50),
      allowNull: false, //puede no estar el dato
    },
    email: {
      type: dataTypes.STRING(50),
      allowNull: false,
    },
    password: {
      type: dataTypes.STRING(500),
      allowNull: false,
    },
    admin_status: {
      type: dataTypes.INTEGER(1),
      allowNull: true,
    },
  };

  let config = {
    timestamps: false,
    tableName: "users",
  };

  const User = sequelize.define(alias, cols, config);

  User.associate = (models) => {
    User.belongsToMany(models.Product, {
      as: "cart",
      through: "user_cart",
      foreingKey: "id_user",
      otherKey: "id_product",
      timestamps: false,
    });
    User.belongsToMany(models.Product, {
      as: "favorites",
      through: "user_favorites",
      foreingKey: "id_user",
      otherKey: "id_product",
      timestamps: false,
    });
  };

  return User;
};
