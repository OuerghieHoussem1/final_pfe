const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

const users = require("./user.model.js")(sequelize, Sequelize);
const formations = require("./formation.model.js")(sequelize, Sequelize);
const attendance = require("./attendance.model.js")(sequelize, Sequelize);

users.belongsToMany(formations, { through: attendance });
formations.belongsToMany(users, { through: attendance });

formations.belongsTo(users, { as: 'creator' });


db.Users = users
db.Formations = formations
db.Attendance = attendance

module.exports = db;
