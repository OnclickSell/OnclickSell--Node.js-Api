
const listingsModel = require('../models/listings');

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

exports.create_single_listings = (req, res, next) => {
  
    this.callback = function callback(err) {
        if(err) {
            res.status(409).json({
                messgage: "Something is wrong with your request"
            })
        }else {
            res.status(200).json({
                messgage: 'You signed up successfully'
            })
        }
    }

    return listingsModel.create_single_listings(req, this.callback);
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

exports.get_all_listings = (req, res, next) => {
    function callback(err, listings) {
        if(err) {
            res.status(409).json({
                status: "Failed",
                code: 409,
                messgage: "Something is wrong with your request",
                result: []
            })
        }else {
            res.status(200).json({
                status: "OK",
                code: 200,
                messgage: 'All the listings are listed below',
                result: {
                    listings: listings
                }
            })
        }
    }
    return listingsModel.get_all_listings(req.query.offset, req.query.limit, req.query.order, callback);
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

exports.get_single_listings = (req, res, next) => {

    function callback(err, user) {
        if(err) {
            res.status(409).json({
                messgage: "Something is wrong with your request"
            })
        }else {
            res.status(200).json({
                messgage: 'All the users are listed below',
                users: user
            })
        }
    }
    return listingsModel.get_single_listings(req.params.id, callback);
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

exports.delete_single_listings = (req, res, next) => {
    function callback(err, user) {
        if(err) {
            res.status(409).json({
                messgage: "Something is wrong with your request"
            })
        }else {
            res.status(200).json({
                messgage: 'User were deleted successfully',
                users: user
            })
        }
    }
      
    return listingsModel.delete_single_listings(req.params.id, callback);
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

exports.update_single_listings = (req, res, next) => {
    function callback(err, user) {
        if(err) {
            res.status(409).json({
                messgage: "Something is wrong with your request"
            })
        }else {
            res.status(200).json({
                messgage: 'User were updated successfully',
                users: user
            })
        }
    }
      
    return listingsModel.update_single_listings(req.params.id, req.body, callback);
}

