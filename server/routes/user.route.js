const express = require("express");
const { userClerkController, saveProfileController } = require("../controller/user.controller");

const router = express.Router();

router.post("/clerk-user-webhook", userClerkController);
router.post("/save-profile", saveProfileController);

module.exports = router;
