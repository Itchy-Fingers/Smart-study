const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    userName: { type: String, required: true, unique: true },
    FullName: { type: String, required: false },
    password: { type: String, required: true },
    bio: { type: String },
    level: { type: String }, 
    role: { type: String, enum: ["student", "developer", "admin", "teacher"], default: "student" }
});

module.exports = mongoose.model("user", userSchema);