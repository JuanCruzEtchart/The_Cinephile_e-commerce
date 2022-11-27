module.exports = (sequelize, dataTypes) => {
  let alias = "Screenwriter";
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
    screenwriter_photo: {
      type: dataTypes.STRING(100),
      allowNull: true,
    },
  };

  let config = {
    timestamps: false,
    tableName: "screenwriters",
  };

  const Screenwriter = sequelize.define(alias, cols, config);

  return Screenwriter;
};
