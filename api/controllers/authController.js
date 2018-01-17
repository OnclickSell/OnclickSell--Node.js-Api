const authModel = require('../models/auth');
const validator = require('../../validators/check');
const createToken = require('../../packages/token');

// const v = require('node-input-validator');


// let validator = new v({}, {name:''}, {name:'required|minLength:5'});

// validator.check().then(function (matched) {
// 	console.log(matched);
// 	console.log(validator.errors);
// });

exports.signIn = (req, res, next) => {
    return validator.check(req.body, [
        '<email>required|email',
        '<password>required|password'
    ],
    function(message) {
        if(message.length >=1) {
            res.status(400).json({
                messgage: "Auth failed",
                description: message
            })
        } else {
            return authModel.signIn(req, (err, value) => {
                if(err) {
                    res.status(500).json({
                        status: "Failed",
                        code: 500,
                        message: "Something went wrong on the server. Try again",
                        result: []
                    })
                } else {
                    if (value[0].password === req.body.password) {
                        const token = createToken.tokener.issueToken(req.body.email);
                        res.status(200).json({
                            status: "OK",
                            code: 200,
                            messgage: 'Auth passed',
                            result: {
                                user: value,
                                token: token
                            },
                        })
                    } else {
                        res.status(400).json({
                            status: 'Failed',
                            code: 400,
                            messgage: "Auth failed",
                            message: 'Invalid entery',
                            result: {
                                error: message
                            }
                        })
                    }
                    
                }
            })
        }
    })
}

exports.signUp = (req, res, next) => {

    return validator.check(req.body, [
        '<email> |required|email|min:3|max:4|',
        '<password> |required|password|'
    ],
    function(message) {
        if(message.length >= 10) {
            res.status(400).json({
                status: 'Failed',
                code: 400,
                messgage: "invalid entery",
                result: {
                    error: message
                }
            })
        } else {
            return authModel.signUp(req, (err) => {
                if(err) {
                    res.status(500).json({
                        status: 'Error',
                        code: 500,
                        messgage: "Something went wrong on the server. Try again",
                        result: []
                    })
                } else {
                    const token = createToken.tokener.issueToken('safasfsfsaf');
                    res.status(200).json({
                        status: "OK",
                        code: 200,
                        messgage: 'You signed up successfully',
                        result: {
                            user: [],
                            token: token
                        }
                    })
                }
            })
        }
    })
}