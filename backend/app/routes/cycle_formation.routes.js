module.exports = app => {
  const cycle = require("../controllers/cycle_formation.controller.js");
  const preinscription = require("../controllers/preInscription.controller.js")
  const inscription = require("../controllers/inscription.controller.js")

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", cycle.createCycle);

  // Retrieve all cycle
  router.get("/", cycle.getAllCycles);

  // Get one user
  router.get("/:id", cycle.getCycleById);
  
  //update user
  router.put("/:id",cycle.updateCycleById)
  
  //delete user
  router.delete("/:id",cycle.deleteCycleById)
  
  router.post("/preinscription",preinscription.createPreInscription)
  router.post("/inscription",inscription.createInscription)
  

  app.use('/api/cycle', router);
};
