const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Evaluation = sequelize.define('Evaluation', {
        evaluation: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      });

  return Evaluation;
};