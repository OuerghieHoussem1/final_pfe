const {DataTypes} = require("sequelize")

module.exports = (sequelize, Sequelize) => {
  const Attendance = sequelize.define('Attendance', {
    attendance_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  });

  return Attendance;
};
