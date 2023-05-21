const {DataTypes} = require("sequelize")

module.exports = (sequelize, Sequelize) => {
  const PreInscription = sequelize.define('preInscription', {
    preInscription_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  });

  return PreInscription;
};
