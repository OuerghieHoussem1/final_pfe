const express = require("express");
const cors = require("cors");
require("dotenv").config()


const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");


db.sequelize.sync()
.then(() => {
  console.log("Synced db.");
})
.catch((err) => {
  console.log("Failed to sync db: " + err.message);
});


//drop the table if it already exists
/* db.sequelize.sync({ force: true }).then(() => {
console.log("Drop and re-sync db.");
}); */

app.get("/", (req, res) => {
  res.json({ message: "Welcome to gestion formation." });
});




require("./app/routes/user.routes")(app);
require("./app/routes/cycle_formation.routes")(app);
require("./app/routes/attendance.routes")(app);
require("./app/routes/formation.routes")(app);



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
