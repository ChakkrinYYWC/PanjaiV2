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
    // const result = await user.findById(req.params.user, function(error,done){
    //     if (error) {
    //         console.log(error)
    //     } else {
    //         console.log(done)
    //     }
    // })
    let result = await user.aggregate([
        {
            $match: {
                _id : mongoose.Types.ObjectId(req.params.user)
            }
        },
        {
            $lookup:
            {
                localField: "favorite",
                from: "PostPanjai",
                foreignField: "_id",
                as: "favorite"
            }
        },
    ])
    console.log(result[0].favorite)
    res.send(result[0].favorite)
})
/*-------------------------------------------------------------------------------*/
module.exports = server;