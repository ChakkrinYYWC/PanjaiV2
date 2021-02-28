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
var { PostPanjai } = require('../model/postPanjai')
var { PostFDT } = require('../model/postFDT');
const e = require("express");

/*-------------------------------------------------------------------------------*/
server.post('/favorite/:user',async function(req, res){
    console.log("User: " + req.params.user)
    const result = await user.findById(req.params.user, function(error,done){
        if (error) {
            console.log(error)
        } else {
            //console.log(done)
        }
    })
    user.find({}, function(error,done){
        if(error){
            console.log(error)
        } else {
            console.log(done)
        }
    })
    //console.log(result)
})

server.put('/123', function (req, res) {
    console.log('************************************')
    
    if (!ObjectID.isValid(req.params.id))
    return res.status(400).send('No record with given id : ' + req.params.id)

    var updatedUser = {
        phone: req.body.phone,
        address: req.body.address,
    }

    user.findByIdAndUpdate(req.params.id, { $set: updatedUser }, { new: true }, function(error,update){
        if(!error){
            res.send(update)
        }else{
            console.log('Error #3 : '+error)
        }
    })

});
/*-------------------------------------------------------------------------------*/
module.exports = server;