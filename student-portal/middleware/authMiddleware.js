const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    // Check if token is provided
    if (!authHeader) {
        return res.status(401).json({
            success: false,
            message: "Access denied. JWT token is required."
        });
    }

    // Check Bearer format
    if (!authHeader.startsWith("Bearer ")) {
        return res.status(401).json({
            success: false,
            message: "Invalid authorization format. Use Bearer <token>."
        });
    }

    const token = authHeader.split(" ")[1];

    try {
        // Verify JWT
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        // Store decoded user information
        req.user = decoded;

        next();

    } catch (error) {

        if (error.name === "TokenExpiredError") {
            return res.status(401).json({
                success: false,
                message: "JWT token has expired."
            });
        }

        return res.status(403).json({
            success: false,
            message: "Invalid JWT token."
        });
    }
};

module.exports = authenticateToken;