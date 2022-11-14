module.exports = (sequelize, dataTypes) => {
  let alias = "Director";
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
    biography_link: {
      type: dataTypes.STRING(500),
      allowNull: false,
    },
  };

  let config = {
    timestamps: false,
    tableName: "directors",
  };

  const Director = sequelize.define(alias, cols, config);

  return Director;
};
