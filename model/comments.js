'use strict'

var mongoose = require('mongoose');
const { Schema } = mongoose;

//Create new instance of schema
var CommentsSchema = new Schema ({
    author: String,
    text: String
});

module.exports = mongoose.model('Comment', CommentsSchema);