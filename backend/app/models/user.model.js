const {DataTypes} = require("sequelize")

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('user', 'admin', 'formateur'),
      allowNull: false,
      defaultValue: 'admin',
    },
    cin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    directionEtService: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    entreprise: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return User;
};
