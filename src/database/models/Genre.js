module.exports = (sequelize, dataTypes) => {
  let alias = "Genre";
  let cols = {
    id: {
      type: dataTypes.INTEGER(10),
      primarKey: true,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
  };

  let config = {
    timestamps: false,
    tableName: "genres",
  };

  const Genre = sequelize.define(alias, cols, config);

  return Genre;
};
