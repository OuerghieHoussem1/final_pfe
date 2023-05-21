module.exports = app => {
    const formation = require("../controllers/formation.controller.js");
  
    var router = require("express").Router();

    // Retrieve all cycle
    router.get("/", formation.getAllFormations);

    router.post("/", formation.createFormation);

    /* // Create a new Tutorial
    router.post("/", cycle.createCycle);
  
    // Retrieve all cycle
    router.get("/", cycle.getAllCycles);
  
    // Get one user
    router.get("/:id", cycle.getCycleById);
 */
    // Get one user
    router.get("/cycle/:cycleId", formation.getAllFormationsByCycle);
    router.get("/:id", formation.getFormationById);
  
    //update user
    /* router.put("/:id",cycle.updateCycleById)
    
    //delete user
    router.delete("/:id",cycle.deleteCycleById) */
    
  
    app.use('/api/formations', router);
  };
  