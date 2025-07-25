const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    userName: { type: String, required: true, unique: true },
    FullName: { type: String, required: true },
    password: { type: String, required: true },
    profilePicture: { type: String, default: "" },
    bio: { type: String, default: "" },
    Level: { type: String }, 
    role: { type: String, enum: ["student", "developer", "admin", "teacher"], default: "student" }
});

module.exports = mongoose.model("user", userSchema);