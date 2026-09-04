const express = require("express");

const {
    register,
    login,
    getProfile
} = require("../controllers/authController");

const authenticateToken = require("../middleware/authMiddleware");

const router = express.Router();

// Register
router.post("/register", register);

// Login
router.post("/login", login);

// Profile - Protected
router.get("/profile", authenticateToken, getProfile);

module.exports = router;