module.exports = app => {
  const attendance = require("../controllers/attendance.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", attendance.createAttendance);

  // Retrieve all attendances
  router.get("/", attendance.getAllAttendance);

  // Get one attendance
  router.get("/:id", attendance.getAttendanceById);
  
  //get attendance by user
  router.get("/:userId",attendance.getAttendanceForUser)

  //get attendance by formation
  router.get("/:formationId",attendance.getAttendanceForWorkshop)

  //get attendance by user
  router.get("/:creatorId",attendance.getWorkshopsByCreator)
  
  //update user
  router.put("/:id",attendance.updateAttendanceById)
  
  //delete user
  router.delete("/:id",attendance.deleteAttendanceById)

  app.use('/api/user', router);
};
