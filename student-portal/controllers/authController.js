const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const users = require("../models/userModel");

// ===============================
// REGISTER
// ===============================
exports.register = async (req, res) => {
    try {
        const {
            userId,
            name,
            email,
            password,
            role,
            department
        } = req.body;

        // Check required fields
        if (
            !userId ||
            !name ||
            !email ||
            !password ||
            !role ||
            !department
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        // Check email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: "Invalid email format"
            });
        }

        // Check if email already exists
        const existingUser = users.find(
            user => user.email.toLowerCase() === email.toLowerCase()
        );

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "Email already registered"
            });
        }

        // Check if User ID already exists
        const existingUserId = users.find(
            user => user.userId === userId
        );

        if (existingUserId) {
            return res.status(409).json({
                success: false,
                message: "User ID already exists"
            });
        }

        // Validate role
        const validRoles = ["student", "faculty", "admin"];

        if (!validRoles.includes(role.toLowerCase())) {
            return res.status(400).json({
                success: false,
                message: "Role must be student, faculty, or admin"
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = {
            userId,
            name,
            email: email.toLowerCase(),
            password: hashedPassword,
            role: role.toLowerCase(),
            department
        };

        users.push(newUser);

        // Send response without password
        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: {
                userId: newUser.userId,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role,
                department: newUser.department
            }
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message
        });
    }
};


// ===============================
// LOGIN
// ===============================
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check required fields
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required"
            });
        }

        // Find user
        const user = users.find(
            user => user.email.toLowerCase() === email.toLowerCase()
        );

        // User not found
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        let passwordMatch = false;

        // Check whether password is already bcrypt hashed
        if (
            typeof user.password === "string" &&
            user.password.startsWith("$2")
        ) {
            passwordMatch = await bcrypt.compare(
                password,
                user.password
            );
        } else {
            // Support existing plain-text passwords
            // This allows your current userModel.js to work.
            passwordMatch = password === user.password;
        }

        // Wrong password
        if (!passwordMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        // Check JWT secret
        if (!process.env.JWT_SECRET) {
            return res.status(500).json({
                success: false,
                message: "JWT_SECRET is not configured"
            });
        }

        // Generate JWT
        const token = jwt.sign(
            {
                userId: user.userId,
                email: user.email,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES_IN || "1h"
            }
        );

        // Send token
        return res.status(200).json({
            success: true,
            message: "Login successful",
            token: token
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message
        });
    }
};


// ===============================
// GET PROFILE
// ===============================
exports.getProfile = (req, res) => {
    const user = users.find(
        user => user.userId === req.user.userId
    );

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    return res.status(200).json({
        success: true,
        profile: {
            userId: user.userId,
            name: user.name,
            email: user.email,
            role: user.role,
            department: user.department
        }
    });
};