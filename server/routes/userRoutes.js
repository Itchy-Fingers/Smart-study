const express = require('express');
const router = express.Router();
const { createUserProfile, getUserProfile, getAllUsers, updateUserProfile } = require('../controllers/userController');
const { protect, authorize } = require('../middleware/auth');


//Routes
router.post('/create', protect, createUserProfile); // Create a new user profile
router.get('/profile', protect, getUserProfile); // Get a single user profile
router.get('/all', protect, authorize('admin'), getAllUsers); // Get all users (admin only)
router.put('/update', protect, updateUserProfile); // Update user profile


module.exports