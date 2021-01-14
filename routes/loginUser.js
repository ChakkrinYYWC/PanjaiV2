const User = require('../model/user');
const jwtSecret = require('../config/jwtConfig');
const jwt = require('jsonwebtoken');
const passport  =require('passport');

module.exports =  app => {
    app.get('/loginUser', (req, res, next) => {
        passport.authenticate('login', (err, user, info) => {
            if(err) {
                consolr.log(err);
            }
            if(info !== undefined) {
                console.log(info.message);
                res.send(res.message);
            } else {
                req.logIn(user, err => {
                    User.findOne({
                        where: {
                            username: user.username,
                        },
                    }).then(user => {
                        const token = jwt.sign({ id: user.username }, jwtSecret.secret);
                        res.status(200).send({
                            auth: true,
                            token: token,
                            message: 'user found & logged in'
                        });
                    });
                });
            }
        })(req, res, next);
    });
};