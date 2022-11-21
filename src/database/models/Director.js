module.exports = (sequelize, dataTypes) => {
  let alias = "Director";
  let cols = {
    id: {
      type: dataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
    },
    full_name: {
      type: dataTypes.STRING(100),
      allowNull: true,
    },
    biography_link: {
      type: dataTypes.STRING(500),
      allowNull: true,
    },
    directors_photo: {
      type: dataTypes.BLOB("medium"),
      allowNull: true,
    },
  };

  let config = {
    timestamps: false,
    tableName: "directors",
  };

  const Director = sequelize.define(alias, cols, config);

  return Director;
};
