const   mongoose = require('mongoose')

var PostPanjai = mongoose.model('PostPanjai',{
    title : String,
    message : String,
    Timestamp : { type: Date, default: Date.now },
    image: String,
    contect: String,
    location:String,
    creator: {
        id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user'
        },
        username: String
    }
},'PostPanjai')

// hi bro
module.exports = { PostPanjai }