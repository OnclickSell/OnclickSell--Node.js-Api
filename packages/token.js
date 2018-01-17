const jwt = require('jsonwebtoken');


exports.tokener = {
    issueToken: (email) => {
        return jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            email: email
          }, "secret");
    }
}