const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Formation = sequelize.define('cycles', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    entreprise: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numAction: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    creditImport: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    droitTirageIN: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    droitTirageCo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    themeFormation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    modeFormation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lieuFormation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gouvernorat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateDebut: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    dateFin: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    heurDebut: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    heurFin: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    debutPause: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    finPause: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    numSalle: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Formation;
};