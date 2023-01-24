module.exports = (sequelize, dataTypes) => {
  let alias = "User";
  let cols = {
    id: {
      type: dataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING(50),
      allowNull: true,
    },
    surname: {
      type: dataTypes.STRING(50),
      allowNull: true,
    },
    email: {
      type: dataTypes.STRING(50),
      allowNull: true,
    },
    password: {
      type: dataTypes.STRING(400),
      allowNull: true,
    },
    phone_number: {
      type: dataTypes.STRING(30),
      allowNull: true,
    },
    birthdate: {
      type: dataTypes.DATEONLY,
      allowNull: true,
    },
    genre1_id: {
      type: dataTypes.INTEGER(10),
      allowNull: true,
      foreignKey: true,
    },
    genre2_id: {
      type: dataTypes.INTEGER(10),
      allowNull: true,
      foreignKey: true,
    },
    user_photo: {
      type: dataTypes.STRING(100),
      allowNull: true,
      foreignKey: true,
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

    User.belongsTo(models.Genre, {
      as: "genre1",
      foreignKey: "genre1_id",
    });

    User.belongsTo(models.Genre, {
      as: "genre2",
      foreignKey: "genre2_id",
    });

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
