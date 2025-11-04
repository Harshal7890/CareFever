const express = require("express");
const { getResultController } = require("../controller/ai.controller");

const router = express.Router();

router.get("/generate-remedy", getResultController);

module.exports = router;
