module.exports = (sequelize, dataTypes) => {
  let alias = "Screenwriter";
  let cols = {
    id: {
      type: dataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },
    full_name: {
      type: dataTypes.STRING(100),
      allowNull: true,
      unique: { args: true, msg: "El guionista ya fue creado!" },
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
