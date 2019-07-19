var mongoose = require('mongoose');
require ('../config/mongoose.js');

var QuoteSchema = new mongoose.Schema({
    quotes: {type: String, required: true}
})

var AuthorSchema = new mongoose.Schema({
    fullname: {type: String, required: true},
    quotes: [QuoteSchema]
})

mongoose.model('Quotes', QuoteSchema);
mongoose.model('Authors', AuthorSchema);

mongoose.Promise = global.Promise;