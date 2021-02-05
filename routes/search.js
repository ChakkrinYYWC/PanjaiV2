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


server.get('/:word',async (req, res) => {
    const keyword = req.params.word
    console.log('Search: '+keyword)
    let response = await PostPanjai.aggregate([
        {
            $match: {
                "message" : keyword
            }
        }
    ])
    //let response = postPanjai.find()
    console.log(response)
    //res.send(response)
})

module.exports = server;