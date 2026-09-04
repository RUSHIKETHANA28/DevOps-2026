const express = require("express");

const {
    getStudents,
    getStudentById,
    updateStudent
} = require("../controllers/studentController");

const authenticateToken = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const router = express.Router();

// GET /students
router.get(
    "/students",
    authenticateToken,
    authorizeRoles("student", "faculty", "admin"),
    getStudents
);

// GET /students/:id
router.get(
    "/students/:id",
    authenticateToken,
    authorizeRoles("student", "faculty", "admin"),
    getStudentById
);

// PUT /students/:id
router.put(
    "/students/:id",
    authenticateToken,
    authorizeRoles("faculty", "admin"),
    updateStudent
);

module.exports = router;