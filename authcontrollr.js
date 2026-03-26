const jwt = require('jsonwebtoken');

exports.generateToken = (req, res) => {
    const token = jwt.sign({ user: "dummyUser" }, "mysecretkey", { expiresIn: '1h' });
    res.json({
        token
    });
};