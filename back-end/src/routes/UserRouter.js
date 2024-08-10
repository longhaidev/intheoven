const router = require("express").Router();
const userController = require("@controllers/userController");

router.post("/register", userController.createUser);
router.post("/login", userController.doLoginUser);
router.put("/profile/:id", userController.doUpdateUser);

module.exports = router;
