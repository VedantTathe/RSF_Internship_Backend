const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { getCurrentUserController } = require('../controllers/homeController')

router.get("/", authMiddleware, getCurrentUserController);

module.exports = router;
