const express = require('express');
const router = express.Router();
const { createSchedule, getAllSchedules, getScheduleById, updateSchedule, deleteSchedule } = require('../controllers/scheduleController');
const {protect} = require('../middleware/auth');

//Routes
router.post('/', protect, createSchedule); 
router.get('/', protect, getAllSchedules);
router.get('/:id', protect, getScheduleById);
router.put('/:id', protect, updateSchedule);
router.delete('/:id', protect, deleteSchedule);


module.exports = router;