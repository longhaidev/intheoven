const router = require("express").Router();
const userController = require("../controllers/userController");

router.post("/register", userController.createUser);
router.post("/login", userController.doLoginUser);

module.exports = router;
