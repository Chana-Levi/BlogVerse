const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// ניתוב לפונקציות ב-Controller
router.get('/', postController.getAllPosts);
router.post('/', postController.createPost);
router.get('/:id', postController.getPostById);

module.exports = router;
