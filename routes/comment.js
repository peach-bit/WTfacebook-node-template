var express = require('express');
var router = express.Router();

var CommentController = require('../controllers/comment')

router.get('/', CommentController.Index);
router.post('/', CommentController.Create);
router.get('/new', CommentController.New);

module.exports = router;
