const ForumPost = require('../models/forumPost');

// Create a new forum post/thread
exports.createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const userId = req.user._id; // Assuming user ID is stored in req.user
        const post = await ForumPost.create({
            title,
            content,
            author:userId
        });
        res.status(201).json(post);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to create post", error });
    }
};

// Add a comment to a post
exports.addComment = async (req, res) => {
    try {
        const { postId} = req.params;
        const {comment} = req.body;
        const post = await ForumPost.findById(postId);
        post.comments.push({
            content: comment,
            author: req.user._id
        });
        await post.save();
        res.status(200).json(post);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to add comment", error });
    }
};

// Get all forum posts
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await ForumPost.find().populate('author', 'userName').populate('comments.author', 'userName');
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch posts", error });
    }
};

// Get a single post 
exports.getPostById = async (req, res) => {
    try {
        const post = await ForumPost.findById(req.params.id).populate('author', 'userName').populate('comments.author', 'userName');
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch post", error });
    }
};

