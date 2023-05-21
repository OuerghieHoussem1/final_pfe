const {DataTypes} = require("sequelize")

module.exports = (sequelize, Sequelize) => {
  const inscription = sequelize.define('inscription', {
    Inscription_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  });

  return inscription;
};
