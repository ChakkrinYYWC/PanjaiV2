const   mongoose = require('mongoose')

let recieveSchema = new mongoose.Schema({
    to : String,
    owner : String,
    owner_contact : String,
    item : String,
});

module.exports = mongoose.model('recieve', recieveSchema);