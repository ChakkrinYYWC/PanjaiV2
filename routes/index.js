const express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    passport = require('passport'),
    passportLocal = require('passport-local'),
    passportLocalMongoose = require('passport-local-mongoose'),
    methodOverride = require('method-override'),
    cors = require('cors'),
    axios = require('axios');
const router = require("./PostController"),
    server = express.Router();

const user = require('../model/user');
    

/*-------------------------------------------------------------------------------*/
server.get('/user',async (req, res)=>{
    let response = await user.find({})
    console.log(response)
    return res.send(response);
})
server.post("/login", passport.authenticate('local',{
    successRedirect: '/homepage',
    failureRedirect: '/login',
}))

// server.post('/login', function(req, res, next) {
//     passport.authenticate('local', function(err, user, info) {
//       if (err) { return next(err); }
//       if (!user) { return res.redirect('/login'); }
//       req.logIn(user, function(err) {
//         if (err) { return next(err); }
//         return res.redirect('/users/' + user.username);
//       });
//     })(req, res, next);
//   });

server.post("/register", function(req, res){
    console.log(req.body.content.name)
    if(req.body.password != req.body.CPassword){
        console.log("confirm password incorrect")
      //return res.redirect('/')
    }
    if (req.files === null) {
        return res.status(400).json({ msg: 'No file uploaded' });
    }
    const file = req.files.file;
    file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        }
        res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    });
    user.register(new user({username: req.body.username}), req.body.password,function(error, user){
        if(error){
            console.log(error);
          //return res.render('call back register')
        }

        passport.authenticate('local')(req,res,function(){
          //req.flash('success','Welcome to our website ,'+ user.username)
          //res.redirect('/')
        })
    })
})
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

module.exports = server;