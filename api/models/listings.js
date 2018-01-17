
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

exports.get_all_listings = (offset, limit, order, callback) => {
    if (limit > 50) {
        limit = 50
    }
    db.select("*").from("listings").limit(+limit).offset(+offset).orderBy(order, 'asc').asCallback((err, value) => callback(err, value));       
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

exports.get_single_listings = (id, callback) => {
    db.select('*').from('listings').where({ id: id }).asCallback((err, value) => callback(err, value));       
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

exports.create_single_listings = (req, callback) => {
        
    db('listings').insert({

        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        profile_picture: 'fafsafsf',
        password: req.body.password

    }).asCallback((err) => callback(err));
        
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

exports.update_single_listings = (id, data, callback) => {
    db.update({
        first_name: data.name,
        last_name: data.last_name,
        description: data.description,
        email: data.email
    }).from('listings').where({ id: id }).asCallback((err, value) => callback(err, value));       
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

exports.delete_single_listings = (id, callback) => {
    db.del().from('listings').where({ id: id }).asCallback((err, value) => callback(err, value));       
}



