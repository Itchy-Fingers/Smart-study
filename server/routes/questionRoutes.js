const express = require('express');
const router = express.Router();
const {createNewQuestion, getQuestionsByTopic, updateQuestion, deleteQuestion} = require('../controllers/questionController');
const { protect, authorize } = require('../middleware/auth');

//Routes 
router.post('/', protect, authorize(['admin', 'teacher', 'developer']), createNewQuestion);
router.get('/:topic', protect, getQuestionsByTopic);
router.put('/:questionId', protect, authorize(['admin', 'teacher', 'developer']), updateQuestion);
router.delete('/:questionId', protect, authorize(['admin', 'teacher', 'developer']), deleteQuestion);

module.exports = router;