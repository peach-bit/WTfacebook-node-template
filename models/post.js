var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  message: { type: String},
  date: { type: Date, default: Date.now },
  comment: { type: String },

});
var Post = mongoose.model('Post', PostSchema);






module.exports = Post;
