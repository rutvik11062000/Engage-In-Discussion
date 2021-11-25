const { model, Schema } = require('mongoose');

const commentSchema = new Schema({
  author_id: String,
  body: String,
  createdAt: String,
  reply_comment_count: Number,
  like_count: Number,
});

module.exports = model('Comment', commentSchema);