const users = require("../models/userModel");

// ==========================================
// GET ALL STUDENTS
// ==========================================
exports.getStudents = (req, res) => {

    const students = users
        .filter(user => user.role === "student")
        .map(user => ({
            userId: user.userId,
            name: user.name,
            email: user.email,
            department: user.department
        }));

    res.status(200).json({
        success: true,
        count: students.length,
        students: students
    });
};


// ==========================================
// GET STUDENT BY ID
// ==========================================
exports.getStudentById = (req, res) => {

    const { id } = req.params;

    const student = users.find(
        user => user.userId === id && user.role === "student"
    );

    if (!student) {
        return res.status(404).json({
            success: false,
            message: "Student not found."
        });
    }

    res.status(200).json({
        success: true,
        student: {
            userId: student.userId,
            name: student.name,
            email: student.email,
            role: student.role,
            department: student.department
        }
    });
};


// ==========================================
// UPDATE STUDENT
// ==========================================
exports.updateStudent = (req, res) => {

    const { id } = req.params;

    const student = users.find(
        user => user.userId === id && user.role === "student"
    );

    if (!student) {
        return res.status(404).json({
            success: false,
            message: "Student not found."
        });
    }

    const {
        name,
        email,
        department
    } = req.body;


    // Update name
    if (name) {
        student.name = name;
    }


    // Update email
    if (email) {

        const emailExists = users.find(
            user =>
                user.email === email.toLowerCase() &&
                user.userId !== id
        );

        if (emailExists) {
            return res.status(409).json({
                success: false,
                message: "Email already exists."
            });
        }

        student.email = email.toLowerCase();
    }


    // Update department
    if (department) {
        student.department = department;
    }


    res.status(200).json({
        success: true,
        message: "Student information updated successfully.",
        student: {
            userId: student.userId,
            name: student.name,
            email: student.email,
            role: student.role,
            department: student.department
        }
    });
};


// ==========================================
// DELETE STUDENT
// ==========================================
exports.deleteStudent = (req, res) => {

    const { id } = req.params;

    const index = users.findIndex(
        user => user.userId === id && user.role === "student"
    );

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Student not found."
        });
    }

    users.splice(index, 1);

    res.status(200).json({
        success: true,
        message: "Student deleted successfully."
    });
};