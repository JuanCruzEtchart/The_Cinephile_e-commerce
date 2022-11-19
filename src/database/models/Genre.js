module.exports = (sequelize, dataTypes) => {
  let alias = "Genre";
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
    tableName: "genres",
  };

  const Genre = sequelize.define(alias, cols, config);

  return Genre;
};
