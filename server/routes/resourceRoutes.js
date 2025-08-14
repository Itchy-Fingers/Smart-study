const express = require('express');
const router = express.Router();
const { createResource, getAllResources } = require('../controllers/resourceController');
const { protect, authorize } = require('../middleware/auth');

// Resource routes 
router.post('/', protect, authorize(['teacher', 'admin', 'developer']), createResource);

router.get('/all', protect, getAllResources);


module.exports = router;
