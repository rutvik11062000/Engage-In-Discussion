const { model, Schema } = require('mongoose');

const postSchema = new Schema({
  author_id: String,
  title: String,
  body: String,
  createdAt: String,
  comment_count: Number,
  like_count: Number,
  view_count: Number,
  tags: {type: [String], index: true},
});

module.exports = model('Post', postSchema);