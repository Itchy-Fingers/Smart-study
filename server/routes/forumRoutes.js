const express = require('express');
const router = express.Router();
const { createPost, getAllPosts } = require('../controllers/forumController');
const { protect } = require('../middleware/auth');


// Routes;
router.post('/create', protect, createPost);
router.get('/', protect, getAllPosts);


module.exports = router;