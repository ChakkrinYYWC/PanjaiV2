// const   mongoose = require('mongoose');

// let reportSchema = new mongoose.Schema({
//     report : {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "postPanjai"
//     },
// });

// module.exports = mongoose.model('Report', reportSchema);
const   mongoose = require('mongoose')

var Report = mongoose.model('Report',{
    report : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "postPanjai"
    },
},'Report')

module.exports = { Report }