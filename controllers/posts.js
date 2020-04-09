var Post = require('../models/post');

var PostsController = {
  Index: function(req, res) {
    Post.find({}).sort({date: -1}).exec(function(err, posts) {
      if (err) { throw err; }

      res.render('posts/index', { posts: posts });
    });
  },
  New: function(req, res ) {
    res.render('posts/new', { });
  },
  Create: function(req, res) {
    var post = new Post(req.body);
    post.save(function(err) {
      if (err) { throw err; }

      res.status(201).redirect('/posts');
      ///login
    });
  },
  /* Update: function(err, db) {
    if (err) throw err;
    var dbo = db.db("acebook");
    var myquery = { comment: String, };
    var newvalues = { $set: { comment: "" } };
    dbo.collection("posts").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
    
      res.status(201).redirect('/posts');
    });
  }, */
};



module.exports = PostsController;
