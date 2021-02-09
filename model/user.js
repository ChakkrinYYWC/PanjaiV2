const   mongoose = require('mongoose'),
        passportLocalMongoose = require('passport-local-mongoose');

let userSchema = new mongoose.Schema({
    username : String,
    idcard : String,
    email : String,
    accessToken : String,
    favorite : Array
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('user', userSchema);