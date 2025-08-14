const ForumPost = require('../models/forumPost');

// Create a new forum post/thread
exports.createPost = async (req, res) => {
    const post = await ForumPost.create({...req.body, owner: req.user.id});
    res.json(post)
};


// Get all forum posts
exports.getAllPosts = async (req, res) => {
    const posts = await ForumPost.find().populate("owner", "userName");
    res.json(posts)
};
