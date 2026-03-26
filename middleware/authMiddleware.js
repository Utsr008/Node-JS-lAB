const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];

    // Check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
        // Split at the space
        const bearer = bearerHeader.split(' ');
        
        // Get token from array
        const bearerToken = bearer[1];
        
        // Verify the token
        jwt.verify(bearerToken, 'mysecretkey', (err, authData) => {
            if (err) {
                return res.status(403).json({ message: "Forbidden: Invalid or expired token" });
            } else {
                // Attach the user information to the request object
                req.user = authData;
                next();
            }
        });
    } else {
        // Unauthorized
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }
};

module.exports = verifyToken;
