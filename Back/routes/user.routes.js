const Router = require("express");
const router = new Router();
const userController = require("../controllers/user.controller");

router.post("/signUp", userController.signUp);
router.post("/signIn", userController.signIn);
router.post("/addGame", userController.addGame);

module.exports = router;
