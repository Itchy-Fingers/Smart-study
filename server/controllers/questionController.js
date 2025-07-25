const Question = require('../models/question');
const Answer = require('../models/answer');

// Create new questions
exports.createNewQuestion = async (req, res) => {
    try {
        const { content, topic, level } = req.body;
        const author = req.user._id; // Assuming user ID is stored in req.user
        const question = new Question({
            content,
            topic,
            author,
            level,
        });
        await question.save();
        res.status(201).json({ message: 'Question created successfully', question });
    } catch (error) {
        console.error('Error creating question:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get all questions by topic
exports.getQuestionsByTopic = async (req, res) => {
    try {
        const { topic } = req.params;
        const questions = await Question.find({ topic })
        if (!question.length) {
            return res.status(404).json({ message: 'No questions found for this topic' });
        }
        res.status(200).json({ questions });
    } catch (error) {
        console.error('Error fetching questions by topic:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
// update questions
exports.updateQuestion = async (req, res) => {
    try {
        const { questionId } = req.params;
        const { content, topic, level } = req.body;
        const updatedQuestion = await Question.findByIdAndUpdate(
            questionId,
            { content, topic, level, updatedAt: Date.now() },
            { new: true }
        );
        if (!updatedQuestion) {
            return res.status(404).json({ message: 'Question not found' });
        }
        res.status(200).json({ message: 'Question updated successfully', question: updatedQuestion });
    } catch (error) {
        console.error('Error updating question:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Delete questions
exports.deleteQuestion = async (req, res) => {
    try {
        const { questionId } = req.params;
        const deletedQuestion = await Question.findByIdAndDelete(questionId);
        if (!deletedQuestion) {
            return res.status(404).json({ message: 'Question not found' });
        }
        // Optionally, delete all answers related to this question
        await Answer.deleteMany({ question: questionId });
        res.status(200).json({ message: 'Question and related answers deleted successfully' });
    } catch (error) {
        console.error('Error deleting question:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};