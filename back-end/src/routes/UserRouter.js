const router = require("express").Router();
const userController = require("@controllers/userController");
const middlewareController = require("@controllers/middlewareController");
router.get("/all", middlewareController.verifyToken, userController.getAllUser);
router.delete(
  "/delete/:id",
  middlewareController.verifyTokenAndIsAdmin,
  userController.deleteUser
);

module.exports = router;
