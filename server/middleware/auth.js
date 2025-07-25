const jwt = require("jsonwebtoken");

// Checks token
const protect = (req, res, next) => {
    const auth = req.headers.authorization;
    if (!auth || !auth.startsWith("Bearer ")) {
        return res.status(401).json({ message: "No Token Given" });
    }

    const token = auth.split(" ")[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // {id, role}
        next();
    } catch (error) {
        return res.status(403).json({ message: "Invalid token" });
    }
};

// Checks role
const authorize = (roles = []) => {
    // Ensure roles is always an array
    if (typeof roles === "string") roles = [roles];
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: "Forbidden" });
        }
        next();
    };
};

module.exports = { protect, authorize };