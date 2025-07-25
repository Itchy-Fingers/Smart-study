const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema ({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    startTime: { type: String, required: true }, // e.g., "10:00 AM"
    endTime: { type: String, required: true }, // e.g., "11:00 AM"
    reminder: { type: Boolean, default: false }, // whether to set a reminder
});

module.exports = mongoose.model('Schedule', scheduleSchema);