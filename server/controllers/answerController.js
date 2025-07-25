const Answer = require('../models/answer');
const Question = require('../models/question');

// Saving user answer to a question
exports.saveAnswer = async (req, res) => {
    try {
        const { questionId, response } = req.body;
        const author = req.user._id; // Assuming req.user is populated with the authenticated user's info
        const answer = new Answer({
            question: questionId,
            author,
            response,
            respondedAt: new Date(),
            updatedAt: new Date()
        });
        await answer.save();
    } catch (error) {
        console.error('Error saving answer:', error);
    }
};

// Checking if the answer is correct
exports.checkAnswer = async (req, res) => {
    try {
        const { questionId, response } = req.body;
        const question = await Question.findById(questionId).populate('answers');
        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }
        const correctAnswer = question.answers.find(answer => answer.isCorrect);
        if (!correctAnswer) {
            return res.status(404).json({ message: 'No correct answer found for this question' });
        }
        const isCorrect = correctAnswer.response === response;
        res.status(200).json({ isCorrect });
    }
    catch (error) {
        console.error('Error checking answer:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Returning perfomance eg score
exports.getPerformance = async (req, res) => {
    try {
        const userId = req.user._id; // Assuming req.user is populated with the authenticated user's info
        const answers = await Answer.find({ author: userId }).populate('question');
        const performance = answers.map(answer => ({
            question: answer.question.title,
            response: answer.response,
            respondedAt: answer.respondedAt,
            isCorrect: answer.question.answers.some(a => a.isCorrect && a.response === answer.response)
        }));
        res.status(200).json(performance);
    } catch (error) {
        console.error('Error fetching performance:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};