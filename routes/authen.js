const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require('passport');
const methodOverride = require('method-override');
const cors = require('cors');
const axios = require('axios');
const multer = require('multer');
const path = require('path');
const jwt = require('jsonwebtoken');

const server = express.Router();

//export files
const middleware = require('../middleware/mdw');
const jwtConfig = require("../config/jwtConfig");

//model
const user = require('../model/user');

const storage = multer.diskStorage({
    destination: './public/uploads/IDcard',
    filename: function(req, file, cb) {
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
const imageFilter = function(req, file, cb){
    var ext = path.extname(file.originalname);
    if(ext !== '.png' && ext !== '.gif' && ext !== '.jpg' && ext !== '.jpeg'){
        return cb(new Error('Only image is allowed'), false)
        }
        cb(null, true);
};
const upload = multer({storage: storage, fileFilter: imageFilter});

/*-------------------------------------------------------------------------------*/
// server.post('/isLogin',async (req, res)=>{
//         console.log(req.body.PanjaiToken)
//         if (req.body.PanjaiToken === undefined){
//             console.log("user didn't login")
//             res.send("noLogin")
//         } else {
//             user.find({accessToken: req.body.PanjaiToken}, function(err, found){
//                 if(err){
//                     console.log(err);
//                 } else {
//                     console.log("pass")
//                     res.send("pass")
//                 }
//             })
//         }
// })
/*-------------------------------------------------------------------------------*/
server.get('/login', (req, res) => {
    user.find((err, docs) => {
        if (!err)
            res.send(docs)
        else
            console.log('Error #1 : ' + JSON.stringify(err, undefined, 2))
    })
})

server.post("/login", function(req, res, next){
    //console.log('username: '+req.body.username)
    //console.log('password: '+req.body.password)
    //console.log('token: '+req.body.PanjaiToken)
    passport.authenticate('local', function(err, Userdata) {
        if (err) { 
            console.log(err)
            res.send(err); 
        }
        const token = jwt.sign({ id: Userdata.username }, jwtConfig.secret);
        //console.log("token: " + token)
        user.findByIdAndUpdate(Userdata, {accessToken:token}, function(error,update){
            if(error){
                console.log(error)
                res.send(err)
            }else{
                console.log("User logged in");
                res.send(update.accessToken)
            }
        })
    })(req, res, next);
})
// server.post('/login', function(req, res, next) {
//     console.log('username: '+ req.body.username)
//     passport.authenticate('local', function(err, user, info) {
//         if (err) { return next(err); }
//         if (!user) { return res.redirect('/login'); }
//         req.logIn(user, function(err) {
//             if (err) { return next(err); }
//             return res.redirect('/users/' + user.username);
//         });
//     })(req, res, next);
// });
/*-------------------------------------------------------------------------------*/
server.get('/register', (req, res) => {
    user.find((err, docs) => {
        if (!err)
            res.send(docs)
        else
            console.log('Error #1 : ' + JSON.stringify(err, undefined, 2))
    })
})
server.post("/register", upload.single('IDcard'), function(req, res){
    console.log('filename: '+req.file.filename)
    user.register(new user({username: req.body.username, idcard: req.file.filename, email: req.body.email, accessToken: null}), req.body.password,function(error, user){
        if(error){
            console.log(error);
            res.send(error)
        }

        passport.authenticate('local')(req,res,function(){
          //req.flash('success','Welcome to our website ,'+ user.username)
          //res.redirect('/')
            console.log('user created')
        })
    })
})
server.get("/regisimage/:idcard", function(req, res){
    res.sendFile(path.resolve(__dirname,'../public/uploads/IDcard/'+ req.params.idcard))
    //http://localhost:3001/authenticate/regisimage/IDcard-1609956164208.jpg
})
/*-------------------------------------------------------------------------------*/
server.put('/userUpdate', function (req, res) {
    const selectid = req.body.id;
    const newUsername = req.body.username;
    console.log(selectid)
    console.log(newUsername)
    user.findByIdAndUpdate(selectid, {username:newUsername}, function(error,update){
        if(error){
            console.log(error)
        }else{
            //res.redirect('/dinsor/'+req.params.id)
            //console.log(update)
            res.send({_id : selectid ,username:newUsername});
        }
    })
});
/*-------------------------------------------------------------------------------*/
server.delete('/userRemove/:id', function (req, res) {
    const selectid = req.params.id;
    console.log(selectid)
    user.findByIdAndDelete(selectid, function(error,remove){
        if(error){
            console.log(error)
        }else{
            //res.redirect('/dinsor/'+req.params.id)
            //console.log(update)
            res.send(remove);
        }
    })
});
/*-------------------------------------------------------------------------------*/
module.exports = server;