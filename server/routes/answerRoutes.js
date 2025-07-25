const express = require('express');
const router = express.Router();
const { saveAnswer, checkAnswer, getPerformance } = require('../controllers/answerController');
const { protect } = require('../middleware/auth');


// Routes
router.post('/save', protect, saveAnswer);
router.post('/check', protect, checkAnswer);
router.get('/performance/:userId', protect, getPerformance);



module.exports = router;