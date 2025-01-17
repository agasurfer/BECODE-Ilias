const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todo : String,
    priority: String
})

module.exports = mongoose.model('Todo', todoSchema)