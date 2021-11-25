const { model, Schema } = require('mongoose');

const tagSchema = new Schema({
    _id: String,
    used_count: Number
})

module.exports = model('Tag', tagSchema );
