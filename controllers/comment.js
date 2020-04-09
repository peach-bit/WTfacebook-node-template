var Comment = require('../models/post');


var CommentController = {
  Index: function(req, res) {
    Comment.findById({}).exec(function(err, comment) {
      if (err) { throw err; }

      res.render('posts/index', { comment: comment });
    });
  },
  New: function(req, res) {
    res.render('posts/new', {});
  },
  Create: function(req, res) {
    var comment = new Comment(req.body);
    comment.save(function(err) {
      if (err) { throw err; }

      res.status(201).redirect('/posts');
      ///login
    });
  }
};


module.exports = CommentController;