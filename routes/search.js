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
var { PostPanjai } = require('../model/postPanjai')
var { PostFDT } = require('../model/postFDT')


server.get('/:word',async (req, res) => {
    const keyword = req.params.word
    //console.log('Search: '+keyword)
    let postTPJ = await PostPanjai.aggregate([
        {
            $addFields: {
                result: {
                    $regexMatch: {
                        input: "$title",
                        regex: keyword,
                        options: "i"
                    }
                }
            }
        },
        {
            $match: {
                "result" : true
            }
        },
    ])
    let postFDT = await PostFDT.aggregate([
        {
            $addFields: {
                result: {
                    $regexMatch: {
                        input: "$title",
                        regex: keyword,
                        options: "i"
                    }
                }
            }
        },
        {
            $match: {
                "result" : true
            }
        },
    ])

    const result = {postTPJ, postFDT}
    //console.log(result)
    res.send(result)
})

module.exports = server;