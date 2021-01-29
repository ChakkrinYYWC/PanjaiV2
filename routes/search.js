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

//model
const user = require('../model/user');
const postPanjai = require('../model/postPanjai');


server.post('/:word',async (req, res) => {
    const keyword = req.params.word
    // let response = await postPanjai.aggregate([
    //     {
    //         $match: {
    //             "message" : keyword
    //         }
    //     },
    //     {
    //         $sort: {
    //             "Timestamp": -1
    //         }
    //     }
    // ])
    //let response = postPanjai.find()
    console.log(response)
    res.send(response)
})

server.post("/login", function(req, res, next){
    //console.log('username: '+req.body.username)
    //console.log('password: '+req.body.password)
    //console.log('token: '+req.body.PanjaiToken)
    passport.authenticate('local',async function(err, Userdata) {
        //console.log(Userdata)
        if (err) { 
            console.log(err)
            res.send(err); 
        }
        const  token =jwt.sign({ id: Userdata.username }, jwtConfig.secret);
        console.log("token: " + token)
        user.findByIdAndUpdate(Userdata, {accessToken:token},await function(error,update){
            if(error){
                console.log(error)
                res.send(err)
            }else{
                console.log("User logged in");
                const data = [token, Userdata.username, Userdata._id, Userdata.email]
                console.log(data)
                res.send(data)
            }
        })
    })(req, res, next);
})

module.exports = server;