const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const authenticateToken = require('../middleware/authMiddleware');

router.get('/', postController.getAllPosts);
router.post('/', authenticateToken, postController.createPost);
router.get('/:id', postController.getPostById);
router.post('/summarize', postController.summarizePost);

module.exports = router;
