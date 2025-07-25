const User = require("../models/user");

// Create a new user profile
exports.createUserProfile = async (req, res) => {
    try {
        const { userName, FullName, password, profilePicture, bio, Level, role } = req.body;
        const user = await User.create({
            userName: req.user.userName, // Assuming userName is in req.user
            FullName,
            password: req.user.password, // Assuming password is in req.user
            profilePicture,
            bio,
            Level,
            role
        });
        res.status(201).json(user);
    }
    catch (error) {
        res.status(500).json({ message: "Could not Create user", error });
    }
};


// Get a single user profile
exports.getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    }
    catch (err) {
        res.status(500).json({ message: "Server Error ", error });
    }
};

//Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password");
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch users", error });
    }
};


// Update user profile
exports.updateUserProfile = async (req, res) => {
    try {
        const { FullName, bio, level, profilePicture } = req.body;
        const updatedUser = await User.findByIdAndUpdate(
            req.user.id,
            { FullName, bio, level, profilePicture },
            { new: true}
        );

        res.status(200).json({success: true, user: updatedUser});
    } catch (error) {
        res.status(500).json({ success: false, message: "Update failed", error });
    }
};

// Delete user profile
exports.deleteUserProfile = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.user.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete the user", error });
    }
};

//Manage user roles
exports.manageUserRoles = async (req, res) => {
    try {
        const { userId, role } = req.body;
        const user = await User.findByIdAndUpdate(
            userId,
            { role },
            { new: true }
        );
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User role updated successfully", user });
    }
    catch (error) {
        res.status(500).json({ message: "Failed to update user role", error });
    }
};

// Change user password
exports.changeUserPassword = async (req, res) => {
    try {
        const { oldPassword, newPassword } = req.body;
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Old password is incorrect" });
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        await user.save();
        res.status(200).json({ message: "Password changed successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Failed to change password", error });
    }
};