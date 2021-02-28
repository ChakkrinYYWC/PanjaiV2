const   mongoose = require('mongoose')

let notiSchema = new mongoose.Schema({
    owner : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    requester : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    notification : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "postPanjai",
    },
});

module.exports = mongoose.model('noti', notiSchema);