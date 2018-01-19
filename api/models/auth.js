


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
    return new Promise((resolve, reject) => {
        db("users").where('email', req.body.email ).select("*")
        .then(value => {
            return (value.length > 0 ? resolve(value) : reject('The user does not exist'))
        }).catch('Something went wrong')
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

exports.signUp = (req, callback) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if(err) {
            callback(err, '')
        } else {
            db('users').returning('id').insert({

                full_name: req.body.fullName,
                email: req.body.email,
                profile_picture: req.body.profile_picture,
                age: req.body.age,
                sex: req.body.sex,
                password: hash,
                description:  req.body.description.replace(/</g, "&lt;").replace(/>/g, "&gt;")
        
            }).then(result => {
                db("users").where('email', req.body.email ).select(
                 'id',
                 'full_name',
                 'email',
                 'description',
                 'age',
                 'profile_picture'
                ).then(result => callback('', result))
                .catch(err => callback(err, ''))
            })
            .catch(err => callback(err, ''))
        }
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

exports.roles = (email, callback) => {
    const user = db('users').join('role_users', 'users.id', '=', 'role_users.user_id').join('roles', 'roles.id', '=', 'role_users.role_id').where('email', email).select('*').asCallback((err) => callback(err, user));       
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

exports.emailCheck = (email, callback) => {
    db('users').where('email', email).select('id')
    .then(result => callback('', result))
    .catch(err => callback(err, ''))
}





