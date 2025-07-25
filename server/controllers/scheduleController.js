const Schedule = require('../models/schedule');


// Create a new schedule
exports.createSchedule = async (req, res) => {
    try {
        const { title, description, date, time, location } = req.body;
        const userId = req.user._id; // Assuming user ID is stored in req.user

        const schedule = await Schedule.create({
            title,
            description,
            date,
            startTime:time,
            endTime: time,
            owner:userId
        });

        res.status(201).json(schedule);
    } catch (error) {
        res.status(500).json({ message: "Error creating schedule", error });
    }
};


// Get all schedules

exports.getAllSchedules = async (req, res) => {
    try {
        const schedules = await Schedule.find().populate('userId', 'userName');
        res.status(200).json(schedules);
    } catch (error) {
        res.status(500).json({ message: "Error fetching schedules", error });
    }
}

// Get a schedule by ID
exports.getScheduleById = async (req, res) => {
    try {
        const schedule = await Schedule.findById(req.params.id).populate('userId', 'userName');
        if (!schedule) {
            return res.status(404).json({ message: "Schedule not found" });
        }
        res.status(200).json(schedule);
    } catch (error) {
        res.status(500).json({ message: "Error fetching schedule", error });
    }
}

// Update a schedule
exports.updateSchedule = async (req, res) => {
    try {
        const { title, description, date, startTime, endTime } = req.body;
        const schedule = await Schedule.findByIdAndUpdate(
            req.params.id,
            { title, description, date, startTime, endTime},
            { new: true }
        );

        if (!schedule) {
            return res.status(404).json({ message: "Schedule not found" });
        }

        res.status(200).json(schedule);
    } catch (error) {
        res.status(500).json({ message: "Error updating schedule", error });
    }
}

// Delete a schedule
exports.deleteSchedule = async (req, res) => {
    try {
        const schedule = await Schedule.findByIdAndDelete(req.params.id);
        if (!schedule) {
            return res.status(404).json({ message: "Schedule not found" });
        }
        res.status(200).json({ message: "Schedule deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting schedule", error });
    }
}

// Get schedules by user ID
exports. getSchedulesByUserId = async (req, res) => {
    try {
        const userId = req.params.userId;
        const schedules = await Schedule.find({ userId }).populate('userId', 'userName');
        
        if (schedules.length === 0) {
            return res.status(404).json({ message: "No schedules found for this user" });
        }
        
        res.status(200).json(schedules);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user's schedules", error });
    }
}
