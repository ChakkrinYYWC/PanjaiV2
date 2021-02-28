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
    console.log('Search: '+keyword)
    let response1 = await PostPanjai.aggregate([
        {
            $match: {
                "message" : keyword
            }
        }
    ])
    //console.log(response1)
    let response2 = await PostFDT.aggregate([
        {
            $match: {
                "title" : keyword
            }
        }
    ])
    //console.log(response2)

    const result = {response1, response2}
    console.log(result)
})

module.exports = server;