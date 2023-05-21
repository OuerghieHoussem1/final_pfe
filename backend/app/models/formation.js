const {DataTypes} = require("sequelize")

module.exports = (sequelize, Sequelize) => {
  const Formation = sequelize.define('formation', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    }
  });

  return Formation;
};
