
const jwt = require('jsonwebtoken');
const authModel = require('../models/auth');
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, 'secret');
        authModel.roles(decoded.email, (err, user) => {
            if (err) {
                res.status(500).json({

                })
            } else {
                if (user._rejectionHandler0[0].slug === 'admin') {
                    next();
                } else {
                    res.status(401).json({
                        message: 'You do not have admin right to access this route'
                    });
                }
            }
        });
    } catch (error) {
        res.status(401).json({
            message: 'You are not autenticated'
        });
    }
}