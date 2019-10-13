var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
    title: { type: String,required: true },
    content: { type: String,required: true },
    date: { type: String,required: true },
    view: { type: Number,required: true},
    start: { type: Number,required: true},
    tag: [String]
});

exports.article = mongoose.model('article',articleSchema);