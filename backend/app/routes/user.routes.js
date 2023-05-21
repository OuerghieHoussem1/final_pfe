module.exports = app => {
  const user = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // signup
  router.post("/signup", user.createUser);
  
  // login
  router.post("/login", user.login);

  // Retrieve all user
  router.get("/", user.getAllUsers);

  // Get one user
  router.get("/:id", user.getUserById);

  //update user
  router.put("/:id",user.updateUserById)
  
  //delete user
  router.delete("/:id",user.deleteUserById)
  
  app.use('/api/auth', router);
};
