const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const User = require("../models/User");

router.get("/", authMiddleware,getCurrentUserController);

module.exports = router;
