module.exports = app => {
  const formation = require("../controllers/formation.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", formation.createWorkshop);

  // Retrieve all formation
  router.get("/", formation.getAllWorkshops);

  // Get one user
  router.get("/:id", formation.getWorkshopById);

  //update user
  router.put("/:id",formation.updateWorkshopById)
  
  //delete user
  router.delete("/:id",formation.deleteWorkshopById)
  

  app.use('/api/formation', router);
};
