const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    image: String,
    caption: String
})

const posts = mongoose.model('posts',postSchema)
module.exports = posts