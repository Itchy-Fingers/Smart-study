const express = require('express');
const router = express.Router();
const {createPost, addComment, getAllPosts, getPostById} = require('../controllers/forumController');
const {protect} = require('../middleware/auth');


// Routes;
router.post('/create', protect, createPost);
router.post('/:postId/comment', protect, addComment);
router.get('/', protect, getAllPosts);
router.get('/:postId', protect, getPostById);


module.exports = router;