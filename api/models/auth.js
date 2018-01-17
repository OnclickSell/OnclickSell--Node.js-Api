

const db = require('../../database/config');
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

exports.signIn = (req, callback) => {
    const user = db("users").where('email', req.body.email ).select("*").asCallback((err, value) => callback(err, value))
}

exports.signUp = (req, callback) => {
    db('users').insert({

        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        profile_picture: 'fafsafsf',
        password: req.body.password,
        description:  req.body.description.replace(/</g, "&lt;").replace(/>/g, "&gt;")

    }).asCallback((err) => callback(err));       
}

exports.roles = (email, callback) => {
    const user = db('users').join('role_users', 'users.id', '=', 'role_users.user_id').join('roles', 'roles.id', '=', 'role_users.role_id').where('email', email).select('*').asCallback((err) => callback(err, user));       
}





