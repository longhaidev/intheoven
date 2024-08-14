const router = require("express").Router();
const authController = require("@controllers/authController");
const middlewareController = require("@controllers/middlewareController");
// authentication
router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);
router.post("/refresh-token", authController.refreshToken);
router.post(
  "/logout",
  middlewareController.verifyToken,
  authController.logoutUser
);
module.exports = router;
