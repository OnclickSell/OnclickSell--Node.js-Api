
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

exports.get_all_reviews = (req, callback) => {
    db.select("*").from("review").where('list_id', req.body.id)
    .then(result => callback('', result))
    .catch(err => callback(err))
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

exports.get_single_review = (req, callback) => {
    db.select("*").from("review").where({
        id: req.body.id,
        list_id: req.body.list_id
    })
    .then(result => callback('', result))
    .catch(err => callback(err, ''))       
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

exports.update_single_review = (req, callback) => {
    db.update({
        review: req.body.review,
    }).from('users').where({ id: req.body.id })
    .then(result => callback('', result))
    .catch(err => callback(err, ''))    
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

exports.delete_single_user = (id, callback) => {
    db.del().from('users').where({ id: id }).asCallback((err, value) => callback(err, value));       
}



