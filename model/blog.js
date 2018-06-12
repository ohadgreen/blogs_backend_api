const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema({
    title: String,
    category: String,
    content: String
}, {
    timestamps: true
    });

module.exports = mongoose.model('blogs', BlogSchema);