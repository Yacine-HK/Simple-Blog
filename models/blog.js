const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    body: {
        type: String,
        required: true,
        trim: true
    },
    edited: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })


const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog
