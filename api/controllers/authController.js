

const authModel = require('../models/auth');
const validator = require('../../validators/check');
const createToken = require('../../packages/token');
const bcrypt = require('bcrypt');



/*
|--------------------------------------------------------------------------
| Application Name
|--------------------------------------------------------------------------
|
| This value is the name of your application. This value is used when the
| framework needs to place the application's name in a notification or
| any other location as required by the application or its packages.
|
*/

exports.signIn = (req, res, next) => {
    return validator.check(req.body, [
        {
            field: 'email',
            rules: 'required|email|min:3'
        },
        {
            field: 'password',
            rules: 'required|min:2|password'
        }
    ])
    .then(value => {
        return authModel.signIn(req).then(value => {
            bcrypt.compare(req.body.password, value[0].password)
            .then(result => {
                const token = createToken.tokener.issueToken(req.body.email);
                res.status(200).json({
                    status: "OK",
                    code: 200,
                    messgage: 'Auth passed',
                    result: {
                        user: {
                            full_name: value[0].full_name,
                            email: value[0].email,
                            description: value[0].description,
                            profile_picture: value[0].profile_picture
                        },
                        token: token
                    },
                })
            }).catch(err => {
                res.status(400).json({
                    status: 'Failed',
                    code: 400,
                    messgage: "Auth failed",
                    message: 'Invalid entery',
                    result: {
                        error: err
                    }
                })
            })           
        }).catch(err => {
            res.status(404).json({
                status: "Failed",
                code: 500,
                message: err,
                result: []
            })
        })
    }).catch(err => {
        res.status(400).json({
            messgage: "Auth failed",
            description: err
        })
    })
}

/*
|--------------------------------------------------------------------------
| Application Name
|--------------------------------------------------------------------------
|
| This value is the name of your application. This value is used when the
| framework needs to place the application's name in a notification or
| any other location as required by the application or its packages.
|
*/

exports.signUp = (req, res, next) => {

    return validator.check(req.body, [
        {
            field: 'email',
            rules: 'required|email|min:3'
        },
        {
            field: 'password',
            rules: 'required|min:2|password'
        }
    ]).then(value => {
        return authModel.signUp(req, (err, value) => {
            console.log(err)
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
                        user: value,
                        token: token
                    }
                })
            }
        })
    }).catch(err => {
        res.status(400).json({
            status: 'Failed',
            code: 400,
            messgage: "invalid entery",
            result: {
                error: err
            }
        })
    })
}

/*
|--------------------------------------------------------------------------
| Application Name
|--------------------------------------------------------------------------
|
| This value is the name of your application. This value is used when the
| framework needs to place the application's name in a notification or
| any other location as required by the application or its packages.
|
*/

exports.emailCheck = (req, res, next) => {

    return validator.check(req.body, [
    ],
    function(result) {
        if(result.length > 10) {
            res.status(400).json({
                status: 'Failed',
                code: 400,
                messgage: "The provided email address already exists",
                result: {
                    email: req.query.email
                }
            })
        } else {
            return authModel.emailCheck(req.query.email, (err, value) => {
                if(err) {
                    res.status(500).json({
                        status: 'Error',
                        code: 500,
                        messgage: "Something went wrong on the server. Try again",
                        result: []
                    })
                } else {
                    console.log(value.length)
                    if (value.length !== 0) {
                        res.status(400).json({
                            status: 'Failed',
                            code: 400,
                            messgage: "The provided email address already exists",
                            result: {
                                email: req.query.email
                            }
                        })
                    } else {
                        res.status(200).json({
                            status: "OK",
                            code: 200,
                            messgage: 'The email address is valid',
                            result: {
                                email: req.query.email
                            }
                        })
                    }
                }
            })
        }
    })
}