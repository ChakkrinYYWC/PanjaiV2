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

server.post("/login", async function (req, res, next) {
    //console.log('username: '+req.body.username)
    //console.log('password: '+req.body.password)
    //console.log('token: '+req.body.PanjaiToken)
    user.findOne({ username: req.body.username }, await function (error, found) {
        if (error) {
            console.log(error)
        } else {
            if (found.isbaned == "yes") {
                res.send("You are baned!")
            } else {
                passport.authenticate('local', async function (err, Userdata) {
                    //console.log(Userdata)
                    if (err) {
                        console.log(err)
                        res.send(err);
                    }
                    const token = jwt.sign({ id: Userdata.username }, jwtConfig.secret);
                    //console.log("token: " + token)
                    user.findByIdAndUpdate(Userdata, { accessToken: token }, await function (error, update) {
                        if (error) {
                            console.log(error)
                            res.send(error)
                        } else {
                            //console.log("User logged in");
                            const data = [token, Userdata.username, Userdata._id, Userdata.email, Userdata.address, Userdata.phone, Userdata.name]
                            //console.log(data)
                            res.send(data)
                        }
                    })
                    let result = await user.aggregate([
                        {
                            $match: {
                                "username": req.body.username
                            }
                        },
                    ])
                    const nowDay = new Date();
                    if (result[0].month !== nowDay.getMonth() + 1 || result[0].year !== nowDay.getFullYear()) {
                        user.findByIdAndUpdate(Userdata, { month: nowDay.getMonth() + 1, year: nowDay.getFullYear(), piece_available: 4 }, await function (error, update) {
                            if (error) {
                                console.log(error)
                            } else {
                                console.log("=====piece_available Update!!=====")
                            }
                        })
                    }
                })(req, res, next);
            }
        }
    })
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
server.post('/logout', (req, res) => {
    //console.log("currentUser: "+req.body.currentUser_id)
    passport.authenticate('local', function (err, Userdata) {
        if (err) {
            console.log(err)
            res.send(err);
        }
        //console.log("token: " + token)
        user.findByIdAndUpdate(req.body.currentUser_id, { accessToken: null }, function (error, update) {
            if (error) {
                console.log(error)
                res.send(error)
            } else {
                //console.log(update)
                console.log("User logged out");
                res.sendStatus(200)
            }
        })
    })(req, res);
    // user.findByIdAndUpdate(_id: req.body.user_id , {accessToken: null}, function(error,update){
    //     if(error){
    //         console.log(error)
    //         res.send(err)
    //     }else{
    //         console.log(update)
    //         console.log("User logged out");
    //         res.send("User logout")
    //     }
    // })
})
/*-------------------------------------------------------------------------------*/
server.get('/register', (req, res) => {
    user.find((err, docs) => {
        if (!err)
            res.send(docs)
        else
            console.log('Error #1 : ' + JSON.stringify(err, undefined, 2))
    })
})
server.post("/register", upload.single('IDcard'), function (req, res) {
    console.log('filename: ' + req.file.filename)
    user.register(new user({ name: req.body.name, username: req.body.username, idcard: req.file.filename, email: req.body.email, address: req.body.address, phone: req.body.phone, coin: 0, accessToken: null, isbaned: "no", month: req.body.month, year: req.body.year, piece_available: 4 }), req.body.password, function (error, user) {
        if (error) {
            console.log("error: " + error);
            res.send(error)
        } else {
            console.log('user created')
            res.send(status)
        }

        passport.authenticate('local')(req, res, function () {
            //req.flash('success','Welcome to our website ,'+ user.username)
            //res.redirect('/')
        })
    })
})
server.get("/regisimage/:idcard", function (req, res) {
    res.sendFile(path.resolve(__dirname, '../public/uploads/IDcard/' + req.params.idcard))
    //http://localhost:3001/authenticate/regisimage/IDcard-1609956164208.jpg
})
/*-------------------------------------------------------------------------------*/
server.get("/banUser/:id", function (req, res) {
    console.log(req.params.id)
    user.findByIdAndUpdate(req.params.id, { isbaned: "yes" }, function (error, update) {
        if (error) {
            console.log(error)
            res.send(error)
        } else {
            //console.log(update)
            console.log("User Baned");
            res.sendStatus(200)
        }
    })
})
/*-------------------------------------------------------------------------------*/
server.get("/unBanUser/:id", function (req, res) {
    console.log(req.params.id)
    user.findByIdAndUpdate(req.params.id, { isbaned: "no" }, function (error, update) {
        if (error) {
            console.log(error)
            res.send(error)
        } else {
            //console.log(update)
            console.log("User unbaned");
            res.sendStatus(200)
        }
    })
})
/*-------------------------------------------------------------------------------*/
// server.put('/userUpdate', function (req, res) {
//     const selectid = req.body.id;
//     const newUsername = req.body.username;
//     console.log(selectid)
//     console.log(newUsername)
//     user.findByIdAndUpdate(selectid, {username:newUsername}, function(error,update){
//         if(error){
//             console.log(error)
//         }else{
//             //res.redirect('/dinsor/'+req.params.id)
//             //console.log(update)
//             res.send({_id : selectid ,username:newUsername});
//         }
//     })
// });
/*-------------------------------------------------------------------------------*/
// server.delete('/userRemove/:id', function (req, res) {
//     const selectid = req.params.id;
//     console.log(selectid)
//     user.findByIdAndDelete(selectid, function(error,remove){
//         if(error){
//             console.log(error)
//         }else{
//             //res.redirect('/dinsor/'+req.params.id)
//             //console.log(update)
//             res.send(remove);
//         }
//     })
// });
/*-------------------------------------------------------------------------------*/
server.post('/information/:id', (req, res) => {

    user.findById(req.params.id, (err, docs) => {
        if (!err) {
            //console.log(docs)
            res.send(docs)
        }
        else
            console.log('Error #1 : ' + JSON.stringify(err, undefined, 2))
    })
})
/*-------------------------------------------------------------------------------*/
server.post('/mycoin/:id', (req, res) => {
    console.log('***')
    console.log(req.params.id)
    console.log(req.body.newcoin)

    const newData = user.findByIdAndUpdate(req.params.id, { coin: req.body.newcoin }, (err, docs) => {
        if (!err) {
            //console.log(docs)
            //res.send(docs)
        }
        else
            console.log('Error #1 : ' + JSON.stringify(err, undefined, 2))
    })

    //console.log(update._update.coin)
    res.send(newData._update)

})
/*-------------------------------------------------------------------------------*/
module.exports = server;