const   mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose');

var PostFDT = mongoose.model('PostFDT',{
    title : String,
    message : String,
    Timestamp : { type: Date, default: Date.now },
    image: String,
    item: String,
    n_item: Number,
    category: String,
    promptpay: String
},'PostFDT')


module.exports = { PostFDT }