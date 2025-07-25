const mongoose = require('mongoose');


const resourceSchema = new mongoose.Schema({
    topic: { type: String, required: true },
    description: { type: String, required: true }, //brief summary
    url: { type: String, required: true }, //link to the resource file
    subject: {type: String, required:true}, 
    uploadedBy: {type:mongoose.Schema.Types.ObjectId, ref: 'User', required: true}, 
    level: {type: String, require:true},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Resource', resourceSchema);

