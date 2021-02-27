const express = require('express')
var router = express.Router()
var ObjectID = require('mongoose').Types.ObjectId
const fs = require('fs')
const multer = require('multer')
const path = require('path')
// const middleware = require('../middleware/index');

var { PostPanjai } = require('../model/postPanjai')
const user = require('../model/user');

const storage = multer.diskStorage({
    destination: './public/uploads/Too-Panjai',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const imageFilter = function (req, file, cb) {
    var ext = path.extname(file.originalname);
    if (ext !== '.png' && ext !== '.gif' && ext !== '.jpg' && ext !== '.jpeg') {
        return cb(new Error('Only image is allowed'), false)
    }
    cb(null, true);
};

const upload = multer({ storage: storage, fileFilter: imageFilter });

router.get('/', (req, res) => {
    PostPanjai.find({}, (err, docs) => {
        if (!err)
            res.send(docs)
        else
            console.log('Error #1 : ' + JSON.stringify(err, undefined, 2))
    })
})

router.post('/', upload.single('image'), (req, res) => {
    var newRecord = new PostPanjai({
        title: req.body.title,
        message: req.body.message,
        contect: req.body.contect,
        location: req.body.location,
        image: req.file.filename,
        creator : req.body.creator
    })
    console.log(newRecord)
    newRecord.save((err, docs) => {
        if (!err)
            res.send(docs)
        else
            console.log('Error #2 : ' + JSON.stringify(err, undefined, 2))
    })
})

router.put('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('No record with given id : ' + req.params.id)

    var updatedRecord = {
        title: req.body.title,
        message: req.body.message,
        contect: req.body.contect,
        location: req.body.location
    }

    PostPanjai.findByIdAndUpdate(req.params.id, { $set: updatedRecord }, { new: true }, (err, docs) => {
        if (!err)
            res.send(docs)
        else
            console.log('Error #3 : ' + JSON.stringify(err, undefined, 2))
    })
})

router.delete('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('No #4 : ' + req.params.id)

    PostPanjai.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err)
            res.send(docs)
        else
            console.log('Error #5 : ' + JSON.stringify(err, undefined, 2))
    })
})
router.post('/addFav/:id', (req, res) => {
    console.log("Post_id: "+req.params.id)
    console.log("currentuser_id: "+req.body.currentUser_id)
    // user.update(
    //     { _id: req.body.currentUser_id },
    //     { $addToSet: { favorite: req.params.id } }
    // )
    user.findByIdAndUpdate(req.body.currentUser_id, { $addToSet: { favorite: req.params.id } }, function(error,update){
        if(error){
            console.log(error)
        }else{
            res.redirect('/dinsor/'+req.params.id)
        }
    })
    // user.f({
    //     query: { id: req.body.currentUser_id },
    //     sort: { rating: 1 },
    //     update: { $inc: { favorite: req.params.id } }
    // })
    // user.insert({_id: req.body.currentUser_id}, {favorite: req.params.id }, function(err, doc){
    //     if (err) {
    //         console.log(err)
    //     } else {
    //         console.log(doc)
    //     }
    // });
    // user.save({ _id: req.body.currentUser_id },{favorite: req.params.id }, function(error,save){
    //     if (error){
    //         console.log(error)
    //     } else {
    //         console.log(save)
    //     }
    // })
})

module.exports = router