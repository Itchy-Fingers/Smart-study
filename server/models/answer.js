const mongoose = require('mongoose');


const answerSchema = new mongoose.Schema({
    question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    response: { type: String, required: true },
    respondedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Answer', answerSchema);
