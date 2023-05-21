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
const cycle_formations = require("./cycle_formation.model.js")(sequelize, Sequelize);
const attendance = require("./attendance.model.js")(sequelize, Sequelize);
const preInscription = require("./preInscription.model.js")(sequelize, Sequelize);
const inscription = require("./inscription.model.js")(sequelize, Sequelize);
const formation = require("./formation.js")(sequelize,Sequelize)

users.belongsToMany(cycle_formations, { through: preInscription });
cycle_formations.belongsToMany(users, { through: preInscription });

users.belongsToMany(cycle_formations, { through: inscription });
cycle_formations.belongsToMany(users, { through: inscription });

users.belongsToMany(formation, { through: attendance });
formation.belongsToMany(users, { through: attendance });


cycle_formations.belongsTo(users, { as: 'creator' });
formation.belongsTo(cycle_formations, { as: 'partOf' });


db.Users = users
db.Cycle_formations = cycle_formations
db.formation = formation
db.Attendance = attendance
db.PreInscription = preInscription
db.Inscription = inscription

module.exports = db;
