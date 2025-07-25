const express = require('express');
const router = express.Router();
const {
  createNewResource,
  getAllResources,
  getResourceById,
  updateResource,
  deleteResource
} = require('../controllers/resourceController');
const { protect, authorize } = require('../middleware/auth');

// Resource routes
router.post(
  '/',
  protect,
  authorize(['teacher', 'admin', 'developer']),
  createNewResource
);

router.get('/', protect, getAllResources);

router.get('/:resourceId', protect, getResourceById);

router.put(
  '/:resourceId',
  protect,
  authorize(['teacher', 'admin', 'developer']),
  updateResource
);

router.delete(
  '/:resourceId',
  protect,
  authorize(['teacher', 'admin', 'developer']),
  deleteResource
);

module.exports = router;
